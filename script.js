document.addEventListener("DOMContentLoaded", function() {
    const tiles = document.querySelectorAll(".tile");
let board = [
[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]
];
    function updateBoard(){

let index = 0;

for(let row = 0; row < 4; row++){
for(let col = 0; col < 4; col++){

tiles[index].innerText = board[row][col] === 0 ? "" : board[row][col];

index++;

}
}

}
    // start with two tiles
    addNumber();
    addNumber();

    function addNumber(){

let empty = [];

for(let r = 0; r < 4; r++){
for(let c = 0; c < 4; c++){

if(board[r][c] === 0){
empty.push({r:r,c:c});
}

}
}

if(empty.length > 0){

let random = empty[Math.floor(Math.random()*empty.length)];

board[random.r][random.c] = 2;

updateBoard();

}

}
});
document.addEventListener("keydown", function(e){

if(e.key == "ArrowLeft"){
moveLeft();
}

if(e.key == "ArrowRight"){
moveRight();
}

if(e.key == "ArrowUp"){
moveUp();
}

if(e.key == "ArrowDown"){
moveDown();
}

})

function moveLeft(){
for(let r=0;r<4;r++){

let row = board[r];

row = row.filter(num => num);

for(let i=0;i<row.length-1;i++){
if(row[i] == row[i+1]){
row[i] = row[i]*2;
row[i+1] = 0;
}
}

row = row.filter(num => num);

while(row.length < 4){
row.push(0);
}

board[r] = row;

}

updateBoard();
}
