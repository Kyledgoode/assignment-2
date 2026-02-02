function putNumbersInArray(numbers) {
    let array = [];
    const sameLineText = numbers.split("\n");
    for (let i = 0; i < sameLineText.length; i++) {
        const temp = sameLineText[i].trim();
        array.push(Number(temp));
    }
    return array;
}

function findMax(numbers) {
    const array = putNumbersInArray(numbers);
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function findMin(numbers) {
    const array = putNumbersInArray(numbers);
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function findSum(numbers) {
    const array = putNumbersInArray(numbers);
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    return sum;
}

function findAverage(numbers) {
    let array = putNumbersInArray(numbers);
    let sum = findSum(numbers);
    if (array.length === 0) {
        return 0;
    }
    let average = sum / array.length;
    return average;
}

module.exports = {
    putNumbersInArray,
    findMax,
    findMin,
    findSum,
    findAverage
}