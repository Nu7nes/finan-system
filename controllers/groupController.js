const Group = require('../models/Group');

const all = async (req, res) => {
    try {
        let docs = await Group.find()
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
}

const same = async (req, res) => {
    // let type = req.params.type;
    let group = req.params.group;
    try {
        let doc = await Group.find({ groupIndex: group })
        res.send(doc)
    } catch (error) {
        res.send(error);
    }
}

const addGroup = async (req, res) => {
    let group = new Group(req.body)
    try {
        let doc = await group.save()
        res.send("Conta adicionada!")
    } catch (error) {
        console.log(error);
    }
}

module.exports = { all, same, addGroup }