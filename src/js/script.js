"use strict"

//Ex. #1
/* 
const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];

function femaleNameSelector(names){
    for(let name of names){
        let lastLetter;
        const letterArray = name.split("");
        for(let i = 1; i<letterArray.length; i++){
            lastLetter = letterArray[i];
        }
        console.log(lastLetter);
        if(lastLetter !== 'a'){
            names.splice(names.indexOf(name), 1);
        }
    }
}

console.log(names);
femaleNameSelector(names);
console.log(names);
*/

//Ex. #2
/*
const employees = {
    john: {
      name: 'John Doe',
      salary: 3000
    },
    amanda: {
      name: 'Amanda Doe',
      salary: 4000
    },
}

const employeeData = {
    names: {},
    salaries: {},
};

for(let employeeId in employees){
    const employee = employees[employeeId];

    employeeData['names'][employeeId] = employee.name;
    employeeData['salaries'][employeeId] = employee.salary;
}
console.log(employeeData);

*/

// Ex. #3

const salaries = [2000, 3000, 1500, 6000, 3000];
let salariesSum = 0;
let highestSalary = 0;
let lowestSalary = salaries[1];
for(let i = 0; i < salaries.length; i++){
    salariesSum += salaries[i];
    if(salaries[i] > highestSalary){
        highestSalary = salaries[i];
    }
    if(salaries[i] < lowestSalary){
        lowestSalary = salaries[i];
    }
}
console.log('sum of the sallaries: ', salariesSum);
console.log('highest salary: ', highestSalary);
console.log('lowest salary: ', lowestSalary);


