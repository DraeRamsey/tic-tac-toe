'use strict';


const game_container = document.getElementById('game-container');
var grid = "";
const game_squares = document.querySelectorAll('[data-index-number]');



//make module
//parameters? boardplacement/ player type
var GameBoard = (function() {
  var gameboard = ["-","-","-","-","-","-","-","-","-"];

   const renderGameBoard = function() {
    for (var i = 0; i < gameboard.length; i++)
    {
     grid =  document.querySelector(`[data-index-number="${i}"]`);
     grid.textContent = gameboard[i];

    }

  }

  return {
    gameboard,
    renderGameBoard
  };
})();


GameBoard.renderGameBoard();
console.log(GameBoard.gameboard);


const Player = (name, type) =>
{
const play = () => console.log(name + ' plays ' + type);
return { name, type, play};

}

const GameController = (() =>
{
  //input: players put in their names here
  const player1 = Player("jeff", "X");
  const player2 = Player("ben", "O");
  let player_turn = null;
  let counter = 0 //go up to 9
  determineTurn();

  //turns squares into node list and adds a click event to each one
  for( var i = 0; i < game_squares.length;i++)
  {
    game_squares[i].addEventListener('click', function(){

      var this_square = this.getAttribute('data-index-number');
      var board = GameBoard.gameboard;

      board[this_square] = player_turn.type;
      console.log(board);
      GameBoard.renderGameBoard();;

      //this.type goes into html (update game board)
      //replace the gameboard array index with this.type
      counter ++;
      determineTurn();
      // run player turn function

    });
  }

  function determineTurn()
  {
    counter % 2 === 0 ? player_turn = player1 : player_turn = player2
    return player_turn;
  }

  function updateGame()
  {

  }

  const playing = () => console.log(GameBoard.gameboard);
  return{

  };
})();


//space
