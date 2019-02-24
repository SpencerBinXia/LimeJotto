/*
 * function to change colors of letters in alphabet
 * colors = [red, green, black]
 */

let colors = ["#CC0000", "#00CC00", "#000000"];

var changeColor = function (letter) {
    letter.colorIdx = letter.colorIdx || 0;
    letter.style.color = colors[letter.colorIdx++ % colors.length];
};