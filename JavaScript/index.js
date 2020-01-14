var tryCount = 0;
var guessedNum = 0;
var guessRow = 0;
document.getElementById("newGame").onclick = function() {
    document.getElementById("user-number").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("randNum").innerHTML = "";
    var randomNum = Math.floor((Math.random() * 10) + 1);
    console.log(randomNum);

    document.getElementById("guess").onclick = function () {
        var userNum = document.getElementById("user-number").value;
        if (tryCount == 3) {
            alert("Sorry, you reach the try limit! The number was: " + randomNum);
            guessRow = 0;
        }
        if(guessRow == 2){
            alert("Congrats! You have reach of three guessed on first try. You've get + 10 points!");
            guessedNum += 10;
        }
        if (randomNum == userNum) {
            document.getElementById("message").innerHTML = "CONGRATS! YOU GUESS MY NUMBER! WHICH WAS: ";
            document.getElementById("randNum").innerHTML = randomNum;
            guessedNum++;
            guessRow++;
            tryCount = 0;
            document.getElementById("try").innerHTML = "TRY: " + tryCount;
            document.getElementById("score").innerHTML = "SCORE: " + guessedNum;
        } else if (randomNum < userNum) {
            document.getElementById("message").innerHTML = "OPS! MY NUMBER IS SMALLER THAT YOU!";
            tryCount++;
            document.getElementById("try").innerHTML = "TRY: " + tryCount;

        } else if (randomNum > userNum) {
            document.getElementById("message").innerHTML = "OPS! MY NUMBER IS HIGHER THAT YOU!";
            tryCount++;
            document.getElementById("try").innerHTML = "TRY: " + tryCount;
        }

    };
};
