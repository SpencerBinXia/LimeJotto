

    /*
     * Function that takes a word as user input on game.html and sends an AJAX POST request to the server,
     * checking if the input word is found inside the database. On success, the word will be added
     * to the canvas. On failure, the word is not added and the user will be alerted.
     */
    function wordLookup() {
        // Get the text from the text box and the length of the text
        var text = $('#humanTxt').val();
        var userWord = {word: text};
        //var userWord = {word: "fgszd"};
        return $.ajax({
            type: "POST",
            url: "/isWord",
            contentType: "application/JSON",
            dataType: "json",
            data: JSON.stringify(userWord),
            cache: false,
            success: function (wordResult) {
                if (wordResult.word[0] === "0") {
                    alert("This is not a valid word.");
                } else if (wordResult.word[0] === "1") {
                    addWordToCanvas(text);
                }
            },
            error: function (e) {
                console.log("Failure", e);
            }
        });
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

