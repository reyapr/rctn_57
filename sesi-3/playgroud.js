import { Employee, BusinessMan, TEST } from "./Employee.js";

let bambang = new Employee(1, 'bambang', 170, 24)
let budi = new BusinessMan('budi', 170, 25)
console.log(TEST, `<=================== test ==================`);
console.log(budi.managePeople(), `<===================  ==================`);
console.log(bambang, `<=================== bambang ==================`);
