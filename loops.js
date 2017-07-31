function forLoop(array) {
  for (let j = 0; j < 26; j++) {
    if (j === 1) {
      array[j] = "I am 1 strange loop."
    } else {
      array[j] ="I am " + j + " strange loops."
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
return `done`
}

//loops doWhileLoop(array) removes elements from `array` until `array` is empty
// or until `maybeTrue() ` returns `false`
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.length--
  } while (array.length > 0 && maybeTrue());
  return array
}
