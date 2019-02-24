var initial = 0;
var currentx = 30;
var currenty =40;

function addWordToCanvas(text) {
    //Setting up the canvas and the text to be black
    var canvas = document.getElementById("humanCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    //logistics for placing the words in the canvas
    var xposition = currentx + length;
    xposition = xposition * 4;
    // if it is the first time entering it is an intital word
    if (initial == 0) {
        ctx.fillText("YOUR WORD: " + text, xposition, currenty);
    } else {
        // else it is a guess
        ctx.fillText("Guess: " + text, xposition, currenty);
    }
    // logistics for scrolling
    currentx += 0;
    currenty += 40;
    initial = 1;
    }

