function getSumm(num){
    num = '' + num;
    return +num[0] + (+num[num.length-1]);
}
 
alert(getSumm(93157013));