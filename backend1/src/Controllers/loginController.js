const bcrypt = require("bcrypt");
const loginUser = require("../Models/userModel");
const jwt = require("jsonwebtoken");

exports.loginController = async (req, res) => {
    const { email, password } = req.body;
    console.log("loginUser", req.body);

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Check if user exists
        const user = await loginUser.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Create a token
        const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
        res.status(200).json({ 
            token : token ,
            message : "User logged in successfully"
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

