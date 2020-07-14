// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');

 //The function is given a string
const getRow = function(string){



// const subArray = [];
 //It looks through the pokemon array(loops) 
for (let i = 0; i < pokemon.length; i++){
const pokeBowl = pokemon[i];
const pokemonName = pokeBowl[0];
if (string === pokemonName){
  return pokeBowl;

}
}
return null;


 
 //returns the sub-array that contains it
// return subArray;


}
let result = getRow('pikachu');
// console.log(getRow('pikachu'))



// OUR code here.

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
