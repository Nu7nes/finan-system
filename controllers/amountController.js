const Amount = require('../models/Amount');

const redirect = async (req, res) => {
    let type = req.params.type;
    let group = req.params.group;
    try {
        let doc = await Amount.find({ type })
        res.send(doc.name)
    } catch (error) {
        res.send(error);
    }
}

const addAmount = async (rec, res) => {
    let amount = new Amount(req.body)
    try {
        let doc = await amount.save()
        res.send("Conta adicionada!")
    } catch (error) {
        console.log(error);
    }
}

module.exports = { redirect, addAmount}