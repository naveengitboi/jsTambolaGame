const numOfTiles = 9;
const numOfRows = 3;
const tileWidth = 80;
const tileHeight = 80;


let innerContainer = document.querySelector('.innerContainer');

class Board {

    constructor({player = player, crossPoints = crossPoints, numOfRows = 3, numOfTiles = 9, tileWidth = 80, tileHeight = 80}) {
        this.player = player;
        this.crossPoints = crossPoints;
        this.numOfRows = numOfRows;
        this.numOfTiles = numOfTiles
        this.createBoard();
    };

    createTilesRow(tilesContainer) {
        for (let i = 0; i < this.numOfRows; i++) {
            let tilesRow = document.createElement('div')
            tilesRow.classList.add('tilesRow')
            this.createTile(tilesRow)
            tilesContainer.appendChild(tilesRow);
        }
    }
    createRandomNum(i, tile) {
        let min = i * 10;
        let max = (i + 1) * 10;

        let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        let tileText = document.createElement('p');
        tileText.classList.add('mediumContent');

        tileText.textContent = (randomNum);
        tile.appendChild(tileText);

    }
    createTile(tilesRow) {
        let timesGenerated = 0;
        for (let i = 0; i < this.numOfTiles; i++) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            let randNum = Math.floor(Math.random() * 10 + 1);
            if (timesGenerated < 5 && (i == 6)) {
                this.createRandomNum(i, tile);
                timesGenerated++;
            }
            else if ((randNum % 2 == 0) && timesGenerated < 5) {
                this.createRandomNum(i, tile);
                timesGenerated++;
            }
            tilesRow.appendChild(tile)
        }
    }

    createBoard() {
        let topHeader = document.createElement('div');
        topHeader.classList.add('topHeader');

        let playerName = document.createElement('p');
        playerName.classList.add('mediumContent');
        playerName.textContent = this.player;

        let headerCounter = document.createElement('div');
        headerCounter.classList.add('headerCounter');


        let counterContainer = document.createElement('div');
        counterContainer.classList.add('counterContainer');


        let crossText = document.createElement('p');
        crossText.classList.add('smallContent');
        crossText.textContent = 'Crossed';

        let crossCountText = document.createElement('p')
        crossCountText.classList.add('smallContent');
        crossCountText.textContent = (this.crossPoints);


        topHeader.appendChild(playerName);
        counterContainer.appendChild(crossText);
        counterContainer.appendChild(crossCountText);
        topHeader.appendChild(counterContainer);
        innerContainer.appendChild(topHeader);


        const tilesContainer = document.createElement('div');
        tilesContainer.classList.add('tilesContainer');

        this.createTilesRow(tilesContainer);
        innerContainer.appendChild(tilesContainer);
    }

}
