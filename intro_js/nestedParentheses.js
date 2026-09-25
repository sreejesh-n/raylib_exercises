function parentheses(number) {
  if (number == 0) {
    return "";
  }

  return "(" + parentheses(number - 1) + ")";
}

let x = parentheses(2);

console.log(x);
