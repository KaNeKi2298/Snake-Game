import {onSnake,expandSnake} from '/snake.js'
let food ={x:10,y:1};
const expRate=1;
export var score=0;

export function update(){
    if(onSnake(food)){
        score++;
        expandSnake(expRate);
        setRandom();
    }
}

export function restartFood(){
    score=0;
    food ={x:10,y:1};
}

function setRandom(){
    var x1=Math.floor((Math.random()*21))+1;
    var y1=Math.floor((Math.random()*21))+1;
    food={x:x1,y:y1};
}

export function draw(gameBoard){
    const foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}