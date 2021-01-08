'use strict';

// TODO:
// check if there are three in a row/ win clause
    //store board as 2d array
    // check the rows columns and diagonals
//check if there is a tie/ limit counter
// clean up returns
//clean up interface

//make sure to assign the play function for user exper


//const container = document.querySelector('#container');

//testing





//testing

var grid = "";

//create node list of each square  with it's placement number
const game_squares = document.querySelectorAll('[data-index-number]');


var GameBoard = (function()
 {
  var gameboard = ["0","1","2","3","4","5","6","7","8"];

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
  const player1 = Player("jeff", "X");
  const player2 = Player("ben", "O");

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
  for( var i = 0; i < game_squares.length;i++)
  {
    game_squares[i].addEventListener('click', function(){

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
               console.log(player_up.name + "wins!");
             }

            //console.log(player_up.type);


         })
       }
      //check for win

        counter ++;

        //testing
        checkWinStatus();
        //testing
        determineTurn();
      GameBoard.gameboard


      }
    });
  }

  function determineTurn()
  {
    counter % 2 === 0 ? player_up = player1 : player_up = player2
    return player_up;
  }

  //this is just a test
  const playing = () => console.log(GameBoard.gameboard);
  return{

  };
})();
//end game controller







//space
