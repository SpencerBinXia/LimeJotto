$(document).ready(function()
{
    var userWord = {word: "fgszd"};
    $.ajax({
        type: "POST",
        url: "/isWord",
        contentType: "application/JSON",
        dataType: "json",
        data: JSON.stringify(userWord),
        cache: false,
        success: function(wordResult)
        {
            console.log(wordResult);
        },
        error: function(e){
            console.log("Failure", e);
        }
    })

});


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

