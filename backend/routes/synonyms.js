const express = require('express');
const { addSynonym, getSynonyms } = require('../controllers/synonymsController');

const router = express.Router();

// Routes for adding and looking up synonyms
router.post('/add', addSynonym);
router.get('/lookup/:word', getSynonyms);

module.exports = router;
