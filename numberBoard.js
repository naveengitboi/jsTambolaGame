let currentNumber = null;
const numberEle = document.querySelector(".numberElement");
const resetBtn = document.querySelector(".resetBtn");
const historyBtn = document.querySelector(".historyBtn");
const sound = document.querySelector('.soundSwitch');
let soundOn = true;

const nbNumbersContainer = document.querySelector(".nbNumbersContainer");

const historyContainer = document.querySelector(".historyContainer");
let historyOpened = false;

const resetModel = document.querySelector('.resetModel');
const confirmResetBtn = document.querySelector('.confirmResetBtn');
const cancelResetBtn = document.querySelector('.cancelResetBtn');



class NumsBoard {
    constructor(options = {}) {
        this.start = options.start || 1;
        this.end = options.end || 90;
        this.nums = [];
        this.dp = new Array(this.end + 1, false);
        this.boardNums = [];
        this.current = null;
        for (let i = this.start; i <= this.end; i++) {
            this.boardNums = i;
        }
        this.createNumbersBoard(nbNumbersContainer);
    }
    createNbCell(num) {
        let nbCell = document.createElement("p");
        nbCell.classList.add("nbCell", "smallContent");
        nbCell.setAttribute("index", num);
        nbCell.textContent = num;
        return nbCell;
    }

    createNumbersBoard(parent) {
        for (let i = this.start; i <= this.end; i++) {
            let nbCell = this.createNbCell(i);
            parent.appendChild(nbCell);
        }
    }
    checkIfExist(num) {
        return this.dp[num];
    }

    paint(cnum) {
        let cells = nbNumbersContainer.children;
        for (let cell of cells) {
            if (cell.attributes[1].value == cnum) {
                cell.style.backgroundColor = "#00c04b";
            } if (cnum == null) {
                cell.style.backgroundColor = "rgb(126, 255, 126)";
            }
        }
    }

    add(num) {
        this.current = num;
        this.nums.push(this.current);
        this.dp[this.current] = true;
        this.paint(this.current);
        numberEle.innerText = this.current;
        // history
        if(soundOn){
            txtToSpeech(this.current);
        }
        let hCell = this.createNbCell(this.current);
        historyContainer.prepend(hCell);
    }

    resetHistory() {
        historyContainer.innerHTML = "";
        numberEle.textContent = "Start";
        this.paint(null);
    }
    reset() {
        this.nums = [];
        if (resetModel.classList.contains('closeResetModel')) {
            openResetPopup();
            confirmResetBtn.addEventListener('click', () => {
                closeResetPopup();
                this.resetHistory();
            });

            cancelResetBtn.addEventListener('click', () => {
                closeResetPopup();
            });
        }
    }

}


let board = new NumsBoard();

if (board.nums.length < maxNum) {
    numberEle.addEventListener("click", (e) => {
        let randInt = getRandomNumber();
        while (board.checkIfExist(randInt) && board.nums.length < maxNum) {
            randInt = getRandomNumber();
        }
        if (!board.checkIfExist(randInt)) {
            board.add(randInt);
        }
    });
}

resetBtn.addEventListener("click", (e) => {
    board.reset();
})

historyBtn.addEventListener("click", (event) => {
    if (!historyOpened) {
        historyContainer.classList.add('showHistory');
        historyOpened = true;
    } else {
        historyOpened = false;
        historyContainer.classList.remove('showHistory');
    }
})

sound.addEventListener('click', (e) => {
    if(soundOn){
        sound.innerHTML = `<ion-icon name="volume-mute-outline"></ion-icon>`;
        soundOn = false;
    }else{
        sound.innerHTML = `<ion-icon name="volume-high-outline"></ion-icon>`;
        soundOn = true;
    }
});


function closeResetPopup() {
    resetModel.classList.remove('openResetModel');
    resetModel.classList.add('closeResetModel');
}

function openResetPopup() {
    resetModel.classList.add('openResetModel');
    resetModel.classList.remove('closeResetModel');
}
