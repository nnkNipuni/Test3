const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/Routes/registerRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());


mongoose.connect("mongodb+srv://nnknnknipuni:zkEesN-LKKGX9K7@cluster1.wdase.mongodb.net/Parking_Management")
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.log(err));

// Use the registerRouter for routes
app.use('/api', router); // Mount the router at /api

// Start the server
app.listen(5001, () => {
console.log("Server is running on port 5001");
});

