// Create an array to store product data initially empty.
const Product = require("../models/product");

exports.getAddProductView = (req, res, next) => {
  // Render the 'add-product' view with some dynamic data.
  res.render("add-product", {
    pageTitle: "Add Product", // Title for the page
    path: "/admin/add-product", // Path for this route
    formsCSS: true, // Flag indicating the use of forms CSS
    productCSS: true, // Flag indicating the use of product CSS
    activeAddProduct: true, // Flag indicating the active add-product page
  });
};

exports.addProduct = (req, res, next) => {
  // Push a new product object into the 'products' array based on the data received in the request.

  // create new product
  const product = new Product(req.body.title);
  // save the new product
  product.save();

  // Redirect to the root path ('/') after adding the product.
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //retrieve all products
  Product.fetchAll((products) => {
    // Render the 'shop' view and pass data to it.
    res.render("shop", {
      prods: products, // Products data
      pageTitle: "Shop", // Title for the page
      path: "/", // Path for this route
      hasProducts: products.length > 0, // Boolean indicating if there are products
      activeShop: true, // Flag indicating the active shop page
      productCSS: true, // Flag indicating the use of product CSS
    });
  });
};
