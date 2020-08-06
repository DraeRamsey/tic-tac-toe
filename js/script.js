'use strict';

// TODO:
// check if a mark has already been made to the board
// check if there are three in a row/ win clause
//check if there is a tie/ limit counter
// clean up returns
//clean up interface

const game_container = document.getElementById('game-container');
var grid = "";
const game_squares = document.querySelectorAll('[data-index-number]');

var GameBoard = (function()
 {
  var gameboard = ["-","-","-","-","-","-","-","-","-"];

   const renderGameBoard = function()
  {
    for (var i = 0; i < gameboard.length; i++)
    {
     grid =  document.querySelector(`[data-index-number="${i}"]`);
     grid.textContent = gameboard[i];
    }
 }

  return{
    gameboard,
    renderGameBoard
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
  let player_turn = null;
  let counter = 0 //go up to 9
  determineTurn();

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
        board[this_square] = player_turn.type;
        GameBoard.renderGameBoard();;
        counter ++;
        determineTurn();

      }
    });
  }

  function determineTurn()
  {
    counter % 2 === 0 ? player_turn = player1 : player_turn = player2
    return player_turn;
  }

  //this is just a test
  const playing = () => console.log(GameBoard.gameboard);
  return{

  };
})();








//space
