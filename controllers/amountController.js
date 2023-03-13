const Amount = require('../models/Amount');

const all = async (req, res) => {
    try {
        let docs = await Amount.find()
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
}

const redirect = async (req, res) => {
    let type = req.params.type;
    let group = req.params.group;
    try {
        let doc = await Amount.find({ type }).find({ group })
        res.send(doc)
    } catch (error) {
        res.send(error);
    }
}

const addAmount = async (req, res) => {
    let amount = new Amount(req.body)
    try {
        let doc = await amount.save()
        res.send("Conta adicionada!")
    } catch (error) {
        console.log(error);
    }
}

module.exports = { all, redirect, addAmount }