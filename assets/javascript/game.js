$(document).ready(function(){

var randomNumbers = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var wins = 0;
var loss = 0;
var totalScore = 0;

var crystal1 = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    console.log('crystal1 = %d', crystal1);
var crystal2 = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    console.log('crystal2 = %d', crystal2);
var crystal3 = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    console.log('crystal3 = %d', crystal3);
var crystal4 = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    console.log('crystal4 = %d', crystal4);

var chosenNumber = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
    $("#random-number").html(chosenNumber);
    console.log('chosenNumber2 = %d', chosenNumber);

$("#total-body").html(totalScore);

function resetGame(){
    totalScore = 0;
    $("#total-body").html(totalScore);
    crystal1 = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    crystal2 = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    crystal3 = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    crystal4 = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    chosenNumber = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
        $("#random-number").html(chosenNumber);
}

function matchingScore(){
    if (chosenNumber == totalScore){
        console.log('You win!');
        wins++;
        $("#wincount").html('Wins:' + wins);
        resetGame();
    } else if (chosenNumber < totalScore){
        console.log('You lose!');
        loss++;
        $("#losscount").html('Losses:' + loss);
        resetGame();
    }
}

    //click fucntion for crystal 1,2,3,4
    $("#crystal-1").on('click', function(){
        totalScore += crystal1;
        console.log('totalScore = %d', totalScore);
        $("#total-body").html(totalScore);
        matchingScore();
    });

    $("#crystal-2").on('click', function(){
        totalScore += crystal2;
        console.log('totalScore = %d', totalScore);
        $("#total-body").html(totalScore);
        matchingScore();
    })
    $("#crystal-3").on('click', function(){
        totalScore += crystal3;
        console.log('totalScore = %d', totalScore);
        $("#total-body").html(totalScore);
        matchingScore();
    })
    $("#crystal-4").on('click', function(){
        totalScore += crystal4;
        console.log('totalScore = %d', totalScore);
        $("#total-body").html(totalScore);
        matchingScore();
    })
        //if a number is already on the screen, concatenate it with the clickedNumber on the screen
        //else display it by itself
//if the clickedNumber == chosenNumber, wins goes up by one and the game automatically starts over  with a new chosenNumber and new clickedNumbers for the crytals
//else if clickedNumber != chosenNumber, continue the game
//else if the clickedNuumber goes over the chosenNumber, loss goes up by one and the game automatically starts over with a new chosenNumber and new clickedNumbers for the crytals
//Total score displys 0 at the beginning of the game and everytime it starts over after a win or loss
//when one of the crystals is clicked, the number is displayed in total-body
    //everytime a crystal is clicked after that, the total score displays the concatenated numbers on the screen
//if the total score == chosenNumber, the win goes up by one and the game starts over
//else if the total score != chosenNumber, continue the game
//else if the total score goes over the chosenNumber, loss goes up by one and the game starts over with the total-body displaying 0



})