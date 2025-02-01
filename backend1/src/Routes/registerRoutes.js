const express = require("express");
const router = express.Router();
const registerController = require("../Controllers/registerController");


router.post("/user/register", registerController.registerController);

module.exports = router;