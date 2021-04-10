//create a entry model 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    entry:{
        type: String,
    },
    // date:{
    //     type: Date,
    //     require: true,
    // }
    }, 
{ timestamps: true });

module.exports = mongoose.model("Entry", entrySchema)

