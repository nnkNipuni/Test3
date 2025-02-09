exports.logoutController = async (req, res) => {
    try {
        // Clear the token (if it's stored in cookies, headers, or elsewhere)
        // This typically happens on the client-side, so you might just want to send a success message.
        
        // If you store the JWT in cookies:
        res.clearCookie('token'); // Clear token cookie (if you're using cookies)

        // Optionally, you can also remove the token from the request headers or body if needed

        res.status(200).json({ message: "User logged out successfully" });
}catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};