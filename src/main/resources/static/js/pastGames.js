
function insertGameRequest(userWord, cpuWord, userGuesses, cpuGuesses)
{
    var userGuessString = JSON.stringify(userGuesses);
    var cpuGuessString = JSON.stringify(cpuGuesses);
    console.log(userWord);
    console.log(cpuWord);
    console.log(sessionName);
    var strippedUserGuesses = userGuessString.replace(/['\[\]"]+/g, '');
    var strippedCpuGuesses = cpuGuessString.replace(/['\[\]"]+/g, '');
    console.log(strippedUserGuesses.replace(/['"]+/g, ''));

    var pastGame = {username: sessionName, userWord: userWord, cpuWord: cpuWord, userGuesses: strippedUserGuesses, cpuGuesses: strippedCpuGuesses};

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
function showStats(index) {
    var userGuesses = userPastGuesses[index];
    for (var x = 0; x<userGuesses.length;x++){
        console.log(userGuesses[x]);
    }

}