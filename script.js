document.addEventListener("DOMContentLoaded", function() {
    const tiles = document.querySelectorAll(".tile");

    // start with two tiles
    addNumber();
    addNumber();

    function addNumber() {
        let emptyTiles = [];

        tiles.forEach(tile => {
            if (tile.innerText === "") {
                emptyTiles.push(tile);
            }
        });

        if (emptyTiles.length > 0) {
            let randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
            randomTile.innerText = "2";
        }
    }
});
