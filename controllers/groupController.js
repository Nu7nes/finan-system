import Group from '../models/Group.js';
import Amount from '../models/Amount.js';

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
        let doc = await find({ groupIndex: group })
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
        await findByIdAndDelete(id);
        await Amount.find({ group: id }).deleteMany()
        res.status(200).send(id);

    } catch (error) {
        res.status(404).send(error)
    }
}

export default { all, same, addGroup, deleteGroup }