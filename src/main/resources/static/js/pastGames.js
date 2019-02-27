function insertGameRequest(userWord, cpuWord, userGuesses, cpuGuesses)
{
    var userGuessString = JSON.stringify(userGuesses);
    var cpuGuessString = JSON.stringify(cpuGuesses);
    console.log(userWord);
    console.log(cpuWord);
    console.log(sessionName);
    var newName = sessionName;
    var strippedUserGuesses = userGuessString.replace(someStr.replace(/['\[\]"]+/g, ''));
    var strippedCpuGuesses = cpuGuessString.replace(someStr.replace(/['\[\]"]+/g, ''));
    console.log(strippedUserGuesses.replace(/['"]+/g, ''));

    var pastGame = {username: newName, userWord: userWord, cpuWord: cpuWord, userGuesses: strippedUserGuesses, cpuGuesses: strippedCpuGuesses};

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