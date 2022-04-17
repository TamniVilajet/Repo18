// Only change code below this line

let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);

let unionSet = new Set([...one, ...two]);
let intersectionSet = [...one].filter((element) => [...two].includes(element));
let differenceSet = [...one].filter((element) => ![...two].includes(element));

console.log(differenceSet);
// Only change code above this line
module.exports = { unionSet, intersectionSet, differenceSet };