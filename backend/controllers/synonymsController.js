// controllers/synonymsController.js

let synonymsArray = [];

// Function to add a synonym
const addSynonym = (req, res) => {
    const { word, synonym } = req.body;

    // Check if the synonym already exists
    const existingEntry = synonymsArray.find(entry => entry.word === word);
    if (existingEntry) {
        existingEntry.synonyms.push(synonym);
    } else {
        synonymsArray.push({ word, synonyms: [synonym] });
    }

    res.status(201).json({ message: 'Synonym added successfully!', synonymsArray });
};

// Function to get synonyms
const getSynonyms = (req, res) => {
    const { word } = req.params;
    const entry = synonymsArray.find(entry => entry.word === word);

    if (entry) {
        res.json(entry.synonyms);
    } else {
        res.status(404).json({ message: 'No synonyms found for this word.' });
    }
};

module.exports = { addSynonym, getSynonyms };
