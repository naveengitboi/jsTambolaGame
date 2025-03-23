const addPlayerBtn = document.querySelector('.addPlayerBtn')
const playerModel = document.querySelector('.playerModel');
const modelInput = document.querySelector('.modelInput');
const addBtn = document.querySelector('.addBtn');
const cancelBtn = document.querySelector('.cancelBtn');


let playerName = null;
let players = []

function savePlayer(playerObj, addedPlayer, playerModel, modelInput) {
    addedPlayer = true;
    playerModel.classList.remove('openModel')
    modelInput.value = '';
    players.push(playerObj);
    for (let player of players) {
        let board = new Board({ player: player.playerName, crossPoints: player.checked.length })
    }
    modelOpened = false;
    // console.log(players)
    return;
}
function createPlayer(event) {
    playerModel.classList.add('openModel')
    modelInput.addEventListener('change', (e) => {
        playerName = e.target.value;
        let modelOpened = true;
        // console.log(playerName);
    })
    if (playerName) {

        // modelOpened && window.addEventListener('keydown', (e) => {
        //     if (e.key == 'Enter') {
        //         savePlayer(playerObj, addedPlayer, playerModel, modelInput);
        //         addedPlayer = true;
        //     }
        // })
        if (!addedPlayer) {
            return;
        }
    }


    addBtn.addEventListener('click', (e) => {
        // console.log('Naveen')
        if (playerName) {
            let addedPlayer = false;
            let playerObj = {
                playerName,
                board: [],
                checked: []
            }
            savePlayer(playerObj, addedPlayer, playerModel, modelInput);
            modelOpened = false;
            addedPlayer = true;
            playerName = null;

        }
    })
}

addPlayerBtn.addEventListener('click', (event) => {
    let isPlayerCreated = createPlayer(event);
})

cancelBtn.addEventListener('click', (event) => {
    playerModel.classList.remove('openModel')
    modelInput.value = '';
})
