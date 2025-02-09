const express = require("express");
const router =  express.Router();
const loginController = require("../Controllers/loginController");

router.post("/user/login", loginController.loginController);

module.exports = router;