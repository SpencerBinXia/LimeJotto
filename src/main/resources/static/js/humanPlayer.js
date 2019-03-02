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
    //logistics for placing the words in the canvas
    var xposition = currentx + length;
    xposition = xposition * 4;
    // if it is the first time entering it is an intital word
    if (initial == 0) {
        var textNode = document.createTextNode("YOUR WORD: "+text);
        var br = document.createElement("br");
        canvas.appendChild(textNode);
        canvas.appendChild(br);

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
         var textNode = document.createTextNode("GUESS: " + text + " - " + numLetters);
        var br = document.createElement("br");
        canvas.appendChild(textNode);
        canvas.appendChild(br);
        /*
            check if letters in this new text have a color if so replace it with that color
         */
        for(var j =0; j< text.length;j++){
            if (letterToColor[letterToColorKey(text[j].toUpperCase())]!=null){
                replaceColor(text[j],letterToColor[letterToColorKey(text[j].toUpperCase())]);

            }
        }
        if(text.localeCompare(compWord) == 0){
            // you win
            currenty += 40;
            winner = sessionName;
            insertGameRequest(userWord, compWord, userGuesses, cpuGuesses, winner);
            var textNode = document.createTextNode("YOU WIN!");
            var br = document.createElement("br");
            canvas.appendChild(textNode);
            canvas.appendChild(br);
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
        var canvas = document.getElementById("cpuContainer");
        compWord = req.responseText;
        var textNode = document.createTextNode("CPU WORD: ?????");
        var br = document.createElement("br");
        canvas.appendChild(textNode);
        canvas.appendChild(br);
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
    var canvas = document.getElementById("cpuContainer");
    var color1, color2, color3, color4, color5;
    var letter1, letter2, letter3, letter4, letter5;

    // determine colors of letters in guess
    var i;
    for (i = 0; i < 5; i++) {
        if (compareLetter(text, humanWord, i) == 1) {
            // green letter
            if(i == 0){color1="#00CC00"; letter1=text[0]}
            if(i == 1){color2="#00CC00"; letter2=text[1]}
            if(i == 2){color3="#00CC00"; letter3=text[2]}
            if(i == 3){color4="#00CC00"; letter4=text[3]}
            if(i == 4){color5="#00CC00"; letter5=text[4]}
        } else {
            // red letter
            if(i == 0){color1="#CC0000"; letter1=text[0]}
            if(i == 1){color2="#CC0000"; letter2=text[1]}
            if(i == 2){color3="#CC0000"; letter3=text[2]}
            if(i == 3){color4="#CC0000"; letter4=text[3]}
            if(i == 4){color5="#CC0000"; letter5=text[4]}
        }
    }

    var textNode = document.createTextNode("GUESS: ");
    var br = document.createElement("span");
    var brT =  document.createTextNode(letter1);
    br.style.color = color1;
    br.appendChild(brT);
    var br1 = document.createElement("span");
    var br1T =  document.createTextNode(letter2);
    br1.style.color = color2;
    br1.appendChild(br1T);
    var br2 = document.createElement("span");
    var br2T =  document.createTextNode(letter3);
    br2.style.color = color3;
    br2.appendChild(br2T);
    var br3 = document.createElement("span");
    var br3T =  document.createTextNode(letter4);
    br3.style.color = color4;
    br3.appendChild(br3T);
    var br4 = document.createElement("span");
    var br4T =  document.createTextNode(letter5);
    br4.style.color = color5;
    br4.appendChild(br4T);
    var br5 = document.createElement("br");
    canvas.appendChild(textNode);
    canvas.appendChild(br);
    canvas.appendChild(br1);
    canvas.appendChild(br2);
    canvas.appendChild(br3);
    canvas.appendChild(br4);
    canvas.appendChild(br5);
    if (text == humanWord){
        // you win
        // cpuY += 40;
        winner = "CPU";
        insertGameRequest(userWord, compWord, userGuesses, cpuGuesses, winner);
        var textNode = document.createTextNode("CPU WIN!");
        var br = document.createElement("br");
        var textNode2 = document.createTextNode("CPU WORD: " + compWord);
        canvas.appendChild(textNode);
        canvas.appendChild(br);
        canvas.appendChild(textNode2);
        var btn = document.getElementById('humanBtn');
        btn.style.display = "none";
    }

}



