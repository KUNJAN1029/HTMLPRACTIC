let name = prompt("Enter your name");
let balance = 30_000;
let add = 0;
let sub = 0;
let exit = 0;
console.log("1, Check Balance");
console.log("2, Deposit");
console.log("3, Withdraw");
let c = Number(prompt("Enter what you what to select"));
do {
  if (c == 1) {
    console.log("Your balance is ", balance);
  } else if (c == 2) {
    add = Number(prompt("Enter the amount"));
    console.log("Your balance is", balance + add);
  } else if (c == 3) {
    sub = Number(prompt("Enter the amount"));
    console.log("Your balance is ", balance - sub);
  } else if (c == 4) {
    exit++;
  }
  c = Number(prompt("Enter what you what to select"));
} while (exit == 1);
