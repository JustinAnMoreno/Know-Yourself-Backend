//require the skill model 
const Entry = require("../models/entry");

async function index (req, res) {
    try { 
        const entries = await Entry.find({});
    res.status(200).json(entries); //send entries as JSON data as an HTTP response}
    } catch (error) {
        res.status(400).json({error: "something is wrong"});
    }
   
};

async function create (req, res) {
    try {
        const entry = await Entry.create(req.body);
        res.status(201).json(entry);
        index(req, res);
    } catch (error) {
        res.status(401).json({ error: "something is wrong" });
    }
};

module.exports = {
    index, 
    create,
};