function factorial(n) {
    if (n == 1) return 1;
    else return n * factorial(n - 1);
}
var userNum = +prompt('Введите число для вычисления факториала');
alert(factorial(userNum));