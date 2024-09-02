
var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedpattern = []

var started = false;
let level = 0;

$(document).keypress(function(){
    startGame()
})

$(".start-button").click(function() {
    startGame();
});

$(".Restart-button").click(function() {
    startOver();
    startGame();
});

//handler function
$(".color-button").on("click", function() {    //***donot use "this" inside arrow function***
    let userChosencolor = $(this).attr("id");  //get id of the clicked element 
    userClickedpattern.push(userChosencolor);
    sound(userChosencolor);
    animatePress(userChosencolor)
    console.log(userClickedpattern)
    checkAnswer(userClickedpattern.length-1);
});

function startGame(){
    if(!started){
        $("#level-title").text("level"+level)
        nextSequence()
        started = true;
    }
}

function checkAnswer(currentlevel){
    if(userClickedpattern[currentlevel] === gamePattern[currentlevel]){
        if(userClickedpattern.length == gamePattern.length){
            userClickedpattern = [];
            setTimeout(function () {
                nextSequence();
            }, 500);
        }
    }else{
        console.log("wrong");
        sound("wrong")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200)
        $("#level-title").text("Game Over, Press Any Key or Restart button to Restart");
        startOver();
    }
}

//this function chooses game pattern
function nextSequence(){
    level++;
    $("#level-title").text("level"+level)
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    sound(randomChosenColor);
}

function sound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    },100)
}

function startOver(){
    started = false;
    gamePattern = [];
    userClickedpattern = [];
    level = 0;
}



