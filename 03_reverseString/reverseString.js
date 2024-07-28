const reverseString = function(string) {
  let lastIndex = string.length - 1;
  let reversedString = ""

  for(let i = lastIndex; i >= 0; i--) {
    reversedString += string.charAt(i);
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
