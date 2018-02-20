// <!-- ## Step 7 : Multiple operations



// 3. Create a function that:
//   1. Multiplies the shoe size by 2
//   2. Adds 5
//   3. Multiplies by 50
//   4. Subtracts the birth year
//   5. Adds 1766
// 4. Shows the result to the user  
// 5. Commit -->



let shoeSize = document.getElementById('shoe_size')
let year = document.getElementById('year')
let validate = document.getElementById('validate')

validate.addEventListener('click',function () {
	var result = ((((shoeSize.value * 2) + 5 )* 50 ) - year.value) + 1766
	alert(result)
})