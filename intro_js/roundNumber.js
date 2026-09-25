const number = 30;

let lastDigit = number % 10;
let excess = (lastDigit / 5) - ((lastDigit % 5) / 10) * 2;
let rounded = number - lastDigit + excess * 10;

console.log(rounded);