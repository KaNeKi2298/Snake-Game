import {update as updateSnake, draw as drawSnake,snake_speed,getSnakeHead,outsideGrid,snakeIntersection,restartSnake} from './snake.js'
import {update as updateFood, draw as drawFood,score,restartFood} from './food.js'
import {restartDirection} from './input.js'

let lastRenderTime=0;
var gameOver=false;
const gameBoard= document.getElementById('game-board');

function main(currentTime){
  if(gameOver){
      alert('GAME OVER. YOUR SCORE is -> '+ score);
      restart();
      return;
  }  
  const delay= (currentTime-lastRenderTime)/1000;
  if(delay < 1/snake_speed){
    window.requestAnimationFrame(main);
    return;
  }  
  lastRenderTime=currentTime;
  update(); 
  draw();
  window.requestAnimationFrame(main);
}

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}    

function draw(){
    gameBoard.innerHTML="";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver= outsideGrid(getSnakeHead()) || snakeIntersection();
}

function restart(){
    restartSnake();
    restartFood();
    restartDirection();
    lastRenderTime=0;
    gameOver=false;
    window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);



 