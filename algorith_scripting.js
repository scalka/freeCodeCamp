// REVERSE A STRING
function reverseString(str) { 
	var myArray = [];
  	var string = "Split me into an array";
    myArray = str.split('');
    myArray = myArray.reverse(); 
    str = myArray.join("");
  return str;
}
//CHECK FOR PALINDROMES
function palindrome(str) {
  var string = str.replace(/[\W_]+/g, '').toLowerCase();
  var reversed = string.split('').reverse().join('');
  return string === reversed;
}

//FIND THE LONGEST WORD IN A STRING
function findLongestWord(str) {
  var myArray = [];
  // split string into array of strings, sort from longest to shortest
  myArray = str.split(" ").sort(function(a, b){
  // ASC  -> a.length - b.length DESC -> b.length - a.length
  return b.length - a.length;
  });  
  return myArray[0].length;
}
