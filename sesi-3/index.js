/**
 * Employee turunan dari Person
 * sifat2 yang ada di person itu akan turun ke employee
 */

class Person {
    constructor(name, height, age) {
        this.name = name
        this.height = height
        this.age = age
    }
    
    sleep() {
        return 'tidur'
    }
}

class Employee extends Person {
    constructor(idParam, name, height, age) {
        super(name, height, age)
        this.id = idParam
    }
   
    doWork(task) {
        return `run a ${task}`
    }
}

let udin = new Employee(1, 'udin', 170, 24)
let budi = new Person('budi', 170, 24)

console.log(udin.doWork('cuci baju'), `<=================== udin ==================`);
console.log(udin, `<=================== udin ==================`);
console.log(budi, `<===================  ==================`);

// udin = {
//     doWork: function(task) {
//         return `obj run ${task}`
//     }
// }

// console.log(udin.doWork('cuci baju'), `<=================== udin.doWork('cuci baju') ==================`);