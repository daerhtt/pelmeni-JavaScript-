let word_11 = prompt("Введите слово")
if(word_11.slice(-1) === "ь")  {
    console.log(word_11.slice(-2, -1))
} else if(word_11.slice(-1) != "ь") {
    console.log(word_11.slice(-1))
}