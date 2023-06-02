const checkBalance = document.querySelector('.balance');
const withdrawMoney = document.querySelector('.withdraw');
const depositMoney = document.querySelector('.deposit');
const quickMoney = document.querySelector('.quickCash');
const transferMoney = document.querySelector('.transfer');
const reset = document.querySelector('.home');

// display screen
const screen = document.querySelector('.screen')

//random balance
let randomBalance = Math.floor(Math.random() * 5000) + 1;
// console.log(randomBalance)
let withdrawAmount = Math.floor(Math.random() * 300) + 1;
// console.log(withdrawAmount)
//console.log("withdrawal:", withdrawAmount)
let depositAmount = Math.floor(Math.random() * 300) + 1;
// console.log(depositAmount)
// console.log('deposit:', depositAmount)

// display balance on screen
const currentBalance = () => {
    screen.innerHTML = randomBalance //---> 1st way
    // screen.textContent --show in screen
    // screen.innerText ---show in screen
}

// (withdrawals) withdraw from balance
const withdrawFromBalance = () => {
    let newBalance = randomBalance - withdrawAmount
    // console.log(`Your current balance is: ${newBalance}`)

    //check if balance in negative
    if(newBalance >= 0) {
        screen.innerText = newBalance
    } else {
        screen.innerText = "Insufficient Funds"
    }
}

// add deposit to current balance
const newDeposit = () => {
    let newBalance = randomBalance + depositAmount
    // console.log(newBalance)
    screen.innerText = newBalance
}