const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const router = express.Router();
const config = require('../config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const getuser = require('../middleware/getuser');
const JWT_SECRET = config.app.jwt_secret;
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'backend/images');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });
/*****  User Registration */
router.route('/createuser').post(upload.single('userphoto'),
    [
        body('username').isLength({ min: 3, max: 100 }).withMessage("Name must contains 3 to 100 characters").matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic.'),
        body('email').isEmail().withMessage("Please enter a valid Email ID").isLength({ min: 3, max: 100 }).withMessage('Email ID must contains 3 to 100 characters'),
        body('address').isLength({ min: 3, max: 100 }).withMessage('Address must contains atleast 3 to 100 characters'),
        body('ph').isLength({ min: 10, max: 10 }).withMessage('Please Enter 10 digits phone number').isNumeric().withMessage('Please Enter digits only'),
        body('password').isLength({ min: 8, max: 14 }).withMessage('Password must contains atleast 8 characters and atmost 14 characters').custom((val, { req, location, path }) => {
            if (val !== req.body.cpassword) {
                throw new Error("Password does not match");
            }
            else {
                return true
            }
        })

    ], async (req, res) => {

        /*** Checking validation  */
        var errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: false, error: errors.array() });
        }

        /*** Submit user */
        try {
            /** Checking existing email ID  and phone number*/
            let user = await User.findOne({ email: req.body.email });
            let existPh = await User.findOne({ ph: req.body.ph });
            if (existPh || user) {
                return res.status(400).json({ status: false, error: "Already Registered" })
            }

            var photo = "";
            if (req.file) {
                photo = req.file.filename;
            }

            /** create user */
            let salt = await bcrypt.genSalt(10);
            let pw = await bcrypt.hash(req.body.password, salt);
            user = await User.create({
                username: req.body.username,
                address: req.body.address,
                email: req.body.email,
                ph: req.body.ph,
                password: pw,
                userphoto: photo
            })

            const data = {
                user: {
                    id: user.id
                }
            }

            const authtoken = jwt.sign(data, JWT_SECRET);
            res.status(200).json({ status: true, authtoken: authtoken });

        } catch (error) {
            return res.status(400).json({ status: false, error: "Some error occured" + error })
        }
    })


/********************** User Login ****************/

router.post('/userlogin', [
    body('email').isLength({ min: 1, max: 100 }).withMessage('Please enter email ID  !!'),
    body('password').isLength({ min: 1, max: 100 }).withMessage('Please enter password !!!'),

], async (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ status: false, error: errors.array() });
    }

    try {
        let email = await User.findOne({ email: req.body.email });

        if (!email) {
            return res.status(400).json({ status: false, error: "Credential Mismatched !!!" });
        }

        let pw = await bcrypt.compare(req.body.password, email.password);
        if (!pw) {
            return res.status(400).json({ status: false, error: "Credential Mismatched !!!" });
        }

        const data = {
            user: {
                id: email.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        return res.status(200).json({ status: true, authtoken: authtoken });
    } catch (error) {
        return res.status(400).json({ status: false, error: error });
    }
})


/********************************** Get User Data ***********************/
router.post('/getuser', getuser, async (req, res) => {
    try {
        const userId = await req.user.id;
        const user = await User.findById(userId).select('-password');
        return res.status(200).json({ status: true, data: user });
    } catch (error) {
        return res.status(400).json({ status: false, error: error });
    }
})


/********************************* Update user basic details **************************************/
router.put('/updatebasicdetails', getuser, 
 [
    body('username').isLength({ min: 3, max: 100 }).withMessage('Name must contain 3 to 100 characters').matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic.'),
    body('address').isLength({ min: 3, max: 100 }).withMessage('Address must contain 3 to 100 characters'),
], async (req, res) => {
    const { username, address } = req.body;
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ status: false, error: errors.array() });
    }
    try {
        const newUser = {};

        if (username) { newUser.username = username };
        if (address) { newUser.address = address };
        

        let userdata = await User.findById(req.user.id);
        if (!userdata) {
            return res.status(404).json({ status: false, error: "User not found" });
        }

        userdata = await User.findByIdAndUpdate(req.user.id, { $set: newUser }, { new: true }).select('-password');
        return res.status(200).json({ status: true, data: userdata });
    } catch (error) {
        return res.status(200).json({ status: false, error: "Something went wrong" });
    }
});


/********************************* Update user contact details **************************************/
router.put('/updatecontactdetails', getuser, 
 [
    body('email').isEmail().withMessage("Please enter a valid Email ID").isLength({ min: 3, max: 100 }).withMessage('Email ID must contains 3 to 100 characters'),
    body('ph').isLength({ min: 10, max: 10 }).withMessage('Please Enter 10 digits phone number').isNumeric().withMessage('Please Enter digits only'),
], async (req, res) => {
    const { email, ph } = req.body;
    var isExist_email = await User.findOne({email: email,_id:{$ne:req.user.id}});
    var isExist_ph = await User.findOne({ph:ph,_id:{$ne:req.user.id}});
    if(isExist_email){
        return res.status(404).json({status:false,error:"Email already exist"});
    } 
    if(isExist_ph){
        return res.status(404).json({status:false,error:"Phone number already exist"});
    }
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ status: false, error: errors.array() });
    }
    try {
        const newUser = {};

        if (email) { newUser.email = email };
        if (ph) { newUser.ph = ph };
        
        let userdata = await User.findById(req.user.id);
        if (!userdata) {
            return res.status(404).json({ status: false, error: "User not found" });
        }

        userdata = await User.findByIdAndUpdate(req.user.id, { $set: newUser }, { new: true }).select('-password');
        return res.status(200).json({ status: true, data: userdata });
    } catch (error) {
        return res.status(200).json({ status: false, error: "Something went wrong" });
    }
});

/********************************************************  Check Current password  ******************/
router.post('/checkcurrentpassword',getuser,async (req, res)=>{
    const password = req.body.currentpassword;
    const userid = req.user.id;

    const userdata = await User.findById(userid);
    const findpassword  = await bcrypt.compare(password,userdata.password);
    if(!findpassword){
        return res.status(404).json({status:false,error:"Password incorrect"});
    }

})
module.exports = router;