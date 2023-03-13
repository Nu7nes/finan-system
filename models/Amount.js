const mongoose = require('mongoose');

const amountSchema = new mongoose.Schema({
   

    type: {type: String, required: true},
    name: {type: String, required: true},
    value: {type: Number, required: true},
    group: {type: String}
    
})

const Amount = mongoose.model('Amount', amountSchema);

module.exports = Amount;