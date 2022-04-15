// Only change code below this line
let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
  ]);
  for (let key of shoppingList.entries()) {
    let arrKey = [];
    arrKey.push(key[0]);
    console.log("groceries: " + arrKey);
  }
  for (let value of shoppingList.entries()) {
    let arrValue = [];
    arrValue.push(value[1]);
    console.log("amount: " + arrValue);
  }
  for (let [key, value] of shoppingList.entries()) {
    console.log(`['${key}', '${value}']`);
  }
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };