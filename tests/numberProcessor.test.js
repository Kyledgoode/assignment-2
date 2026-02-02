const{
    putNumbersInArray,
    findMax,
    findMin,
    findSum,
    findAverage
} = require('../src/numberProcessor');

describe('Number Processor Functions', () => {
    describe('putNumbersInArray', () => {
        test('converts string of numbers into array', () => {
            const numbers = "1\n2\n3\n4";
            expect(putNumbersInArray(numbers)).toEqual([1,2,3,4]);
        });
    });
    describe('findMax', () => {
        test('finds max from positive numbers', () => {
            const numbers = "1\n2\n3\n4";
            expect(findMax(numbers)).toBe(4);
        });
        test('finds max from negative numbers', () => {
            const numbers = "-1\n-9\n-3\n-6"
            expect(findMax(numbers)).toBe(-1);
        });
        test('finds max from null', () => {
            const numbers = ""
            expect(findMax(numbers)).toBe(0);
        });
    });

    describe('findMin', () => {
        test('finds min from positive numbers', () => {
            const numbers = "1\n9\n3\n6"
            expect(findMin(numbers)).toBe(1);
        });
        test('finds min from negative numbers', () => {
            const numbers = "-1\n-9\n-3\n-6"
            expect(findMin(numbers)).toBe(-9);
        });
        test('finds min from null', () => {
            const numbers = ""
            expect(findMin(numbers)).toBe(0);
        });
    });

    describe('findSum', () => {
        test('finds sum from positive numbers', () => {
            const numbers = "1\n9\n3\n6"
            expect(findSum(numbers)).toBe(19);
        });
        test('finds sum from negative numbers', () => {
            const numbers = "-1\n-9\n-3\n-6"
            expect(findSum(numbers)).toBe(-19);
        });
        test('finds sum from null', () => {
            const numbers = ""
            expect(findSum(numbers)).toBe(0);
        });
    });

    describe('findAverage', () => {
        test('finds average from positive numbers', () => {
            const numbers = "1\n9\n3\n6"
            expect(findAverage(numbers)).toBe(5.25);
        });
        test('finds average from negative numbers', () => {
            const numbers = "-1\n-9\n-3\n-6"
            expect(findAverage(numbers)).toBe(-5.25);
        });
        test('finds average from null', () => {
            const numbers = ""
            expect(findAverage(numbers)).toBe(0);
        });
    });
});