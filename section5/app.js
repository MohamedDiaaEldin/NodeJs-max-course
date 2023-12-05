const express = require('express')
const path = require('path')
const rootDir = require('./util/path')

const adminRoutes = require('./routes/admin')
const shopRouter = require('./routes/shop')
const exp = require('constants')

const app = express()

// app.use(bodyParser.urlencoded())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRouter)


app.use((req,res, next)=>{    
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})
app.listen(3000)