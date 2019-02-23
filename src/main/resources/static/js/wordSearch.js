/*
 * Function that takes a word as user input on game.html and sends an AJAX POST request to the server,
 * checking if the input word is found inside the database. On success, the word will be added
 * to the canvas. On failure, the word is not added and the user will be alerted.
 */
function wordLookup(wordInput) {
        var userWord = {word: wordInput};
        //var userWord = {word: "fgszd"};
        $.ajax({
            type: "POST",
            url: "/isWord",
            contentType: "application/JSON",
            dataType: "json",
            data: JSON.stringify(userWord),
            cache: false,
            success: function (wordResult) {
                console.log(wordResult.word[0]);
                if (wordResult.word[0] === "0")
                {
                    alert("This is not a valid word.")
                }
            },
            error: function (e) {
                console.log("Failure", e);
            }
        })
    }


/*
$(document).ready(function()
{
    var wordbank;
    $.ajax({
        type: "GET",
        url: "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]$",
        headers: {"X-RapidAPI-Key": "993b4d7194msh67d124ac55fcfafp1969a1jsn8fba7d647451"},
        success: function(wordData)
        {
            console.log(wordData);
            console.log(wordData.results.data[1]);

        },
        error: function(e){
            console.log("Failure", e);
        }
    })

    setTimeout(wordTest, 5000);

    function wordTest()
    {console.log(wordbank);}
});
*/

