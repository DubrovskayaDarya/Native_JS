function squareDigits(num) {
    let a = Array.from(String(num), Number);
    for (let i = 0; i < a.length; i++) {
        a[i] = Math.pow(a[i], 2);
    }
    return +a.join('');
}