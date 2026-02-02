function putWordsInArray(text) {
    if (text === null) {
        return [];
    }
    const trimmed = text.trim();
    const matched = trimmed.match(/[A-Za-z']+/g);
    
    return matched
}

function countWords(text) {
    const words = putWordsInArray(text);
    if (words === null) {
        return 0;
    }

    return words.length;
}

function findLongestWord(text) {
    const words = putWordsInArray(text);
    if (words === null) {
        return '';
    }

    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

function countLines(text) {
    if (text === null) {
        return 0;
    }

    const lines = text.split('\n');
    return lines.length;
}

module.exports = {
    putWordsInArray,
    countWords,
    findLongestWord,
    countLines
}