const Amount = require('../models/Amount');

const all = async (req, res) => {
    try {
        let docs = await Amount.find()
        res.json(JSON.stringify(docs))
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
        let doc = await amount.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

const deleteAmount = async (req, res) => {
    let id = req.body.id;
    // let group = new Group(req.params)
    try {
        await Amount.findByIdAndDelete(id);
        // res.send(id)
        res.status(200).send(id);
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { all, redirect, addAmount, deleteAmount }