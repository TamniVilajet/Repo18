// Only change code below this line
let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
  ]);
  var arrKey = [];
  var arrValue = [];
  for (let key of shoppingList.entries()) {
    arrKey.push(key[0]);
  }
  for (let value of shoppingList.entries()) {
    arrValue.push(value[1]);
  }
  for (let arrKey of shoppingList.entries()) {
    console.log("groceries: " + arrKey[0]);
  }
  for (let arrValue of shoppingList.entries()) {
    console.log("amount: " + arrValue[1]);
  }
  for (let [key, value] of shoppingList.entries()) {
    console.log(`['${key}', '${value}']`);
  }
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };