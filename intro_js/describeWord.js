function describeWord(word) {
    return word.length === 0 ? "empty" : "non-empty";
}
    
console.log(describeWord(""));
console.log(describeWord("Hello"));
console.log(describeWord("H"));
console.log(describeWord("5"));
console.log(describeWord(5));