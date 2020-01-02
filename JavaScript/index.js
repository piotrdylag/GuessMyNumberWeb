var tryCount = 0;
var guessedNum = 0;
var randomNum = Math.floor((Math.random() * 10) + 1);

document.getElementById("guess").onclick = function () {
    var userNum = document.getElementById("user-number").value;
    console.log(randomNum);
        if (randomNum == userNum) {
            document.getElementById("message").innerHTML = "CONGRATS! YOU GUESS MY NUMBER! WHICH WAS: ";
            document.getElementById("randNum").innerHTML = randomNum;
            guessedNum++;
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
