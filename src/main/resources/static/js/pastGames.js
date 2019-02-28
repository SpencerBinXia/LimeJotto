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



function showStats() {
    displayStatsModal();

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
