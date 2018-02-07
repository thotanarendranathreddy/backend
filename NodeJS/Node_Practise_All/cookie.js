var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())
console.log("server started")
app.get('/', function(req, res) {
   console.log("Cookies: ", req.cookies)
})
app.listen(8089)