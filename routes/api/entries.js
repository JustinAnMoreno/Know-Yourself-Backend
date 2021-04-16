const express = require('express');
const router = express.Router();
const entriesCtrl = require("../../controllers/entries");

router.get("/", entriesCtrl.index);
router.post("/", entriesCtrl.create);
router.delete('/:id', entriesCtrl.delete);
router.put('/:id', entriesCtrl.update);

module.exports = router;