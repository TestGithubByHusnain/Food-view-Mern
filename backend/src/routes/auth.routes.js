const express = require('express');
const authController = require("../controllers/auth.controller")
const multer = require('multer');

const router = express.Router();

// Multer memory storage for small uploads; image file expected on registration
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB limit

// user auth APIs
router.post('/user/register', authController.registerUser)
router.post('/user/login', authController.loginUser)
router.get('/user/logout', authController.logoutUser)



// food partner auth APIs - accept single image file named 'image'
router.post('/food-partner/register', upload.single('image'), authController.registerFoodPartner)
router.post('/food-partner/login', authController.loginFoodPartner)
router.get('/food-partner/logout', authController.logoutFoodPartner)


module.exports = router;