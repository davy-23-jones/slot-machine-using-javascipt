const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    "A":2,
    "B":4,
    "C":6,
    "D":8
}
const SYMBOL_VALUE = {
    "A":5,
    "B":4,
    "C":3,
    "D":2
}

const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter the deposit amount:");
        const numdepamt = parseFloat(depositAmount);

        if (isNaN(numdepamt) || numdepamt<0){
            console.log("Invalid deposit amount");
        }
        else return numdepamt;
    }
};

const getNumberofLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines(1-3):");
        const numberoflines = parseFloat(lines);

        if (isNaN(numberoflines) || numberoflines<0 || numberoflines>3){
            console.log("Invalid number of lines");
        }
        else return numberoflines;
    }
};

const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter the bet amount:");
        const numberbet = parseFloat(bet);

        if (isNaN(numberbet) || numberbet<0 || numberbet>balance/lines){
            console.log("Invalid bet");
        }
        else return numberbet;
    }
};

let balance = deposit();
const numberofLines = getNumberofLines();
const bet = getBet(balance, numberofLines);


