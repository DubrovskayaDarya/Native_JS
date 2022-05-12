//Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = arr => {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        resArr[i] = arr[i] * Math.pow(2, (arr.length - (i + 1)));
    }
    return resArr.reduce((a, b) => a + b);
};


//Best Practice
const binaryArrayToNumberBest = arr => {
    return parseInt(arr.join(""), 2)
};