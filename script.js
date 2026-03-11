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

if(e.key === "ArrowLeft"){
console.log("Move Left");
}

if(e.key === "ArrowRight"){
console.log("Move Right");
}

if(e.key === "ArrowUp"){
console.log("Move Up");
}

if(e.key === "ArrowDown"){
console.log("Move Down");
}

});
