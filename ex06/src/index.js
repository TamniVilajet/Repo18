// Only change code below this line
let rockStar = new Map();
rockStar.set('artist', "The Rolling Stones")
rockStar.set('song', "Angie")
rockStar.set('album', "Goats Head Soup")
rockStar.set('singer', "Mick Jagger")

let newRock = new Map();

let allowedKeys = [...rockStar.keys()].filter(key => key.charAt(0)>'a');
for (let element of rockStar){
    allowedKeys.includes(element[0]) ? newRock.set(element[0], element[1]) : ""
}
console.log(newRock);
// Only change code above this line
module.exports = { rockStar, newRock };