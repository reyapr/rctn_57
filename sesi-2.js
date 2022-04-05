let obj = {}

let person = { 
    name: 'Udin',
    'last name': 'Sedunia',
    'height': 170,
    'certificates': [
        'Intro To Programming',
        'AWS Cloud',
        'GCP Kubernetes',
        'Security'
    ],
    'isMarried': false
}

person.weight = 60
person.isMarried = true


let certKey = 'certificates'
person[certKey].push('DDD Training') // [ 'Intro To Programming', 'AWS Cloud', 'GCP Kubernetes', 'Security' ]

person['car'] = {
    brand: 'Mercedes'
}

person.car.type = 'C 250'

obj['string'] = 'test'

obj[15] = 'lima belas'
obj['boolean'] = false
obj[20] = 'dua puluh'
obj[1] = 'satu'

// ================================================================= Function ==============================================================================

function showMessage() {
    console.log( `<=================== hi, i'm in function ==================>`);
}

function showMessageByParam(message, name) {
    console.log(`${message}, ${name}`, `<=================== message ==================`);
}

function constructMessage(message, name) {
    return `${message}, ${name}`
}

// showMessage()
// showMessageByParam('Hello', 'Udin')
// const message1 = showMessageByParam('Saya', 'Budi')

const message = constructMessage('Hallo', 'Saya Udin Sedunia')


const sum = function(num1, num2) {
    return num1 + num2
}

const calculate = function(numbers, sumFunction) {
    let result1 = sumFunction(numbers[0], numbers[1])
    let result2 = sumFunction(numbers[1], numbers[2])
    
    return result1 + result2
}



// console.log(sum(1,2), `<===================  ==================`);
const data = [1,2,3]
const result = calculate(data, sum)
// console.log(result, `<=================== result ==================`);

const showHelloWorld = () => {
    return 'Hellow World'
}

const showNumber = (num) => {
   return `Number is: ${num}` 
}

// console.log(showHelloWorld(), `<===================  ==================`);
// console.log(showNumber(4), `<=================== show number ==================`);


const calculateInArrowFunction = (numbers, sumFunction) => {
    let result1 = sumFunction(numbers[0], numbers[1])
    let result2 = sumFunction(numbers[1], numbers[2])
    
    return result1 + result2
}

const resultFromArrowFunction = calculateInArrowFunction(data, sum)
// console.log(resultFromArrowFunction, `<=================== result ==================`);

const jumlahkan = (num1, num2) => num1 + num2
/**
 * const jumlahkan = (num1, num2) => {
 *    return num1 + num2
 * }
 * sama dengan hal di atas
 */

// console.log(jumlahkan(1,2), `<===================  ==================`);

// (() => {
//     console.log( `<=================== 'Hello directly called' ==================`);
// })()

// setTimeout(() => {
//     console.log( `<=================== muncul setelah dua detik menunggu ==================`);
// }, 2000)

// obj = { // does not create a new scope
//     i: 10,
//     b: () => console.log(this.i, this),
//     c: function() {
//       console.log(this.i, this);
//     }
//   }
  
//   obj.b(); // prints undefined, Window {...} (or the global object)
//   obj.c(); // prints 10, Object {...}

let res = ['John', 'Doe', 'Jakarta']
let [firstName, lastName, address] = res

// console.log(firstName,lastName, address, `<===================  ==================`);

const calculateWithDestructure = ([firstNumber, secondNumber, thirdNumber], sumFunction) => {
    let result1 = sumFunction(firstNumber, secondNumber)
    let result2 = sumFunction(secondNumber, thirdNumber)
    return result1 + result2
}

const resultFromDestructure = calculateWithDestructure(data, sum)

let resObj = {
    namaDepan: 'John',
    namaBelakang: 'Doe',
    alamat: 'Jakarta'
}

let { alamat, namaBelakang } = resObj

let constructPerson = (name, address) => ({ name, address })


let { name } = constructPerson('udin', 'jawa barat')
// console.log(name, `<===================  ==================`);

// console.log(this, `<=================== outside function ==================`);
let counter = {
    num: 0,
    increment: function() {
        console.log(this, `<=================== this inner counter ==================`);
    }
}

// console.log(counter.increment(), `<=================== counter ==================`);

function testThis() {
    console.log(this, `<=================== inside test this ==================`);
}

const testArrowFuncThis = () => {
    console.log(this, `<=================== inside arrow function ==================`);
}
// testThis()
// testArrowFuncThis()

this.outside = 1
const testThisInsideInnerFunction= () => {
    this.val = 0
    setTimeout(() => {
        console.log(this.val, `<===================  ==================`);
    }, 1000)
}

function testThisInsideInnerFunctionTraditional() {
    this.val = 0
    setTimeout(function() {
        console.log(this.val, `<===================  ==================`);
    }, 1000) 
}


// testThisInsideInnerFunctionTraditional()
// testThisInsideInnerFunction()

let sumHigherOrderFunction = (num1, num2) => {
    let result = num1 + num2
    
    return (pow) => {
        return Math.pow(result, pow)
    }
}
let powResult = sumHigherOrderFunction(1,2)(3)
// console.log(powResult, `<===================  ==================`);


let animals = [
    {name: 'fluffy', species: 'cat'},
    {name: 'carlo', species: 'cat'},
    {name: 'sweety', species: 'fish'},
    {name: 'bruno', species: 'dog'},
]


let names = animals.map(animal => {
    return animal.name + ' is ' + animal.species
})

let namesWithoutReturn = animals.map(animal => {
    return []
})

let namesWithoutDogWrongImplement = animals.map(animal => {
    if(animal.species !== 'dog') {
        return animal.name + ' is ' + animal.species
    }
})

let namesWithoutDog = animals
    .filter(animal => animal.species !== 'dog')
    .map(animal => animal.name + ' is ' + animal.species)


// console.log(names, `<=================== names ==================`);
// console.log(namesWithoutReturn, `<=================== namesWithoutReturn ==================`);
// console.log(namesWithoutDogWrongImplement, `<=================== namesWithoutDog ==================`);
// console.log(namesWithoutDog, `<=================== namesWithoutDog ==================`);

let cars = [
    { price: 20000, name: 'a' },
    { price: 10000, name: 'b' },
    { price: 30000, name: 'c' },
    { price: 40000, name: 'd' },
]

let totalPrice = cars.reduce((accumulator, car) => {
    return accumulator + car.price
}, 0)

console.log(totalPrice, `<=================== totalPrice ==================`);

let currentCars = [
    { price: 100, name: 'f' },
    { price: 400, name: 'h' },
]

let mergeCars = cars.reduce((acc, car) => {
    acc.push(car)
    return acc
}, currentCars)

console.log(mergeCars, `<===================  ==================`);
