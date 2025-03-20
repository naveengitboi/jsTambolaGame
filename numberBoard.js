
let maxNum = 90;
let minNum = 1;
let currentNumber = null;
const numberEle = document.querySelector('.numberElement')
const nbNumbersContainer = document.querySelector('.nbNumbersContainer')
const nums = [];

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

if (nums.length < maxNum) {
    numberEle.addEventListener('click', (e) => {
        let randInt = getRandomNumber();
        while (checkIfExist(randInt) && nums.length < (maxNum)) {
            randInt = getRandomNumber();
        }
        if (!checkIfExist(randInt)) {
            nums.push(randInt);
            currentNumber = randInt;
            changeBackground(nums, currentNumber);
            numberEle.innerText = randInt;
        }
    })
}

function createNumbersBoard() {
    for (let i = minNum; i <= maxNum; i++) {
        let nbCell = document.createElement('p');
        nbCell.classList.add('nbCell', 'smallContent');
        nbCell.setAttribute('index', i);
        nbCell.textContent = (i);
        nbNumbersContainer.appendChild(nbCell);
    }
}

createNumbersBoard();


function  changeBackground(nums, cnum){
    let cells = nbNumbersContainer.children;
    for(let cell of cells){
        if(cell.attributes[1].value == (cnum)){
            cell.style.backgroundColor = '#00c04b'
        }
    }
}