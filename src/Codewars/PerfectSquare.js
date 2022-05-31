let isSquare = function (n) {
    if (n === 0) {
        return true
    } else {
        return n % Math.sqrt(n) === 0
    }
}

console.log(isSquare(0))