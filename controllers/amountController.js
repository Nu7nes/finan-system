import Amount from '../models/Amount.js';

const all = async (req, res) => {
    try {
        let docs = await Amount.find()
        res.json(JSON.stringify(docs))
    } catch (error) {
        res.send(error)
    }
}

const byId = async (req, res) => {
    let id = req.params.id
    // console.log(id);
    try {
        let docs = await Amount.find({group: id})
        res.json(JSON.stringify(docs))
    } catch (error) {
        res.send(error)
    }
}

const redirect = async (req, res) => {
    let type = req.params.type;
    let group = req.params.group;
    try {
        let doc = await find({ type }).find({ group })
        res.send(doc)
    } catch (error) {
        res.send(error);
    }
}

const addAmount = async (req, res) => {
    let amount = new Amount(req.body)
    try {
        let doc = await amount.save();
        res.send(doc);
    } catch (error) {
        res.status(404).send(error);
    }

    
}

const deleteAmount = async (req, res) => {
    let id = req.body.id;
    // let group = new Group(req.params)
    try {
        await findByIdAndDelete(id);
        // res.send(id)
        res.status(200).send(id);
    } catch (error) {
        res.status(404).send(error)
    }
}

export default { all, byId, redirect, addAmount, deleteAmount }