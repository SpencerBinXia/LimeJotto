var initial = 0;
var currentx = 30;
var currenty =40;
var cpuX = 30;
var cpuY =40;
var req;
var userWord;
var userGuesses = [];


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
        cpuSelectWord();
    }else {
        // else it is a guess
        ctx.fillText("Guess: " + text, xposition, currenty);
        //Append to array of guesses
        //User's word defined
        userWord = text;
        userGuesses.push(text);

    }
    // logistics for scrolling
    currentx += 0;
    currenty += 40;
    initial = 1;
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
        this function updates the canvas for the cpu
     */
    function updateCPUInitial(){
    if (req.readyState == 4 && req.status == 200){
        //Setting up the canvas and the text to be black
        var canvas = document.getElementById("cpuCanvas");
        var ctx = canvas.getContext("2d");
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        var text = req.responseText;
        
        var xposition = currentx + length;
        xposition = xposition * 4;
            ctx.fillText("CPU WORD: " + text, xposition, cpuY);

    }
        cpuX += 0;
        cpuY += 40;
}


    console.log(userWord);
    console.log(userGuesses);


