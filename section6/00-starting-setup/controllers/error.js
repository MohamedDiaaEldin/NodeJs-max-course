exports.getNotFound = (req, res, next) => {
  // Set the HTTP response status to 404 (Page Not Found) and render the '404' view.
  res.status(404).render("404", { pageTitle: "Page Not Found" , path: 'Error'},);

};
