'use strict';

// TODO:

//check if there is a tie/ limit counter
// clean up returns
//clean up interface

//make sure to assign the play function for user exper
//const container = document.querySelector('#container');

// create overlay over squares when game is finished
//testing


//testing



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
     console.log(gameboard);

 };

  return{
    game_squares,
    gameboard,
    renderGameBoard,
  };
})();



const Player = (name, type) =>
{
  const play = () => console.log(name + ' plays ' + type);
  return { name, type, play};
}

const GameController = (() =>
{
  GameBoard.renderGameBoard();
  //input: players put in their names here
  let player1 = Player("jeff", "X");
  let player2 = Player("ben", "O");

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
    //console.log({winner, tie, player_up,counter});

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

        //win logic
         function checkWinStatus(){
           winning_combos.forEach((item) =>{
             if ( GameBoard.gameboard[item[0]] === player_up.type
               && GameBoard.gameboard[item[1]] === player_up.type
               && GameBoard.gameboard[item[2]] === player_up.type){
                 console.log(player_up.name + " wins!");
                 winner = true;
                 //change html to declare winner
                 // call game end function
               }




           })
         }
        //check for win

          counter ++;
          checkWinStatus();
          determineTurn();
          determineTie();

        //GameBoard.gameboard


        }
      }
console.log({winner, tie, player_up,counter});
    });
  }

  function determineTurn()
  {
    counter % 2 === 0 ? player_up = player1 : player_up = player2
    // change html to say whos turn it is
  }

  function determineTie(){
    if(winner){
      return;
    }

    else{
    counter === 9 ? tie = true : tie = false;
    //if tie then change the html to say so
  }
  }

  function endGame(){
    //do stuff here to end the game, restart settings etc
  }

  //this is just a test
  const playing = () => console.log(GameBoard.gameboard);
  return{

  };
  //this is just a test

  return{
  winner,
  player_up,
  counter,
  tie
  }
})();
//end game controller







//space
