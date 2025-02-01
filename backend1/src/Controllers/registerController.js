const registerUser = require('../Models/userModel'); 
const bcrypt = require("bcrypt");

const saltRounds = 10;

exports.registerController = async (req, res) => {
    const { userName, email, password } = req.body;
    console.log("registerUser", req.body);

    // Check if password is missing
    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }

    try {
        // Check if user already exists
        const existingUser = await registerUser.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before storing in the database
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const user = new registerUser({ userName, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};
