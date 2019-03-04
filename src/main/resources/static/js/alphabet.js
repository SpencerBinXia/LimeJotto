/*
 * function to change colors of letters in alphabet
 * colors = [red, green, black]
 */

let colors = ["#CC0000", "#00CC00", "#000000"];


function key(letter) {
    return letter.charCodeAt(0);
}
var changeColor = function (letter) {
    letter.colorIdx = letter.colorIdx || 0;
    letter.style.color = colors[letter.colorIdx++ % colors.length];
    letterToColor[letterToColorKey(letter.innerHTML)] = letter.style.color;
    var myID = $(letter).attr("id");
    myID.toString();
    replaceColor(myID, letter.style.color);

};

function replaceColor(letter, color) {
    var reg = new RegExp(letter + "(?!([^<]+)?>)","g");
    var str = document.getElementById("humanCanvas").innerHTML;
    var res = str.replace(reg, '<span style="color: '+color+';">' + letter + '</span>');
    document.getElementById("humanCanvas").innerHTML = res;
};