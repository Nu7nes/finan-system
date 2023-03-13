const PORT = 3000;
const express = require('express');
const path = require('path');
const apiRoute = require('./routes/api');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/dbfeira', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection;
db.on('error', ()=>{console.log("Houve um erro");})
db.once('open', ()=>{console.log("Conectado ao DB 'dbfeira'");})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', apiRoute);

app.listen(PORT, () => {
    console.log("Servidor rodando - ", PORT);
})