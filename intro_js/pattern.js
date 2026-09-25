function asteric(number) {
  if (number === 0) {
    return "";
  }

  return "*" + asteric(number - 1);
}

function conCate(str, number) {
  if (number === 1) {
    return str;
  }

  let result = asteric(number - 1) + "\n" + str + "\n" + asteric(number - 1);
  return conCate(result, number - 1);
}

function pattern(number) {
  if (number === 0) {
    return "";
  }

  const str = asteric(number);

  return conCate(str, number);
}

let x = pattern(3);
console.log(abcd);
