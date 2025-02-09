const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//import individual routes
const regRouter = require('./src/Routes/registerRoutes');
const loginRouter = require('./src/Routes/loginRoutes');
const logoutRouter = require('./src/Routes/logoutRoutes');

// Create the server
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());


// Start the server
app.listen(5001, () => {
    console.log("Server is running on port 5001");
    });
    

// Use the routes
app.use('/api', regRouter); 
app.use('/api', loginRouter);
app.use('/api', logoutRouter);



