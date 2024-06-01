const winningComb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const userArray = ["x","o","x","","o","","","o",""];

function getWinner() {
    for (let index = 0; index < winningComb.length; index++) {
        if((userArray[winningComb[index][0]] === userArray[winningComb[index][1]]) && (userArray[winningComb[index][1]] === userArray[winningComb[index][2]])){
            return userArray[winningComb[index][0]];
        }
    }
}

function getWinner2() {
    winningComb.forEach((subArray) => {
        for (let index = 0; index < subArray.length; index++) {
            if((userArray[subArray[0]] === userArray[subArray[1]]) && (userArray[subArray[2]] === userArray[subArray[1]])){
                console.log(userArray[subArray[0]]);
                return userArray[subArray[0]];
            }
        }
    })
}

const winner = getWinner();
console.log(winner);