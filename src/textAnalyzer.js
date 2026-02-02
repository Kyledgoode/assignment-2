function putWordsInArray(text) {
    const trimmed = text.trim();
    const matched = trimmed.match(/[A-Za-z']+/g);
    
    return matched
}

function countWords(text) {
    const words = putWordsInArray(text);
    
    return words.length;
}

function findLongestWord(text) {
    const words = putWordsInArray(text);
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}