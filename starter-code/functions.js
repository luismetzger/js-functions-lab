// Question 1
function maxOfTwoNumbers(x, y) {
   return Math.max(x, y);
}
maxOfTwoNumbers(4000, 600);

// Question 2
function maxOfTwoNumbers(x, y, z) {
   return Math.max(x, y, z);
}

maxOfTwoNumbers(40, 60, 100);

// Question 3
function isCharacterAVowel(x) {
	if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
		return true;
	}else {
		return false;
	}
}

isCharacterAVowel("a");

// Question 4
var sum = [1, 2, 3, 4]

function sumArray(x) {
	var total = 0;

	for (var i = 0; i < x.length; i++) {
	    total += x[i];
	}

	return total;
}

sumArray(sum);


// Question 4
var num = [1, 2, 3, 4]

function multiplyArray(x) {
	var total = 1;

	for (var i = 0; i < x.length; i++) {
	   total *= x[i];
	}

	return total;
}

multiplyArray(num);


// Question 5
var numberOfArguments = function(){
	for (var i=0; i < arguments.length; i++) {
			arguments[i];
	}
	return  arguments.length;
}

numberOfArguments(1, 5, 4, 8);


// Question 6
var reverseString = function (x){
	return x.split("").reverse().join("");
};

reverseString("Hello World!");


// Question 7
var array = ["development", "design", "business", "entrepreneurship", "whattheheckisthis"]

function findLongestWord () {
	var start = 0;
	var longest = " ";

	for(var i=0; i < array.length; i++) {
		if(array[i].length > start) {
			start = array[i].length;
			longest = array[i];
		}
	}
	return longest;

}

findLongestWord();


// Question 8
var movies = ["die hard", "beverly hills cop", "leathal weapon", "rocky"]

function filterLongWords(x, y) {
	for(var j=0; j < x.length; j++) {
		if(x.length >= y) {
			console.log(movies[j]);
			break;
		}else {
			console.log("not big enough");
			break;
		}
	}
}

filterLongWords(movies, 3);


// Bonus 1
function charactersOccurencesCount() {

}
