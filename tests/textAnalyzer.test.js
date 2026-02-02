const {
    countWords,
    findLongestWord,
    countLines
} = require('../src/textAnalyzer');

describe ('Text Analyzer Functions', () => {
    describe('countWords', () => {
        test('should return correct word count for normal text', () => {
            const text = "one two three";
            expect(countWords(text)).toBe(3);
        });
        test('should return 0 for empty string', () => {
            const text = "";
            expect(countWords(text)).toBe(0);
        })
        test("white spaces only returns 0", () => {
            const text = "   ";
            expect(countWords(text)).toBe(0);
        })
    });

    describe('findLongestWord', () => {
        test('should return the longest word in normal text', () => {
            const text = "I am the longestwordhere for sure";
            expect(findLongestWord(text)).toBe("longestwordhere");
            });
        test('should return empty string for no words', () => {
            const text = "";
            expect(findLongestWord(text)).toBe("");
        });
        test('should return the first longest word in case of tie', () => {
            const text = "cat bat rat";
            expect(findLongestWord(text)).toBe("cat");
        });
    });

    describe('countLines', () => {
        test('should return correct amount of lines', () => {
            const text = "line one\nline two\nline three";
            expect(countLines(text)).toBe(3);
        }); 
        test('should return 1 for one line', () => {
            const text = "Just one line here";
            expect(countLines(text)).toBe(1);
        });
        test('should return 0 for null', () => {
            const text = null;
            expect(countLines(text)).toBe(0);
        }); 
    });
});