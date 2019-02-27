function insertGameRequest(userWord, cpuWord, userGuesses, cpuGuesses)
{
    var userGuessJSON = JSON.stringify(userGuesses);
    var cpuGuessJSON = JSON.stringify(cpuGuesses);
    console.log(userGuessJSON);
    console.log(cpuGuessJSON);
    console.log(userWord);
    console.log(cpuWord);
    console.log(sessionName);

    var pastGame = {username: sessionName, userWord: userWord, cpuWord: cpuWord, userGuesses: userGuesses, cpuGuesses: cpuGuesses};

    return $.ajax({
        type: "POST",
        url: "/pastGame",
        contentType: "application/JSON",
        dataType: "json",
        data: JSON.stringify(pastGame),
        cache: false,
        success: function (pastGameResponse) {
            console.log(pastGameResponse);
        },
        error: function (e) {
            console.log("Failure", e);
        }
    });

}