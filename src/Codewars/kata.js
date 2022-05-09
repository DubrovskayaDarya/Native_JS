// need to remove 5

function dontGiveMeFive(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        if (!(i.toString().includes('5'))) {
            arr.push(i.toString())
        }
    }
    return arr.length
}

console.log(dontGiveMeFive(1, 20));
