const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
       
    name: {type: String, required: true},
    groupIndex: {type: Number, required: true}
    
})

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;