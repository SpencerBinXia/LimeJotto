/*
 * function to change colors of letters in alphabet
 * colors = [red, green, black]
 */

let colors = ["#CC0000", "#00CC00", "#000000"];

var changeColor = function (letter) {
    letter.colorIdx = letter.colorIdx || 0;
    letter.style.color = colors[letter.colorIdx++ % colors.length];
    var myID = $(letter).attr("id");
    myID.toString();
    replaceColor(myID, letter.style.color);
};

function replaceColor(letter, color) {
    var reg = new RegExp(letter + "(?!([^<]+)?>)","g");
    console.log(reg);
    var str = document.getElementById("demo").innerHTML;
    var res = str.replace(reg, '<span style="color: '+color+';">' + letter + '</span>');
    document.getElementById("demo").innerHTML = res;
};

