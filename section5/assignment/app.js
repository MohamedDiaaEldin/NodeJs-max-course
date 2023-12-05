const express = require('express')

const app = express()

app.use('/users', (req, res, next)=>{
    console.log('users middleware')
    return res.send('<h1>Users page</h1>')
})


// app.use('/products', (req, res, next)=>{
//     console.log('/ products')
//     res.send('<h1>product page</h1>')
// })

app.use('/', (req, res, next)=>{
    console.log('/ middleware')
    res.send('<h1>Main page</h1>')
})

app.listen(3000)