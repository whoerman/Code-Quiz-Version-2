//defining the variable for animation end signal
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

//defining the variables for animations to be used
var animationShake = "animated shake";
var animationBounceOutLeft = "animated bounceOutLeft";
var animationfadeInDown = "animated fadeInDown";

//setting up the top buttons
$("#wrong").hide();
$('#startText').empty().text("Start the Quiz!");
let countdown = 60;
$('#timerText').empty().text(`Timer: ${countdown} seconds!`);
$("#score").hide();
let scoreNum = 0;
$('#scoreText').empty().text(`Your score: ${scoreNum} points`);

//start animation
function startAnimation() {
    $('#start').addClass(animationBounceOutLeft).one(animationEnd, function () {
        $(this).removeClass(animationBounceOutLeft);
        $(this).hide();
    });
};

//score animation
function scoreAnimation() {
    $('#score').show("slow");
};




$(document).ready(function () {
    $('#start').on("click", function () {
        startAnimation();
        scoreAnimation();
        startTimer();
    });
});

//start coundown timer
function startTimer() {
    timerStarted = true;
    $('#timer').addClass(animationShake);
    countdownID = setInterval(function () {
        countdown--;
        $('#timerText').empty().text(`Timer: ${countdown} seconds!`);
        if (countdown < 10) {
            $('#timer').addClass(animationShake);
            $('#timer').css("background-color", "#ff2626");
        };
        if (countdown < 1) {
            clearInterval(countdownID);
            $('#timerText').empty().text(`Game Over!`);
            endGame();
        };
    }, 1000);
};