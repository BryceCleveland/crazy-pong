// START - Paddle variables
var paddleSpeedDiff = 1;
var paddle = document.getElementById('paddle');
var paddleLeft = 0;
var paddleSpeed = 2;
// END - Paddle variables

//START - Artificial paddles
var paddle2 = document.getElementById('paddle2');
var paddle2Left = 0;
var paddle2Speed = 2;

var paddle3 = document.getElementById('paddle3');
var paddle3Top = 0;
var paddle3Speed = 2;

var paddle4 = document.getElementById('paddle4');
var paddle4Top = 0;
var paddle4Speed = 2;
//END - Artificial paddles

//START - Score variables
var green = document.getElementById('greenScore');
var blue = document.getElementById('blueScore');
var orange = document.getElementById('orangeScore');
var red = document.getElementById('redScore');

var greenScore = 0;
var blueScore = 0;
var orangeScore = 0;
var redScore = 0;
//END - Score variables

//START - Ball variable
var lastHit = 0;
var ball = document.getElementById('ball');
var ballLeft = 200;
var ballTop = 200;
var ballSpeedDiff = 1;
var ballSpeedX = 1;
var ballSpeedY = 1;
var flag = true;
var flag1 = true;
//END - Ball variables

//START - Difficulty setting
function difficultyCheck () {

    if (document.forms['difficultyForm']['difficulty'].value == "easy") {
        ballSpeedDiff = 0.5;
        paddleSpeedDiff = 2;
        console.log("easy n00b");
    } 

    else if (document.forms['difficultyForm']['difficulty'].value == "medium") {
        ballSpeedDiff = 3;
        paddleSpeedDiff = 5;
        console.log("medium hoe");
    } 

    else if (document.forms['difficultyForm']['difficulty'].value == "hard") {
        ballSpeedDiff = 4;
        paddleSpeedDiff = 7;
        console.log("this is getting hard");
    }

    else if (document.forms['difficultyForm']['difficulty'].value == "impossible") {
        ballSpeedDiff = 10;
        paddleSpeedDiff = 13;
        console.log("RIP YOU N00B");
    } else {
        console.log("You done broke it")
    }
};
difficultyCheck();
//END - Difficulty setting

//START - Keydown array
var keyCode = [];
//END - Keydown array

//START - Restart function
    function restart() {
        ballLeft = 300;
        ballTop = 300;
        ballSpeedY = -0.55;
        ballSpeedX = 0.55;
        flag1 = false;
    }
//END - Restart function

//START - Keydown array push
document.onkeydown = function(e) {
    keyCode = keyCode.filter(function (item) {
        return e.keyCode !== item;
    });
    keyCode.push(e.keyCode);
}
//END - Keydown array push

//START - Keyup array kill
document.onkeyup = function(e) {
    keyCode = keyCode.filter(function (item) {
        return e.keyCode !== item;
    });
};
//END - Keyup array kill

//START - Player paddle movement
function countdownMovement () {
    keyCode.forEach(function (item) {
        switch (item) {
        case 37:
            paddleLeft = paddleLeft - paddleSpeed;
            break;
        case 39:
            paddleLeft = paddleLeft + paddleSpeed;
            break;
        default:
            break;
        };
    });
        if (paddleLeft < 1) {
            paddleLeft = 1;
        };
        
        if (paddleLeft > 550) {
            paddleLeft = 549;
        };
//END - Player paddle movement

//START - Collision detection
        if (ballLeft > (paddleLeft - 10) && ballLeft < (paddleLeft + 60) && ballTop < 29) {
            ballSpeedY = (Math.random() * ballSpeedDiff) + (ballSpeedDiff);
            ballTop = 29;
            flag1 = false;
            ball.style.backgroundColor = "red";
            lastHit = 1;
        }
        
        if (ballLeft > (paddle2Left - 10) && ballLeft < (paddle2Left + 60) && ballTop > 572) {
            ballSpeedY = (Math.random() * ballSpeedDiff) + (ballSpeedDiff);
            paddle2Speed = (Math.random() * 2) + paddle4Speed;
            ballTop = 572;
            flag1 = true;
            ball.style.backgroundColor = "blue";
            lastHit = 2;
        }
        
        if (ballTop > (paddle3Top - 10) && ballTop < (paddle3Top + 60) && ballLeft < 29) {
            ballSpeedX = (Math.random() * ballSpeedDiff) + (ballSpeedDiff);
            paddle3Speed = (Math.random() * 2) + paddleSpeedDiff;
            ballLeft = 29;
            flag = false;
            ball.style.backgroundColor = "green";
            lastHit = 3;
            // console.log("Green hit the ball!");
        }
        
        if (ballTop > (paddle4Top - 10) && ballTop < (paddle4Top + 60) && ballLeft > 572) {
            ballSpeedX = (Math.random() * ballSpeedDiff) + (ballSpeedDiff);
            paddle4Speed = (Math.random() * 2) + paddleSpeedDiff;
            ballLeft = 572;
            flag = true;
            ball.style.backgroundColor = "orange";
            lastHit = 4;
            // console.log("Orange hit the ball!");
        }
//END - Collision detection

//START - Ball movement        
        if (flag) {
            ballLeft -= ballSpeedX;
        };
        
        if (!flag) {
            ballLeft += ballSpeedX;
        };
        
        if (flag1) {
            ballTop -= ballSpeedY;
        };

        if (!flag1) {
            ballTop += ballSpeedY;
        };
//END - Ball movement
        
        
//START - When ball hits a wall
        if (ballLeft < 5 || ballLeft > 595 || ballTop < 5 || ballTop > 595) {

            if (lastHit == 1) {
                redScore++;
                restart();
            };

            if (lastHit == 2) {
                blueScore++;
                restart();
            };

            if (lastHit == 3) {
                greenScore++;
                restart();
            };

            if (lastHit == 4) {
                orangeScore++;
                restart();
            };
        };
//END - When ball hits a wall

//START - Paddle 2 AI
        if (paddle2Left < 1) {
            paddle2Left = 1;
        };
        
        if (paddle2Left > 550) {
            paddle2Left = 549;
        };
            
        if ((ballLeft - 30) < paddle2Left) {
            paddle2Left = paddle2Left - paddle2Speed;
        }
        
        if ((ballLeft - 30) > paddle2Left) {
            paddle2Left = paddle2Left + paddle2Speed;
        }
//END - Paddle 2 AI

//START - Paddle 3 AI
        if (paddle3Top < 1) {
            paddle3Top = 1;
        };
        
        if (paddle3Top > 550) {
            paddle3Top = 549;
        };
            
        if ((ballTop - 30) < paddle3Top) {
            paddle3Top = paddle3Top - paddle3Speed;
        }
        
        if ((ballTop - 30) > paddle3Top) {
            paddle3Top = paddle3Top + paddle3Speed;
        }
//END - Paddle 3 AI

//START - Paddle 4 AI
        if (paddle4Top < 1) {
            paddle4Top = 1;
        };
        
        if (paddle4Top > 550) {
            paddle4Top = 549;
        };
            
        if ((ballTop - 30) < paddle4Top) {
            paddle4Top = paddle4Top - paddle4Speed;
        }
        
        if ((ballTop - 30) > paddle4Top) {
            paddle4Top = paddle4Top + paddle4Speed;
        }
//END - Paddle 4 AI
        
//START - Assigning new postions in CSS
        ball.style.top = ballTop + "px";
        ball.style.left = ballLeft + "px";
        
        paddle.style.marginLeft = paddleLeft + "px";
        paddle2.style.marginLeft = paddle2Left + "px";
        paddle3.style.marginTop = paddle3Top + "px";
        paddle4.style.marginTop = paddle4Top + "px";
//END - Assigning new postions in CSS

//START - Score keeping
        blue.innerHTML = blueScore;
        orange.innerHTML = orangeScore;
        red.innerHTML = redScore;
        green.innerHTML = greenScore;
//END - Score keeping

//START - Movement Speed Tracking
        document.getElementById('orangeSpeed').innerHTML = paddle4Speed;
        document.getElementById('blueSpeed').innerHTML = paddle2Speed;
        document.getElementById('greenSpeed').innerHTML = paddle3Speed;
//END - Movement Speed Tracking
};

//START - Time interval
setInterval(countdownMovement);
//END - Time interval