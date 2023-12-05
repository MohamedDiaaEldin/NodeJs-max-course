const express = require('express')
const  path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))


app.get('/main', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views', 'main.html'))
})

app.get('/branch', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views', 'branch.html'))
})

app.listen(3000)