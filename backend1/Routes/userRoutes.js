const express = require("express");
const router = express.Router();
//insert model
const users = require("../Models/userModel");
//insert controller
const UserControllers = require("../Controllers/userController");

router.get("/", UserControllers.getAllUsers);

//export
module.exports = router;