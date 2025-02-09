const express = require("express");
const router =  express.Router();
const logoutController = require("../Controllers/logoutController");

router.post("/user/logout", logoutController.logoutController);

module.exports = router;
