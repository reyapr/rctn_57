let score = 10
let scoreUdin = 20
let employeeName = 'udin'
let employeeName1= 'budi'
let companyName = "ikea"
let scoreInText = '1'
let scoreInText2 = '2'
let totalScore = score + scoreUdin

let months = ['Jan', 'Feb']
months = []

// console.log(months, `<===================  ==================`);

let arrMultiDimensi = [
    [1,2,3], // c0
    [4,5,6], // c1
    [7,8,9] //  c2
]

console.log(arrMultiDimensi[2][1], `<===================  ==================`);


let numbersFirstStep = new Array(1,2,3,4,5,6)

let numbers = [10,20,30,40,50,60,70]
// numbers[2] = 7

let concatedTwoArrays = numbersFirstStep.concat(numbers)
let joinedTwoArrays = [...numbers, ...numbersFirstStep]
let joinedTwoArraysWithoutSpreadOperator = [numbers, numbersFirstStep]


// console.log(numbers.splice(2, 3, 100, 101, 102,103,104), `<=================== output splice ==================`);
// console.log(numbers, `<=================== output numbers after splice ==================`);

// let slicedArr = numbers.slice(2)

// console.log(slicedArr, `<===================  ==================`);
// console.log(numbers.slice(2, numbers.length), `<===================  ==================`);
// console.log(numbers.slice(-3), `<===================  ==================`);
// console.log(numbers.slice(2, 0), `<===================  ==================`);

// console.log(numbers, `<===================  ==================`);

// console.log(joinedTwoArraysWithoutSpreadOperator, `<===================  ==================`);


// console.log(numbers[numbers.length - 1], `<===================  ==================`);


numbers = [5]

numbers.push(7)
numbers.unshift(4)
numbers.pop()
numbers.shift()

// console.log(numbers, `<=================== numbers ==================`);


// console.log(score == 10, `<===================  ==================`);
// console.log(score == 20, `<===================  ==================`);
// console.log(10 == '10', `<===================  ==================`);
// console.log(10 === '10', `<===================  ==================`);
// console.log(10 === '20', `<===================  ==================`);


// console.log(anyValue, `<===================  ==================`);





// console.log( `<=================== other console ==================`);

// console.log(score + 2 , `<===================  variable + directly data type ==================`);
// console.log(score + scoreUdin, `<=================== variable + variable  ==================`);

// let postFixIncrement = score++ // postfix increment
// console.log(score, postFixIncrement, `<=================== score after postfix increment ==================`);

// let prefixIncrement = ++score // prefix increment
// console.log(score, prefixIncrement, `<=================== score after prefix increment ==================`);

// score--
// console.log(score, `<=================== score after decrement ==================`);

// score = score + 3
// score += 3 
// console.log(score, `<=================== score ==================`);


// console.log("He's good" + ' ' + companyName);
// console.log('He said "good"');
// console.log(`He's good ${companyName}`);

// console.log('udin'.length, `<=================== udin length ==================`);
// console.log(name[0], `<=================== udin 0 ==================`);
// console.log(name[name.length - 1], `<=================== udin last index ==================`);
// name[0] = 'a'
// console.log(name, `<===================  ==================`);
// console.log(scoreInText.concat(scoreInText2), `<=================== scoreInText.concat(scoreInText2) ==================`);
// scoreInText+= scoreInText2
// console.log(scoreInText, `<=================== score ==================`);
// console.log(1,2,3,4,5,6,7, `<===================  ==================`);

// let isValid = true
// console.log(typeof isValid, isValid, `<=================== typeof isValid ==================`);

// console.log(!isValid, `<=================== !isValid ==================`);

