// Import the 'path' module to work with file and directory paths.
const path = require('path');

// Import the 'express' module to create an Express application.
const express = require('express');

// Import the 'body-parser' middleware for parsing incoming request bodies.
const bodyParser = require('body-parser');  

// Create an Express application.
const app = express();


// Set the view engine for rendering dynamic content to 'ejs'.
app.set('view engine', 'ejs');

// Set the directory where your views (templates) are located.
app.set('views', 'views');

// Import the routes for the admin section of the application.
const adminRoutes = require('./routes/admin');

// Import the routes for the shop section of the application.
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

// Parse incoming request bodies in URL-encoded format.
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., CSS, images) from the 'public' directory.
app.use(express.static(path.join(__dirname, 'public')));


// Use the '/admin' prefix for routes defined in the 'admin' module.
app.use('/admin', adminRoutes.routes);

// Use the routes defined in the 'shopRoutes' module for all other requests.
app.use(shopRoutes);

// Handle requests that don't match any of the defined routes.
app.use(errorController.getNotFound);

// Start the Express application, listening on port 3000.
app.listen(3000);
