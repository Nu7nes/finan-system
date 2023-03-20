const Group = require('../models/Group');
const Amount = require('../models/Amount');

const all = async (req, res) => {
    try {
        let docs = await Group.find({})
        res.json(JSON.stringify(docs))
    } catch (error) {
        res.send(error)
    }
}

const same = async (req, res) => {
    // let type = req.params.type;
    let group = req.params.group;
    try {
        let doc = await Group.find({ groupIndex: group })
        res.json(JSON.stringify(doc))
    } catch (error) {
        res.send(error);
    }
}

const addGroup = async (req, res) => {
    let group = new Group(req.body)
    try {
        let doc = await group.save();
        res.redirect('/');
    } catch (error) {
        res.status(404).send(error);
    }
}

const deleteGroup = async (req, res) => {
    let id = req.body.id;
    try {
        await Group.findByIdAndDelete(id);
        await Amount.find({ group: id }).deleteMany()
        res.status(200).send(id);

    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { all, same, addGroup, deleteGroup }