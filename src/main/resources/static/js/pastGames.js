
function insertGameRequest(userWord, cpuWord, userGuesses, cpuGuesses, winner)
{
    var userGuessString = JSON.stringify(userGuesses);
    var cpuGuessString = JSON.stringify(cpuGuesses);
    console.log(userWord);
    console.log(cpuWord);
    console.log(sessionName);
    var strippedUserGuesses = userGuessString.replace(/['\[\]"]+/g, '');
    var strippedCpuGuesses = cpuGuessString.replace(/['\[\]"]+/g, '');

    var pastGame = {username: sessionName, userWord: userWord, cpuWord: cpuWord, userGuesses: strippedUserGuesses, cpuGuesses: strippedCpuGuesses, winner: winner};

    return $.ajax({
        type: "POST",
        url: "/pastGame",
        contentType: "application/JSON",
        dataType: "json",
        data: JSON.stringify(pastGame),
        cache: false,
        success: function (pastGameResponse) {
            console.log(pastGameResponse.result[0]);
        },
        error: function (e) {
            console.log("Failure", e);
        }
    });
}

/*
    this function currently should log the guesses of the game that is clicked on in  the table
 */
function showStats(element) {
    var index = element.rowIndex-1;
    var cpuWord= cpuPastWords[index];
    var humanWord = userPastWords[index];
    var bodyString = '';
    var numHumLetters = [];
    var numCPULetters = [];
    var userGuesses = userPastGuesses[index].split(",");
    var cpuGuesses = cpuPastGuesses[index].split(",");
    for (let y = 0;y<userGuesses.length;y++){
        let numLetters = 0;
        for (let i = 0; i < 5; i++) {
            if (compareLetter(userGuesses[y], cpuWord, i) == 1){
                numLetters++;
            }
        }
        numHumLetters.push(numLetters);
    }
    for (let y = 0;y<cpuGuesses.length;y++){
        let numLetters = 0;
        for (let i = 0; i < 5; i++) {
            if (compareLetter(cpuGuesses[y], humanWord, i) == 1){
                numLetters++;
            }
        }
        numCPULetters.push(numLetters);
    }
    $.each(userGuesses, function(index, userGuess) {
        if (!cpuGuesses[index])
        {
            bodyString += ('<tr><td class="userGuess"><span style="color:red">'+userGuess+'</span>: ' + numHumLetters[index] +'</td><td class="cpuGuess"></td></tr>');
        }
        else
        {
            bodyString += ('<tr><td class="userGuess"><span style="color:red">'+userGuess+'</span>: ' + numHumLetters[index] +'</td>' +
                           '<td class="cpuGuess"><span style="color:red">'+cpuGuesses[index]+'</span>: ' + numCPULetters[index] + '</td></tr>');
        }
    });
    $('.statsModalTable tbody').html(bodyString);
    $('.userGuess').each( function(){
        for (let i = 0; i < cpuWord.length; i++) {
            let thisGuess = $(this).html();
            let res;
            let cpuWordRegex =  new RegExp(cpuWord[i] + "(?!([^<]+)?>)","g");
            res = thisGuess.replace(cpuWordRegex, '<span style="color:green">' + cpuWord[i] + '</span>');
            $(this).html(res);
        }
    });
    $('.cpuGuess').each( function(){
        for (let i = 0; i < humanWord.length; i++) {
            let thisGuess = $(this).html();
            let res;
            let humanWordRegex =  new RegExp(humanWord[i] + "(?!([^<]+)?>)","g");
            res = thisGuess.replace(humanWordRegex, '<span style="color:green">' + humanWord[i] + '</span>');
            $(this).html(res);
        }
    });
    displayStatsModal();
}

function compareLetter(guess, compWord, index) {
    for (let i = 0; i < 5; i++) {
        if (guess[index] === compWord[i]) {
            return true;
        }
    }
    return false;
}

function displayStatsModal() {
    var modal = document.getElementById('statsModal');
    modal.style.display = "block";
}

function closeClick() {
    var modal = document.getElementById('statsModal');
    modal.style.display = "none";
}

window.onclick =function (event) {
    var modal = document.getElementById('statsModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

