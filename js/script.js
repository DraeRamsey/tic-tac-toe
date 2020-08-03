'use strict';
//step 1: function that renders array to the html
//*** create a space in the html for the array to render
//*** link that space to the JavaScript
//**** make a simple array and function outside of the objects and have that function link up the HTML
//** make the square html grid
//*** next we will ficure out how to encapsulate that function inside the gameboard module and render it from there

const game_container = document.getElementById('game-container');
var grid = "";

// testing
var gameboard = ["o","x","x","o","x","x","o","o","x"];

function renderGameBoard()
{
  for (var i = 0; i < gameboard.length; i++)
  {
   console.log( gameboard[i]);
   console.log(i);
   grid =  document.querySelector(`[data-index-number="${i}"]`);
   grid.textContent = gameboard[i];


  }
};
renderGameBoard();

//testing

//make moduleæ'""'
// const GameBoard = (function()
// {
//   // Set up HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now just manually fill in the array with "X"s and "O"s
//    var gameboard = ["o","x","x","o","x","x"];
//
//   return {gameboard};
// })();

// push the info to the array

//controls the flow of the game itself
const GameController = () =>
{


  //return {};
}

//factory function
const Player = () =>
{

  //return {};
}
