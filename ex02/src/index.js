// Only change code below this line

function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}
function* insideGenerator1() {
  for (let i = 1; i <= 5; i++) {
    yield i;
  }
}
function* insideGenerator2() {
  for (let i = 10; i <= 15; i++) {
    yield i;
  }
}
function* insideGenerator3() {
  for (let i = 6; i <= 9; i++) {
    yield i;
  }
}

let iterator = myGenerator();
let fifteenArray = [];

let flag = true;
while (flag) {
  let currentState = iterator.next();
  if (currentState.done) {
    flag = false;
    fifteenArray.push(`${currentState.value}!`);
  } else {
    fifteenArray.push(`#${currentState.value}`);
  }
}
console.log(fifteenArray);
// Only change code above this line
module.exports = { fifteenArray, myGenerator };