require('dotenv').load()
const http = require('http')
var fs = require('fs')
var express = require('express');
var page = fs.readFileSync("./public/file.html")
console.log(page)
var app = express();
app.get('/', (req, res) => res.send(page.toString()))
app.listen(3000, function() { console.log('listening'); });