/*
 * function to change colors of letters in alphabet
 * colors = [red, green, black]
 */

let colors = ["#CC0000", "#00CC00", "#000000"];

var changeColor = function (letter) {
    letter.colorIdx = letter.colorIdx || 0;
    letter.style.color = colors[letter.colorIdx++ % colors.length];
    replaceColor(letter);
};

function replaceColor(letter) {
    var str = document.getElementById("demo").innerHTML;
    var res = str.replace(/a/gi, '<span style="color: red;">' + letter + '</span>');
    document.getElementById("demo").innerHTML = res;
};