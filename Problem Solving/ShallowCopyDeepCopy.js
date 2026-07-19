// Shallow Copy

/*
Shallow copy is create a copy of an object or array,
It will copy the reference of the original object or array,
It will not create a new Object or array with new reference,


If you change anything in the original object or Array, 
it will reflect in the copied object or array as well.

Methods to create a shallow copy of an object or array:
1. Using Object.assign() method
2. using spread operator ({ ...obj })
3. assignment operator (=) only copies the reference
*/

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
};

// console.log("Employee=> ", employee);

// // Shallow copy
// let newEmployee = { ...employee };    
// console.log("New Employee=> ", newEmployee);

// console.log("---------After modification----------");
// newEmployee.ename = "Beck";

// console.log("Employee=> ", employee);        
// console.log("New Employee=> ", newEmployee);

console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);


