// Your code here.
// Note that you do NOT need the data for this function!


const getUrl = function(array){

//if given the subarray, the url of the subarray will be returned

// const urlArray = []; //this the subarray URL that will be returned.
// const subArray = []
for (let i = 0; i < array.length; i++){

const awesome = array[i];
const subArrayUrl = array[1];
if(awesome !== -1) {
  return subArrayUrl;
} else if (awesome === null){
  return null

}




}

}

// let result = getUrl();
// console.log(getUrl[urlArray]);






// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
