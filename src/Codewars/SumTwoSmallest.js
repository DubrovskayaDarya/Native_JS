function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => (a - b))
    return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([1, 1, 5, 4, 3, 2]))
