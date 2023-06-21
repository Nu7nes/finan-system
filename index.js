import 'dotenv/config'
import express from 'express';
import path from 'path';
import apiRoute from './routes/api.js'
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection;
db.on('error', () => { console.log("Houve um erro"); })
db.once('open', () => { console.log("Conectado ao DB 'dbfeira'"); })

app.use('/', apiRoute);
// app.use(express.static('public/scripts'));
// app.use(express.static('public/assets'));
if (process.env.NODE_ENV != 'development') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get("*", (req, res) => { res.sendFile(path.join(__dirname, 'client/build/index.html', (error) => { console.log(error); })) })
}
app.listen(process.env.PORT, () => {
    console.log("Servidor rodando - ", process.env.PORT);
})
