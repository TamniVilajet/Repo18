let myArr = [];
let num = multiplication(3);
// Only change code below this line
function* multiplication(numbers) {
  value = numbers;
  for (let i = 0; i < numbers; i++) {
    value = value * 2;
    yield myArr.push(value);
  }
}

for (let n of num) {
  num.next();
}
console.log(myArr)
// Only change code above this line
module.exports = multiplication;
