import React, { useState } from 'react';
import axios from 'axios';

const SynonymLookup = () => {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState([]);

  const lookupSynonyms = async () => {
    const response = await axios.get(`http://localhost:10000/api/synonyms/lookup/${word}`);
    setSynonyms(response.data);
  };

  return (
    <div>
      <h2>Lookup Synonyms</h2>
      <input
        type="text"
        placeholder="Enter word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={lookupSynonyms}>Lookup</button>
      <div>
        {synonyms.length > 0 && (
          <ul>
            {synonyms.map((syn, index) => (
              <li key={index}>{syn}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SynonymLookup;
