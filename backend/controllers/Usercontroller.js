const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const getuser = require('../middleware/getuser');
const JWT_SECRET = config.app.jwt_secret;
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

/************* middleware */
exports.getusers = getuser;
/******************** IMAGE STORE */

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



/****************    CREATE USER       */

exports.createuserValidation = [
    body('username').isLength({ min: 3, max: 100 }).withMessage("Name must contains 3 to 100 characters").matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic.'),
    body('email').isEmail().withMessage("Please enter a valid Email ID").isLength({ min: 3, max: 100 }).withMessage('Email ID must contains 3 to 100 characters'),
    body('password').isLength({ min: 8, max: 14 }).withMessage('Password must contains atleast 8 characters and atmost 14 characters').custom((val, { req, location, path }) => {
        if (val !== req.body.cpassword) {
            throw new Error("Password does not match");
        }
        else {
            return true
        }
    })
]

exports.createUser = [exports.createuserValidation, async (req, res) => {

    /*** Checking validation  */
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ status: false, error: errors.array() });
    }

    /*** Submit user */
    try {
        /** Checking existing email ID  and phone number*/
        let user = await User.findOne({ email: req.body.email });
        // let existPh = await User.findOne({ ph: req.body.ph });
        if (user) {
            return res.status(400).json({ status: false, error: "Already Registered" })
        }


        /** create user */
        let salt = await bcrypt.genSalt(10);
        let pw = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: pw,
            userphoto: 'userlogo.png'
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

}]

/********************* USER LOGIN */

exports.userloginvalidation = [
    body('email').isLength({ min: 1, max: 100 }).withMessage('Please enter email ID  !!'),
    body('password').isLength({ min: 1, max: 100 }).withMessage('Please enter password !!!'),

];

exports.userLogin = [exports.userloginvalidation, async (req, res) => {
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
}]


/**************************** GET USERS */

exports.getUsers = [exports.getusers, async (req, res) => {
    try {
        const userId = await req.user.id;
        const user = await User.findById(userId).select('-password');
        return res.status(200).json({ status: true, data: user });
    } catch (error) {
        return res.status(400).json({ status: false, error: error });
    }
}]

/******************** UPDATE BASIC DETAILS */
exports.updateuservalidation = [
    body('username').isLength({ min: 3, max: 100 }).withMessage('Name must contain 3 to 100 characters').matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic.'),
    body('email').isEmail().withMessage("Please enter a valid Email ID").isLength({ min: 3, max: 100 }).withMessage('Email ID must contains 3 to 100 characters'),
];
exports.updateBasicdetails = [exports.getusers,
    exports.updateuservalidation
    , async (req, res) => {
        const { username, email } = req.body;
        var isExist_email = await User.findOne({ email: email, _id: { $ne: req.user.id } });
        if (isExist_email) {
            return res.status(404).json({ status: false, error: "Email already exist" });
        }
        var errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(200).json({ status: false, error: errors.array() });
        }
        try {
            const newUser = {};

            if (username) { newUser.username = username };
            if (email) { newUser.email = email };


            let userdata = await User.findById(req.user.id);
            if (!userdata) {
                return res.status(404).json({ status: false, error: "User not found" });
            }

            userdata = await User.findByIdAndUpdate(req.user.id, { $set: newUser }, { new: true }).select('-password');
            return res.status(200).json({ status: true, data: userdata });
        } catch (error) {
            return res.status(200).json({ status: false, error: "Something went wrong" });
        }
    }]


/******************************** CHANGE PASSWORD */
exports.changepwvalidation = [
    body('currentpassword').isLength({ min: 1, max: 100 }).withMessage('Please enter password !!!'),
    body('newpassword').isLength({ min: 8, max: 14 }).withMessage('Password must contains atleast 8 characters and atmost 14 characters').custom((val, { req, location, path }) => {
        if (val !== req.body.confirmpassword) {
            throw new Error("Password does not match");
        }
        else {
            return true
        }
    })
]
exports.changePassword = [exports.getusers, exports.changepwvalidation, async (req, res) => {
    try {

        let password = await req.body.currentpassword;
        let oldpassword = await User.findOne({ _id: req.user.id });
        let checkpassword = await bcrypt.compare(password, oldpassword.password);
        if (!checkpassword) {
            return res.status(404).json({ status: false, error: "Current Password mismatched !! Please try again" });
        }
        const newUser = {};
        if (req.body.newpassword) {
            const salt = await bcrypt.genSalt(10);
            const encryptedpassword = await bcrypt.hash(req.body.newpassword, salt);
            newUser.password = encryptedpassword;
        }

        let userdata = await User.findById(req.user.id);
        if (!userdata) {
            return res.status(404).json({ error: "User not found" });
        }

        userdata = await User.findByIdAndUpdate(req.user.id, { $set: newUser }, { new: true }).select('-password');
        return res.status(200).json({ status: true, data: userdata });
    } catch (error) {
        return res.status(404).json({ status: false, error: "Something went wrong" + error });
    }

}]


/***************************** CHANGE PROFILE PICTURE */

exports.uploadphoto = upload.single('userphoto');
exports.photovalidation = [
    body('userphoto').isLength({ min: 1, max: 100 }).withMessage('Please Choose profile picture !!')
]


exports.changeProfilepicture = [exports.getusers, exports.uploadphoto ,exports.photovalidation , async (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty) {
        return res.status(404).json({ status: false, error: errors.array() });
    }
    try {
        var photo = "";
        if (req.file) {
            photo = req.file.filename;
        }

        let userdata = await User.findById(req.user.id);


        if (!userdata) {
            return res.status(404).json({ status: false, error: "User not found!!" });
        }

        const newUser = {};
        newUser.userphoto = photo;
        userdata = await User.findByIdAndUpdate(req.user.id, { $set: newUser }, { new: true }).select('-password');

        return res.status(200).json({ status: true, data: userdata });

    } catch (error) {
        return res.status(404).json({ status: false, error: error });
    }
}]