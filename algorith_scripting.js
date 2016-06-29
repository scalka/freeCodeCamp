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
// TITLE CASE A SENTENCE
function titleCase(str) {
  var myArray = [];
  str = str.toLowerCase();
  myArray = str.split(" ");
  
 for (var i = 0; i < myArray.length; i++){
   myArray[i] = myArray[i].replace(myArray[i].charAt(0), function toUpper(x){
     return x.toUpperCase();}); 
 }
  return myArray.join(' ');
}
// RETURN LARGEST NUMBET IN ARRAY
function largestOfFour(arr) {
var max = [];
  for (var i=0; i<arr.length; i++){
    var largest =0;
    for(var j=0; j<arr[i].length; j++){
        if (arr[i][j] > largest){
        largest = arr[i][j];
      }      
    }
    max[i] = largest;
  }
  return max;
}
//CONFIRM THE ENDING
function confirmEnding(str, target) {
  if(str.substring(str.length-1) === target){
    return true;
  } else if ( str.substr(str.length-target.length) === target ){
    return true;
  } else {
    return false;
  }
}
// REPEAT A STRING
function repeatStringNumTimes(str, num) {
  var string;
  if (num > 0){
    string = str.repeat(num) ;
  } else {
    string = "";
  }
  return string;
}
//TRUNCATE A STRING
function truncateString(str, num) {
  if (str.length > num){
    if (num <= 3) {
      str = str.slice(0, num)+"...";
    } else {
      str = str.slice(0, num-3)+"...";
    }      
  } 
  return str;
}