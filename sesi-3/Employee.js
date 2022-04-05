import Person from './Person.js'

export class Employee extends Person {
    constructor(idParam, name, height, age) {
        super(name, height, age)
        this.id = idParam
    }
   
    doWork(task) {
        return `run a ${task}`
    }
}

export class BusinessMan extends Person {
    managePeople() {
        return 'manage people'
    }
}

export const TEST = 'test'