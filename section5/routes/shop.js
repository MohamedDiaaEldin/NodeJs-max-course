const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const router = express.Router()

// start with /     GET 
router.get('/', (req, res, next)=>{ 
    return res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router