const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


router.get("/google/login", authController.googleLogin);
router.get("/google/callback", authController.googleCallback);


module.exports = router;