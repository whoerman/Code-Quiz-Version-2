//defining the variable for animation end signal
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

//defining the variables for animations to be used
var animationShake = "animated shake";
var animationBounceOutLeft = "animated bounceOutLeft";
var animationfadeInDown = "animated fadeInDown";
var animationrubberBand = "animated rubberBand";

//setting up the top buttons
$("#wrong").hide();
$('#startText').empty().text("Start the Quiz!");
let countdown = 60;
$('#timerText').empty().text(` Timer: ${countdown} seconds!`);
$("#score").hide();
let scoreNum = 0;
$('#scoreText').empty().text(` Your score: ${scoreNum} points`);

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



//buttons for starting, questions, and clear scores
$(document).ready(function () {
    $('#start').on("click", function () {
        startAnimation();
        scoreAnimation();
        startTimer();
    });
    $("#optionA").on("click", function () {
        if (dataArray[x][1] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
    $("#optionB").on("click", function () {
        if (dataArray[x][2] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
    $("#optionC").on("click", function () {
        if (dataArray[x][3] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
    $("#optionD").on("click", function () {
        if (dataArray[x][4] === dataArray[x][5]) {
            URCorrect();
            return;
        };
        URWrong();
    });
});

//start coundown timer
function startTimer() {
    timerStarted = true;
    $('#timer').addClass(animationShake);
    countdownID = setInterval(function () {
        countdown--;
        $('#timerText').empty().text(` Timer: ${countdown} seconds!`);
        if (countdown < 10) {
            $('#timer').addClass(animationShake);
            $('#timer').css("background-color", "#ff2626");
        };
        if (countdown < 1) {
            clearInterval(countdownID);
            $('#timerText').empty().text(` Game Over!`);
            endGame();
        };
    }, 1000);
};

//If the question is answered correctly
function URCorrect() {
    scoreNum = scoreNum + 5;
    countdown = countdown +2;
    checkStatus();
};

//if the question is answered incorretly
function URWrong() {
    $("#wrong").show().hide("slow");
    scoreNum = scoreNum -2;
    countdown = countdown-5;
    checkStatus();
};

function endGame () {

};

function checkStatus () {

};