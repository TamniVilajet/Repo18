// Only change code below this line
function* myGenerator() {
    yield* [1,2,3,4,5];
    yield* 'Arena';
    yield* arguments;
}

let iterator = myGenerator(6,7,8);
let generatorArray = [];

for(let element of iterator){
    generatorArray.push(element)
}
console.log(generatorArray);
// Only change code above this line
module.exports = { generatorArray, myGenerator };