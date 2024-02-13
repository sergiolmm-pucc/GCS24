const express = require('express');
const app = express();

console.log('No value for FOO yet:', process.env.FOO);
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
console.log('Now the value for FOO is:', process.env.FOO);  

//variables
const userdb = process.env.USERDB
const passwdb = process.env.PASSWDB
const database = process.env.DATABASE
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json('Hello World!')
  })
  
app.get('/oi', (req, res) => {
    res.json('teste do ftp OK')
  })


app.get('/users', function (req, res) {
    res.json("Em desenvolvimento")   
})


var server = app.listen(port, function () {
   console.log("Exemplo de app ouvindo na porta : %s", port)
})