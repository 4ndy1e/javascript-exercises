const removeFromArray = function(array, ...args) {
  let newArray = [];

  // iterate through items to remove
  for(let i = 0; i < array.length; i++) {
    // push item into new array if it is not inclided in args
    if(!args.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};
 
// Do not edit below this line
module.exports = removeFromArray;
