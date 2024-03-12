'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
        document.querySelector('body').style.backgroundColor = '#ff6961';
        // document.querySelector('body').style.backgroundColor = '#f33636';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector(".number").style.width = '30rem';
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.message').textContent = '📈 Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff6961';
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff6961';
        }

    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = ' ';
});