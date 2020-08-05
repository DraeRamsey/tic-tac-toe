'use strict';



// TODO:
//next start the player factory function


const game_container = document.getElementById('game-container');
var grid = "";


//make module
//parameters? board placement/ player type
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

//controls the flow of the game itself
const GameController = () =>
{


  //return {};
}

//factory function
const Player = (name, type) =>
{
const play = () => console.log(name + ' plays ' + type);
return { name, type, play};

}

const player1 = Player("jeff", "X");
player1.play();






//space
