
var stringSize = function (text) {
	return text.length;
}
var replaceCharacterE = function (text) {
	let result = text.replace(/e/,' ');
	console.log(result) 
	return 	result;
}
var concatString = function (text1, text2) {
	var result = text1.concat(text2)
	return result;
}
var showChar5 = function (text) {
	let result = text.charAt(4)
	console.log(result)
	return result
}

var showChar9 = function (text) {
	let result = text.substring(0,9)
	return result	  
}		

var toCapitals = function (text) {
	let result = text.toUpperCase()
	return result
}
var toLowerCase = function (text) {
	let result = text.toLowerCase()
	return result
}
var removeSpaces = function (text) {
	let result = text.trim();
	return result
}
var IsString = function (text) {
		
		if(typeof(text) == 'string'){
  			return true
		}
		else return false
}

var getExtension = function (text) {
	let ext = text.split('.')
	return ext[1]
}
var countSpaces = function (text) {
	let result = text.split(' ')
	return result.length -1
}

var InverseString = function (text) {
	//first way checked :)
	// let splitText = text.split("")
	// let reverseText = splitText.reverse()
	// let joinText = reverseText.join("")
	// return joinText

	//second way checked :)
	let newText = ""
	for (let i = text.length -1 ; i >= 0 ; i--) {
		 newText += text[i]
	}
	return newText;
}

var power = function (x, y) {
	result = Math.pow(2,3)
	return result
}
var absoluteValue = function (num) {
	let result = Math.abs(num)
	return result
}
var absoluteValueArray = function (array) {
	let result ;
	let a = [];
	for (var i = 0; i < array.length; i++) {
		result = Math.abs(array[i]) 
		a.push(result)
	}
	return a
	
}
var circleSurface = function (radius) {
	 area = Math.ceil( Math.PI * (radius * radius));
	 return area
}
var hypothenuse = function (ab, ac) {
	let hypothenuseTriangle = Math.hypot(ab,ac) 
	return hypothenuseTriangle
}
var BMI = function (weight, height) {
	let bmi =(weight / (height * height)).toFixed(2)
	let result = parseFloat(bmi)
	return result
}

var createLanguagesArray = function () {
	let array = [ 'Html', 'CSS', 'Java', 'PHP' ]
	return array
}

var createNumbersArray = function () {
	let array = []
	for (let i = 0; i <= 5; i++) {
		 array.push(i)
	}
		return array
}

var replaceElement = function (languages) {
	languages.splice(2,1,'Javascript')
	return languages
}

var addElement = function (languages) {
	languages.splice(5,0,'Ruby','Python')
	return languages	
}

var addNumberElement = function (numbers) {
	numbers.splice(0,0,-2,-1)
	return numbers
}

var removeFirst = function (languages) {
	languages.shift()
	return languages
}

var removeLast = function (languages) {
	languages.pop()
	return languages
}

var convertStrToArr = function (social_arr) {
	let result = social_arr.split(',')
	return result
}

var convertArrToStr = function (languages) {
	let result = languages.toString()
	return result
}

var sortArr = function (social_arr) {
	let result = social_arr.sort()
	return result	
}

var invertArr = function (social_arr){
	let result = social_arr.reverse()
	return result
}
