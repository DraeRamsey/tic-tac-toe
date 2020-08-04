'use strict';

const game_container = document.getElementById('game-container');
var grid = "";


//make module
//parameters? boardplacement/ player type
var GameBoard = (function() {
  var gameboard = ["-","-","-","-","-","-","-","-","-"];
  return {
    gameboard,
    renderGameBoard: function() {
      for (var i = 0; i < gameboard.length; i++)
      {
       grid =  document.querySelector(`[data-index-number="${i}"]`);
       grid.textContent = gameboard[i];

      }
    }
  };
})();

GameBoard.renderGameBoard();
console.log(GameBoard.gameboard);


// push the info to the array

//controls the flow of the game itself
const GameController = () =>
{


  //return {};
}

//factory function
//player should be marked with x or o (playertype)
const Player = () =>
{


  //return {};
}
