let myArr = [];
// Only change code below this line
function* multiplication(x) {
  for (let i = 0; i <= x; i++) {
      x = x * 2;
    yield myArr.push(x);
  }
}
const num = multiplication(3);

for (let i = 0; i < 3; i++) {
  console.log(num.next());
}
console.log(myArr);
// Only change code above this line
module.exports = multiplication;


