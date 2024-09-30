import React, { useState } from 'react';
import axios from 'axios';

const SynonymInput = () => {
    const [word, setWord] = useState('');
    const [synonym, setSynonym] = useState('');

    const addSynonym = async () => {
        try {
            const response = await axios.post('https://synonimsapp-1.onrender.com/api/synonyms/add', {
                word,
                synonym,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error adding synonym:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
            <input
                type="text"
                placeholder="Synonym"
                value={synonym}
                onChange={(e) => setSynonym(e.target.value)}
            />
            <button onClick={addSynonym}>Add Synonym</button>
        </div>
    );
};

export default SynonymInput;
