// Функция для извлечения первой цифры числа 
function getFirstDigit(num) { 
    // Преобразовываем число в строку 
    let str = num.toString(); 
  
    // Возвращаем первый символ строки (первую цифру числа) в виде числа 
    return parseInt(str[0]); 
  } 
  
  // Функция для проверки совпадения первых цифр двух чисел 
  function checkFirstDigitsMatch(num1, num2) { 
    // Получаем первые цифры двух чисел 
    let firstDigit1 = getFirstDigit(num1); 
    let firstDigit2 = getFirstDigit(num2); 
  
    // Сравниваем первые цифры и возвращаем true, если они совпадают, иначе - false 
    return firstDigit1 === firstDigit2; 
  } 
  
  let number1 = 92345; 
  let number2 = 15678; 
  
  if (checkFirstDigitsMatch(number1, number2)) { 
    console.log("Первые цифры чисел совпадают."); 
  } else { 
    console.log("Первые цифры чисел не совпадают."); 
  }