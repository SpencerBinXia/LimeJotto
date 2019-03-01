
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
    generate key for hashmap
 */
function key(char){
    return char.charCodeAt(0);
}
/*
    calculate which letters are correct by comparing the
    cpuword and human word and put them in a hashmap which will later be used to compare and color code letters
 */
function calculateCorrectLetters(element){
    var index = element.rowIndex;
     var lettersCorrect = {};
     var cpuWord= cpuPastWords[index];
     var humanWord = userPastWords[index];
        console.log(cpuWord);
    for (var i =0; i<5; i++) {
        if (humanWord[i]==cpuWord[i]){
            lettersCorrect[key(humanWord[i])] = humanWord[i];
        }
    }
     showStats(index)
}
/*
    this function currently should log the guesses of the game that is clicked on in  the table
 */
function showStats(element) {
    var index = element.rowIndex-1;
    var cpuWord= cpuPastWords[index];
    var humanWord = userPastWords[index];
    var bodyString = '';
    console.log(humanWord);
    console.log(cpuWord);
    console.log(userPastGuesses[index]);
    console.log(cpuPastGuesses[index]);
    var userGuesses = userPastGuesses[index].split(",");
    var cpuGuesses = cpuPastGuesses[index].split(",");
    console.log(userGuesses);
    console.log(cpuGuesses);
    for (let y = 0;y<userGuesses.length;y++){
        let numLetters = 0;
        for (let i = 0; i < 5; i++) {
            if (compareLetter(userGuesses[y], cpuWord, i) == 1){
                numLetters++;
            }
        }
        userGuesses[y] = userGuesses[y] + " - " + numLetters + "L";
    }
    for (let y = 0;y<cpuGuesses.length;y++){
        let numLetters = 0;
        for (let i = 0; i < 5; i++) {
            if (compareLetter(cpuGuesses[y], humanWord, i) == 1){
                numLetters++;
            }
        }
        cpuGuesses[y] = cpuGuesses[y] + " " + numLetters + "";
    }
    $.each(userGuesses, function(index, userGuess) {
        bodyString += ('<tr><td class="userGuess">'+userGuess+'</td><td id="cpuGuess">'+cpuGuesses[index]+'</td></tr>');
    });
    $('.statsModalTable tbody').html(bodyString);
    var cpuWordRegex = new RegExp("[" + cpuWord + "](?!([^<]+)?>)","g");
    $('.userGuess').each( function(){
        console.log($(this).text());
        let thisGuess = $(this).text();
        for (let i = 0; i < 5; i++) {
            thisGuess.replace(cpuWordRegex, '<span style="color: #CC0000;">' + thisGuess[i] + '</span>');
        }
        $(this).text(thisGuess);
    });

    displayStatsModal();
}

/*
    this function currently should log the guesses of the game that is clicked on in  the table
function showStats(index) {
    var userGuesses = userPastGuesses[index];
    for (var x = 0; x<userGuesses.length;x++){
        console.log(userGuesses[x]);
    }

}
*/



/*
function showStats() {
    displayStatsModal();

}
*/

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

