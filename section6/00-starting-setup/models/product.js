const path = require('path')
const fs = require('fs')
const filePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // This function is responsible for saving the current object (this) to a JSON file.
save() {
  // Constructing the file path where the data will be stored

  // Read the existing products data from the products.json file
  fs.readFile(filePath, (error, fileContent) => {
      // Create an empty array to store products
      let products = [];

      // Check if there was no error reading the file
      if (!error) {
          // Parse the existing file content into an array of products
          products = JSON.parse(fileContent);
      }

      // Add the current object (this) to the products array
      products.push(this);

      // Write the updated products array back to the products.json file
      fs.writeFile(filePath, JSON.stringify(products), (error)=> {
          // Check if there was an error writing to the file
          if (error) {
              console.log(error)
          }
      });
  });
}

  static fetchAll(cb) {
    fs.readFile(filePath, (error, fileContent)=>{

      if(error || fileContent === undefined ){
         return cb([])
      }
      
       cb(JSON.parse(fileContent))
    })
  }
};
