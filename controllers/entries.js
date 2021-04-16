//require the skill model 
const Entry = require("../models/entry");

async function index (req, res) {
    try { 
        const entries = await Entry.find({uid: req.query.uid});
    res.status(200).json(entries); //send entries as JSON data as an HTTP response}
    } catch (error) {
        res.status(400).json({error: "something is wrong"});
    }
   
};

async function create (req, res) {
        const entry = await Entry.create(req.body);
        req.query.uid = entry.uid;
        index(req, res);
};

async function deleteSkill(req, res) {
    const deletedEntry = await Entry.findByIdAndDelete(req.params.id);
    req.query.uid = deletedEntry.uid;
    index(req, res);
};

async function update(req, res) {
    const updatedEntry = await Entry.findByIdAndUpdate(
        req.params.id, req.body, { new: true }
    );
        req.query.uid = updatedEntry.uid;
        index(req, res);
}

module.exports = {
    index, 
    create,
    delete: deleteSkill,
    update,
};