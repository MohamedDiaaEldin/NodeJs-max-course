// Import the 'path' module to work with file and directory paths.
const path = require('path');

// Import the 'express' module to create an Express router.
const express = require('express');

// Import the 'rootDir' variable from the 'path' module for the root directory path.
const rootDir = require('../util/path');

// Create an Express router to define and handle routes.
const router = express.Router();
const productController = require('../controllers/products')


// Define a route handler for the GET request to '/admin/add-product'.
router.get('/add-product', productController.getAddProductView);

// Define a route handler for the POST request to '/admin/add-product'.
router.post('/add-product', productController.addProduct);

// Export the router
exports.routes = router;

