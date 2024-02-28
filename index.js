const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = process.env.PORT
server.listen(PORT, function(){
    console.log("Aplicacion corriendo en EL PUERTO: " + PORT)
})



/* require('dotenv').config()
//const dotenv = require('dotenv')
//dotenv.config()
const http = require('http')

function requestController(){
    console.log('Hola Mundo!!!!!!!')
    
}

const server = http.createServer(requestController)
const PORT = process.env.PORT
server.listen(PORT, function(){
    console.log("Aplicacion corriendo en EL PUERTO: " + PORT)
}) */

