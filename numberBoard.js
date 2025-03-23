let maxNum = 90;
let minNum = 1;
let currentNumber = null;
const numberEle = document.querySelector(".numberElement");
let historyOpened = false;

const resetBtn = document.querySelector(".resetBtn");
const historyBtn = document.querySelector(".historyBtn");

const nbNumbersContainer = document.querySelector(".nbNumbersContainer");

const historyContainer = document.querySelector(".historyContainer");

const resetModel = document.querySelector('.resetModel');
const confirmResetBtn = document.querySelector('.confirmResetBtn');
const cancelResetBtn = document.querySelector('.cancelResetBtn');

let nums = [];

function getRandomNumber() {
    let randInt = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

    return randInt;
}

function checkIfExist(num) {
    for (let x of nums) {
        if (x == num) {
            return true;
        }
    }
    return false;
}

function closeResetPopup(){
    resetModel.classList.remove('openResetModel');
    resetModel.classList.add('closeResetModel');
}

function openResetPopup(){
    resetModel.classList.add('openResetModel');
    resetModel.classList.remove('closeResetModel');
}

if (nums.length < maxNum) {
    numberEle.addEventListener("click", (e) => {
        let randInt = getRandomNumber();
        while (checkIfExist(randInt) && nums.length < maxNum) {
            randInt = getRandomNumber();
        }
        if (!checkIfExist(randInt)) {
            nums.push(randInt);
            currentNumber = randInt;
            changeBackground(nums, currentNumber);
            numberEle.innerText = randInt;
            if (historyOpened) {
                showHistory(nums);
            }
        }
    });
    resetBtn.addEventListener("click", (e) => {
        nums = [];
        if(resetModel.classList.contains('closeResetModel')){
            openResetPopup();
            confirmResetBtn.addEventListener('click', () => {
                closeResetPopup();
                changeBackground(nums, null);
                showHistory(nums, true);

            });

            cancelResetBtn.addEventListener('click', () => {
                closeResetPopup();
            });
            
        }
    })

}


//creating numbers board
const allNums = [];

function createNbCell(num) {
    let nbCell = document.createElement("p");
    nbCell.classList.add("nbCell", "smallContent");
    nbCell.setAttribute("index", num);
    nbCell.textContent = num;
    return nbCell;
}

function createNumbersBoard(nums, parent) {
    for (let i = minNum; i <= maxNum; i++) {
        let nbCell = createNbCell(i);
        parent.appendChild(nbCell);
    }
}


for (let i = 1; i <= 90; i++) {
    allNums.push(i);
}

createNumbersBoard(allNums, nbNumbersContainer);

function changeBackground(nums, cnum) {
    let cells = nbNumbersContainer.children;
    for (let cell of cells) {
        if (cell.attributes[1].value == cnum) {
            cell.style.backgroundColor = "#00c04b";
        } if (cnum == null) {
            cell.style.backgroundColor = "rgb(126, 255, 126)";
        }
    }
}


historyBtn.addEventListener("click", (event) => {
    showHistory(nums);
    historyOpened = true;
})



function checkIfItExistInHistory(num) {
    let cells = historyContainer.children;
    // console.log("Cells ", cells);
    for (let cell of cells) {
        let cellNum = cell.attributes[1].value;
        if (cellNum == num) {
            return true;
        }
    }
    return false;
}

function showHistory(nums, isReset = false) {

    for (let num of nums) {
        if (!checkIfItExistInHistory(num)) {
            let hCell = createNbCell(num);
            historyContainer.prepend(hCell);
        }
    }
    if(isReset){
        historyContainer.innerHTML = "";
    }

}
