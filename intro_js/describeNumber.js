function describeNumber(number) {
    return number === 0 ? "Zero" : number > 0 ? "Positive" : "Negative";
}

console.log(describeNumber(0));
console.log(describeNumber(10));
console.log(describeNumber(-10));