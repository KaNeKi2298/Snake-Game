import { getinputDirection } from "./input.js";

export const snake_speed= 8;
let snakeBody=[{ x: 11, y: 11 }]
let newSegments=0;

export function update(){
    addSegments();
    for(let i=snakeBody.length-2;i>=0;i--){
        snakeBody[i+1]= {...snakeBody[i]};
    }
    const inputDirection=getinputDirection();
    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;

}

export function restartSnake(){
    newSegments=0;
    snakeBody=[{ x: 11, y: 11 }];
}

export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

export function expandSnake(expRate){
    newSegments=expRate;
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function outsideGrid(head){
    if(head.x>21 || head.x<1)
        return true;
    if(head.y>21 || head.y<1)
        return true;   
    return false;    
}

export function snakeIntersection(){
    for(let i=1;i<snakeBody.length;i++)
        if(snakeBody[0].x===snakeBody[i].x && snakeBody[0].y===snakeBody[i].y)
            return true;
    return false;        
}

export function onSnake(pos){
    for(let i=0;i<snakeBody.length;i++){
        if(snakeBody[i].x === pos.x && snakeBody[i].y === pos.y)
            return true;
    }
    return false;
}

function addSegments(){
     for(let i=0;i<newSegments;i++){
         snakeBody.push({...snakeBody[snakeBody.length-1]});
     }
     newSegments=0;
}