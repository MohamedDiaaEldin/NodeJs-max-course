

const requestHandler = (req, res) => {
  const url = req.url;
  let html = "";

  if (url === "/") {
    html = `
            <html>
                <body>
                    <h2>Hello</h2>
                    <form action='/create-user' method='POST'>
                       <input type='text'  name='user'> 
                    <button type='submit' > submit</button> 
                </form> 
                </body>
            </html>
        `;
    res.write(html);


    return res.end();
  } else if (url === "/users") {
    html = `
        <html>
            <body>
                <ul>
                    <li>User1 </li>
                    <li>User2</li>
                    <li>User3</li>
                </ul>
            </body>
        </html>
    `;
    res.write(html);
    return res.end();


  } else if (url === "/create-user") {
    const data = []
    req.on('data', (chunk)=>{
        data.push(chunk)
    })

    req.on('end', ()=>{
        const parsedBody = Buffer.concat(data).toString()
        const user = parsedBody.split('=')[1]
        console.log(user)



        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    })

  }
  else{
      
        res.write("not implemented");
        res.end();
  }
};

module.exports.requestHandler = requestHandler;
