const addPlayerBtn = document.querySelector('.addPlayerBtn')
const playerModel = document.querySelector('.playerModel');
const modelInput = document.querySelector('.modelInput');
const addBtn = document.querySelector('.addBtn');



let playerName = null;

function savePlayer(addedPlayer, playerModel, modelInput){
    addedPlayer = true;
    playerModel.classList.remove('openModel')
    modelInput.value = '';
}
function createPlayer(event) {
    playerModel.classList.add('openModel')
    modelInput.addEventListener('change', (e) => {
        playerName = e.target.value;
        if (playerName) {
            let addedPlayer = false;
            window.addEventListener('keydown', (e) => {
                if (e.key == 'Enter') {
                    savePlayer(addedPlayer, playerModel, modelInput);
                }
            })
            if (!addedPlayer) {
                addBtn.addEventListener('click', (e) => {
                    savePlayer(addedPlayer, playerModel, modelInput);
                })
            }
        }
    })
}

addPlayerBtn.addEventListener('click', (event) => createPlayer(event))