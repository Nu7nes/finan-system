import mongoose from 'mongoose';

let groupSchema = new mongoose.Schema({
       
    name: {type: String, required: true},
    createdAt: { type: Date, default: Date.now }
    
})

const Group = mongoose.model('Group', groupSchema);

export default Group;