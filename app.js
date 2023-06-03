// const checkBalance = document.querySelector('.balance');
// const withdrawMoney = document.querySelector('.withdraw');
// const depositMoney = document.querySelector('.deposit');
// const quickMoney = document.querySelector('.quickCash');
// const transferMoney = document.querySelector('.transfer');
// const reset = document.querySelector('.home');

// display screen
const screen = document.querySelector('.screen')

//random balance
let balance = Math.floor(Math.random() * 5000) + 1;
// console.log(randomBalance)
let withdrawAmount = Math.floor(Math.random() * 300) + 1;
// console.log(withdrawAmount)
//console.log("withdrawal:", withdrawAmount)
let depositAmount = Math.floor(Math.random() * 300) + 1;
// console.log(depositAmount)
// console.log('deposit:', depositAmount)
let checkFirst = balance - withdrawAmount

// let newBalance = randomBalance;
// display balance on screen
const currentBalance = () => {
    screen.innerHTML = balance //---> 1st way
    // screen.textContent --show in screen
    // screen.innerText ---show in screen
    screen.textContent = `Your current balance is:  $${balance}`
}

// (withdrawals) withdraw from balance
// const withdrawFromBalance = () => {
//     balance = balance - withdrawAmount    
//     // console.log(`Your current balance after withdrawal is: ${randomBalance}`)
//     //
//     //check if balance in negative
//     if(balance >= 0) {
//         screen.innerText = `Current balance: $${balance} after withdrawing $${withdrawAmount}`
//     } else {
//         screen.innerText = "Insufficient Funds can't do withdrawals " + withdrawAmount + " from balance of " + balance + "."
//     }
// }
const withdrawFromBalance = () => {
    balance = balance - withdrawAmount    
    // console.log(`Your current balance after withdrawal is: ${randomBalance}`)
    //
    //check if balance in negative
    if(checkFirst >= 0) {
        balance = balance - withdrawAmount
        screen.innerText = `Current balance: $${balance} after withdrawing $${withdrawAmount}`
    } else {
        screen.innerText = "Insufficient Funds can't do withdrawals $" + withdrawAmount + " from balance of $" + balance + "."
    }
}

// add deposit to current balance
const newDeposit = () => {
    balance = balance + depositAmount
    // console.log('new balance after deposit:', randomBalance)
    screen.innerText = `Current balance is $${balance}, after depositing $${depositAmount}`
}

// quick withdrawal --
const quickCash = () => {
    balance = balance - 50
    // console.log('after quick draw', balance)
    screen.innerText = 'Current balance is $' + balance + 'after withdrawing $50 from' + balance + '.'
}

// transfer
const transfer = () => {
    screen.innerText = 'Unable to do transfers at this time.'
}

//reset
const resetScreen = () => {
    screen.innerText = "Welcome to Bank"
    // screen.innerHTML = <p>This <span style="color: red">screen</span></p>
}