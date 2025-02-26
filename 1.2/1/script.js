function firstDigit(n) {
    while (n > 10) {
        n /= 10
    }
    return Math.floor(n)
}
console.log(firstDigit(25097))