const readline = require('readline');
const _ = require('underscore');

let PLAYERS = 2;
let BOARD_SIZE = 3;
const WIN_SEQUENCE = 3;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question('How many users are playing the game? ', (usersAnswer) => {
    if (Number.isInteger(parseInt(usersAnswer)) && (parseInt(usersAnswer) >= 2)) {
      PLAYERS = parseInt(usersAnswer);

      rl.question('How big is the game? ', (answer) => {
        if (Number.isInteger(parseInt(answer)) && (parseInt(answer) >= 2)) {
          BOARD_SIZE = parseInt(answer);
          console.log(`Size of the game: ${BOARD_SIZE}`);
        } else {
          console.log(`Sorry ${answer} is not a valid board size.`);
        }

        rl.close();

        console.log(drawGameBoard(BOARD_SIZE));
      });
    } else {
      console.log(`Sorry ${usersAnswer} is not a valid number of players.`);
      rl.close();
    }
  });


}


function drawGameBoard(boardSize) {
  let gameBoard = [];

  for (let row = 0; row <= boardSize * 2; row++) {
    let colString = [];
    for (let col = 0; col <= boardSize * 2; col++) {
      if (row === 0){
        if (col === 0) {
          colString.push(' ');
        } else {
          if (col % 2 === 0) {
            colString.push(`${col / 2}`);
          } else {
            colString.push(' ');
          }
        }
      } else {
        if (row % 2 === 0) {
          colString.push(`${col}`);
        } else {
          if (col < 1) {
            colString.push(`${row}`);
          } else {
            if (col % 2 === 0) {
              colString.push('|')
            } else {
              colString.push(' ');
            }
          }

        }
      }
    }
    colString.push('\n');
    gameBoard.push(colString);
  }


  return gameBoard.join(' ');
}

function initializeGame() {
  promptUser();
}

initializeGame();

