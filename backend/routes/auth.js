const express = require('express');
const router = express.Router();
const userController = require('../controllers/Usercontroller');


/*****  User Registration */
router.route('/createuser').post(userController.createUser)

/********************** User Login ****************/
router.post('/userlogin', userController.userLogin)

/********************************** Get User Data ***********************/
router.post('/getuser',userController.getUsers )

/********************************* Update user basic details **************************************/
router.put('/updatebasicdetails', userController.updateBasicdetails);

/********************************************************  Check Current password  ******************/
router.post('/changepassword',userController.changePassword )

/***************************************************** Change Profile Picture **********************/
router.post('/changeprofilepic', userController.changeProfilepicture)



module.exports = router;