const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");


  let htmlCode = "";
  if (url === "/") {
    htmlCode = `
        <html> 
        <body>
            <h2>enter your name</h2> 
            <form action='/message' method='POST'>
                <input type='text'  name='message'> 
                <button type='submit'   > Send </button> 
            </form> 
        </body> 
        </html>`;
    res.write(htmlCode);
    return res.end();
  }


  if (url === "/message" && method === "POST") {
    //
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      // parse data
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      // save data into a file
      fs.writeFile("message.txt", message, (error) => {
        if (!error) {
          console.log("file saved");
          // response
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        }
      });
    });
  }
  
  
  else {
    htmlCode = `
    <html> 
    <body>
    <h2>hello there</h2> 
    </body> 
    </html>
    `;
    res.write(htmlCode);

    return res.end();
  }
};


module.exports = {
    handler:requestHandler, 
    someText:'hello there'
} ;


// module.exports.handler = requestHandler
// module.exports.someText = 'hello there'