function highAndLow(numbers) {
    let a = Array.from(numbers.split(' '), Number);
    let result = [-Number.MAX_VALUE, Number.MAX_VALUE];

    for (let i = 0; i < a.length; i++) {

        if (a[i] >= result[0]) {
            result[0] = a[i]
        }
        if (a[i] <= result[1]) {
            result[1] = a[i]
        }
    }
    return result.join(' ')
}
