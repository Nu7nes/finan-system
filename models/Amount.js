const mongoose = require('mongoose');

const amountSchema = new mongoose.Schema({
    // title: { type: String, required: true },
    // description: String,
    // url: { type: String, required: true },
    // click: { type: Number, default: 0 }

    type: {type: String, required: true},
    name: {type: String, required: true},
    value: {type: Number, required: true},
    group: {type: String}
    
})

const Amount = mongoose.model('Amount', amountSchema, 'amounts');

module.exports = Amount;