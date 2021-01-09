'use strict';

//Game is at MVP right now. It meets basic requirements and I've learned what I needed to learn for the lesson.

//I've set it up with notes so I can add more features should I decide to continue working on this. I am hesitant to continue because I would like to move onto the next assigment as there is more to learn! Anything extra I do for this will be stuff I already know, it's good practice but there's a desire to move on :)

//Features to add in the future!

// fade out the cubes when the game is over: the CSS is already there! Just need to add the class to the cubes when somebody wins or there is a tie.

//option to restart/ clear the game. With button and what not

// start the game with the squares inactive, let players input their names first before starting

// let users have the option to play against a computer



var GameBoard = (function()
 {
   var grid = "";
   //create node list of each square  with it's placement number
   const game_squares = document.querySelectorAll('[data-index-number]');
   var gameboard = [];

   const renderGameBoard = function()
  {
    for (var i = 0; i < gameboard.length; i++)
    {
     grid =  document.querySelector(`[data-index-number="${i}"]`);
     grid.textContent = gameboard[i];

    }
     //console.log(gameboard);

 };
  return{
    game_squares,
    gameboard,
    renderGameBoard,
  };
})();



const Player = (name, type) =>
{
  //was using play for something before, will leave it in incase I want to use it again
  const play = () => console.log(name + ' plays ' + type);
  return { name, type, play};
}

const GameController = (() =>
{
  GameBoard.renderGameBoard();

  //TODO: players put in their names here with a form
  let player1 = Player("Player 1", "X");
  let player2 = Player("Player 2", "O");
  let game_text = document.getElementById("game-text");


  let winner    = false;
  let tie       = false;
  let player_up = null;
  let counter   = 0 //go up to 9
  determineTurn();

  //the winning combinations
  const winning_combos = [
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6],
  ];

  //turn squares into node list and adds a click event to each one
  for( var i = 0; i < GameBoard.game_squares.length;i++)
  {
    GameBoard.game_squares[i].addEventListener('click', function(){
        if(winner){
        return;
      }

      else{
        var this_square = this.getAttribute('data-index-number');
        var board = GameBoard.gameboard;

        //check if mark has already been made to the board
        if (board[this_square] === player1.type || board[this_square] === player2.type)
          return;
        else
        {
          board[this_square] = player_up.type;
          GameBoard.renderGameBoard();

        //WIN LOGIC and it's not a bunch of if statements :')
         function checkWinStatus(){
           winning_combos.forEach((item) =>{
             if ( GameBoard.gameboard[item[0]] === player_up.type
               && GameBoard.gameboard[item[1]] === player_up.type
               && GameBoard.gameboard[item[2]] === player_up.type){
                 winner = true;
                 game_text.innerHTML = player_up.name + " wins!";
                 //TODO: call game end function
               }
           })
         }

         counter ++;
          checkWinStatus();
          determineTurn();
          determineTie();
        }
      }

    });
  }

  function determineTurn(){
      if(winner){
       return;
      }
      else{
        counter % 2 === 0 ? player_up = player1 : player_up = player2
        game_text.innerHTML = player_up.name + " It's your turn!";
      }

  }

  function determineTie(){
    if(winner){
      return;
    }

    else{
      counter === 9 ? tie = true : tie = false;

      if(tie){
      game_text.innerHTML = " It's a tie!";
      //TODO: do game over function here
      }
    }
  }

  function endGame(){
    // TODO: do stuff here to end the game, fade out the cubes
  }

  function restartGame(){
   //TODO: reset counter, gameboard, winner/tie etc
  }


})();
