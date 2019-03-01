var initial = 0;
var currentx = 30;
var currenty =40;
var cpuX = 30;
var cpuY = -40;
var req;
var userWord;
var userGuesses = [];
var cpuGuesses = [];
var greenLetters = [];
var redLetters = [];
var compWord;
var humanWord;
var cpuGreenLetters = [];
var cpuRedLetters = [];
var winner;



function restart() {
    initial = 0;
    currentx = 30;
    currenty =40;
    cpuX = 30;
    cpuY =40;
    req;
    userWord;
    humanWord;
    compWord;
    winner;
    userGuesses = [];
    cpuGuesses = [];
    greenLetters = [];
    redLetters = [];
    cpuGreenLetters = [];
    cpuRedLetters = [];
    var btn = document.getElementById('humanBtn');
    btn.style.display = "block";
    window.location.href = "/game";
}

function compareLetter(guess, compWord, index) {
    var i;
    for (i = 0; i < 5; i++) {
        if (guess[index] === compWord[i]) {
            return true;
        }
    }
    return false;
}
function letterSearch(letter, array) {
    var i;
    for (i = 0; i < array.length; i++) {
        if (letter === array[i]) {
            return true;
        }
    }
    // if letter not in array
    return false;
}

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
        humanWord = text;
        cpuSelectWord();
        //User's word defined
        userWord = text;
    }else {
        // else it is a guess
        // Append to array of guesses
        userGuesses.push(text);

        // Compare each letter with letters in computer word
        var numLetters = 0;
        var i;
        for (i = 0; i < 5; i++) {
            if (compareLetter(text, compWord, i) == 1){
                numLetters++;
                if (letterSearch(text[i], greenLetters) == false) {
                    greenLetters.push(text[i]);
                }
            } else {
                if (letterSearch(text[i], redLetters) == false) {
                    redLetters.push(text[i]);
                }
            }
        }
        // display "guess - num"
        ctx.fillText("GUESS: " + text + " - " + numLetters, xposition, currenty);
        if(text.localeCompare(compWord) == 0){
            // you win
            currenty += 40;
            winner = sessionName;
            insertGameRequest(userWord, compWord, userGuesses, cpuGuesses, winner);
            ctx.fillText("YOU WIN!", xposition, currenty);
            var btn = document.getElementById('humanBtn');
            btn.style.display = "none";
        }
        else{
            cpuGenerateRegex();
        }
    }
    // logistics for scrolling
    currentx += 0;
    currenty += 40;
    initial = 1;

    // console.log(userWord);
    // console.log(compWord);
    // console.log(userGuesses);
    // console.log(greenLetters);
    // console.log(redLetters);
}

/*
 This function makes an ajax request to select a random word from the db
 */
function cpuSelectWord(){
    var url = "/initialWord";
    req = new XMLHttpRequest();
    req.open("GET",url,true);
    req.onreadystatechange = updateCPUInitial;
    req.send(null);
}
/*
    This function is responsible for updating the CPU to determine how to guess next
    it figures out one letter that isnt in the human word on each turn if htere are any letters in the cpu guess
    that arent in the human word
 */
function  cpuAI() {
    if(req.readyState==4 && req.status == 200) {
        var text = req.responseText;
        var numLetters = 0;
        var i;
        for (i = 0; i < 5; i++) {
            if (compareLetter(text, humanWord, i) == 1) {
                numLetters++;
                if (letterSearch(text[i], cpuGreenLetters) == false) {
                    cpuGreenLetters.push(text[i]);
                }
            } else {
                if (letterSearch(text[i], cpuRedLetters) == false) {
                    cpuRedLetters.push(text[i]);
                    console.log(cpuRedLetters);
                    //makes cpu not as hard to beat because as soon as we find that one letter is not in the word
                    // we break the for loop instead of figuring out every letter that isnt in the word
                    i=5;
                }
            }
        }
        cpuGuesses.push(text);
        updateCPUGuess(text);
    }
    
}

function cpuGenerateRegex() {
    var regex = "%5Cb%5B%5E0";
    for(var i =0; i< cpuRedLetters.length;i++){
        regex+= cpuRedLetters[i];
        regex+= cpuRedLetters[i].toUpperCase();
    }
    regex+= "%5CW%5D%2B%5Cb";
    cpuGuess(regex);
    
}
function cpuGuess(regex){
    var url = "/cpuGuess?cpuGuess="+regex;
    req = new XMLHttpRequest();
    req.open("GET",url,true);
    req.onreadystatechange = cpuAI;
    req.send(null);
}
/*
 this function updates the canvas for the cpu
 */
function updateCPUInitial() {
    if (req.readyState == 4 && req.status == 200) {
        //Setting up the canvas and the text to be black
        var canvas = document.getElementById("cpuCanvas");
        var ctx = canvas.getContext("2d");
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        compWord = req.responseText;
        console.log(compWord);
        var xposition = currentx + length;
        xposition = xposition * 4;
        ctx.fillText("CPU WORD: ?????", xposition, cpuY);

    }
    cpuX += 0;
    cpuY += 40;
}

/*
    This function updates the cpu canvas once we get a guess word from the db
 */
function updateCPUGuess(text){
    //Setting up the canvas and the text to be black
    var canvas = document.getElementById("cpuCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";


    var xposition = currentx + length;
    xposition = xposition * 4;
    ctx.fillText("GUESS: " + text, xposition, cpuY);
    cpuX += 0;
    cpuY += 40;
    if (text == humanWord){
        // you win
        // cpuY += 40;
        winner = "CPU";
        insertGameRequest(userWord, compWord, userGuesses, cpuGuesses, winner);
        ctx.fillText("CPU WIN!", xposition, cpuY);
        cpuY += 40;
        ctx.fillText("CPU WORD: " + compWord, xposition, cpuY);
        var btn = document.getElementById('humanBtn');
        btn.style.display = "none";
    }

}



