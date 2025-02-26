const lastDigit = n => {
    // в n совсем не то
    if (isNaN(n) || !isFinite(n)) return NaN;
    // в n целое
    if (n % 1 === 0) return n % 10;
    // для дробных проще со строкой работать
    const s = String(Math.abs(n));
    // неточные значения
    if (s.length > 16 || s.includes('e')) return NaN;
    return +s.slice(-1);
}
console.log(lastDigit(25097))