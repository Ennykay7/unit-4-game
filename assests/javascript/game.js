var userScore = 0;
var comScore;
var wins = 0;
var losses = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;

function randomize(){
    comScore = Math.floor(Math.random() * 102) + 19;
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    $("#ranNum").text("Random number: " + comScore);
    console.log(comScore, crystal1, crystal2, crystal3, crystal4);
}

randomize();

$("#ranNum").text("Random number: " + comScore);

$(".btn").on("click", function(){

    if ($(this).val() === "1"){
        userScore = userScore + crystal1;
    } else if ($(this).val() === "2"){
        userScore = userScore + crystal2;
    } else if ($(this).val() === "3"){
        userScore = userScore + crystal3;
    } else if ($(this).val() === "4"){
        userScore = userScore + crystal4;
    }
    $("#totScore").text(userScore);

    if (userScore === comScore){
        wins++;
        $("#message").text("You won!");
        $("#wins").text("Wins: " + wins);
        randomize();
        userScore = 0;
        $("#totScore").text(userScore);

    } else if (userScore > comScore){
        losses++;
        $("#message").text("You lost!");
        $("#losses").text("Losses: " + losses);
        randomize();
        userScore = 0;
        $("#totScore").text(userScore);
    }
})