//create a entry model 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    entry:{
        type: String,
    },
    uid:{
        type: String,
    }
    }, 
{ timestamps: true });

module.exports = mongoose.model("Entry", entrySchema)

