console.log("Starting server...");
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());


fs.readFile('dictionary.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading dictionary file:", err);
        return;
    }
    const dictionary = {};
    data.split('\n').forEach(word => {
        const cleanWord = word.trim();
        if (cleanWord) {
            const sorted = cleanWord.toLowerCase().split('').sort().join('');
            if (!dictionary[sorted]) {
                dictionary[sorted] = [];
            }
            dictionary[sorted].push(cleanWord);
        }
    });
    console.log('Dictionary loaded.');

    app.get('/unscramble/:word', (req, res) => {
        const scrambledWord = req.params.word.toLowerCase();
        const unscrambledWords = findUnscrambledWords(scrambledWord, dictionary);
        res.json(unscrambledWords);
    });

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
});

function findUnscrambledWords(word, dictionary) {
    const letters = word.split('');
    const foundWords = new Set();

    // Helper to generate subsets (powerset)
    function generateSubsets(arr) {
        let result = [];
        for (let i = 1; i < (1 << arr.length); i++) {
            let subset = [];
            for (let j = 0; j < arr.length; j++) {
                if ((i >> j) & 1) {
                    subset.push(arr[j]);
                }
            }
            result.push(subset);
        }
        return result;
    }

    const subsets = generateSubsets(letters);

    for (const subset of subsets) {
        // Sort the subset to create the key
        const key = subset.sort().join('');
        if (dictionary[key]) {
            dictionary[key].forEach(w => foundWords.add(w));
        }
    }

    return Array.from(foundWords).sort((a, b) => b.length - a.length || a.localeCompare(b));
}

