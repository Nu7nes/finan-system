
const express = require('express');
const path = require('path');
const apiRoute = require('./routes/api');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/dbfeira', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection;
db.on('error', ()=>{console.log("Houve um erro");})
db.once('open', ()=>{console.log("Conectado ao DB 'dbfeira'");})

app.use('/', apiRoute);
app.use(express.static('public/scripts'));
app.use(express.static('public/assets'));
app.get("/", (req, res) => {res.sendFile(__dirname+"/public/index.html")})

app.listen(process.env.PORT,"192.168.1.68", () => {
    console.log("Servidor rodando - ", process.env.PORT);
})