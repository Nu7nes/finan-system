const Group = require('../models/Group');

const redirect = async (req, res) => {
    let group = req.params.group;
    try {
        let doc = await Group.findOne({ group });
        res.redirect(doc.url);
    } catch (error) {
        res.send(error);
    }
}

const addGroup = async (rec, res) => {
    let group = new Group(req.body)
    try {
        let doc = await group.save()
        res.send("Grupo adicionada!")
    } catch (error) {
        console.log(error);
    }
}

module.exports = { redirect, addGroup}