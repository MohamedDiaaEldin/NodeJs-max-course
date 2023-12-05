// Import the 'path' module to work with file and directory paths.
const path = require('path');

// Import the 'express' module to create an Express router.
const express = require('express');

// Import the 'rootDir' variable from the 'path' module for the root directory path.
const rootDir = require('../util/path');

// Import data from the 'admin' module.
const adminData = require('./admin');

// Create an Express router to define and handle routes.
const router = express.Router();
const productController = require('../controllers/products')

// Define a route handler for the root path ('/') using the HTTP GET method.
router.get('/', productController.getProducts);

// Export the router so it can be used in other parts of the application.
module.exports = router;
