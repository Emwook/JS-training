"use strict"

//Ex. 9.1.1
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

//Ex. 9.1.2
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

// Ex. 9.1.3
/*
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
*/

//Ex. 9.1.4
/*
const persons = {
    john: 2000,
    amanda: 3000,
    thomas: 1500,
    james: 6000,
    claire: 3000
  };
let salariesSum = 0;
let highestSalary = 0;
let lowestSalary = 999999;
for(let person in persons){
    salariesSum += persons[person];
    if(persons[person] > highestSalary){
        highestSalary = persons[person];
    }
    if(persons[person] < lowestSalary){
        lowestSalary = persons[person];
    }
}
console.log('sum of the sallaries: ', salariesSum);
console.log('highest salary: ', highestSalary);
console.log('lowest salary: ', lowestSalary);
*/

//Ex. 9.1.5
/*
const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

let uniqueTags = {};
let appearances = 0;
let appearancesTable = {};

for(let tagId = 0; tagId < tags.length; tagId++){
    const tagName = tags[tagId];
    if(!appearancesTable.hasOwnProperty(tagName)){
        appearancesTable[tagName] = 0;
        //console.log(tagName);
    }
    appearancesTable[tagName] += 1;
    appearances = appearancesTable[tagName];
    const tagCounter = {
        appearances,
    }
    uniqueTags[tagName] = tagCounter;
}
console.log(uniqueTags);
*/
//Ex. 9.2.4


