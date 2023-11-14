//! 1

const a = 1234
const b = 'qwerty'
const c = true
console.log(a,b,c);

//! 2

let str = "123"
console.log(Number(str));
console.log(str.toString());

//! 3

const arr = [1,2,3,4,5]

for(let i = 0; i < arr.length;i++) {
    console.log(arr[i]);
}

//! 4

let person = {
    name: "Нурбек",
    age: 18,
    city: "Бишкек",
    nickname: "Nrueb"
  };

  console.log("Имя: " + person.name);
  console.log("Возраст: " + person.age);
  console.log("Город: " + person.city);
  console.log("Профессия: " + person.nickname);

//! 5

let num = prompt('Ведите число')

  if(num % 2 == 0) {
    console.log('чётное');
  }else {
    console.log('нечёт');
  }

//! 6

for (let i = 1;  i <= 10; i++) { 
    console.log(i) 
} 

//! 7

const arrowFunction = () => { 
    console.log('Hello World!'); 
    } 
    arrowFunction() 
     
    function declarationFunction() { 
    console.log('Hello World!') 
    } 
    declarationFunction() 
     
    const expressionFunction = function() { 
    console.log('Hello World!') 
    } 
    expressionFunction()

//! 8

const simplePromise = new Promise((resolve, reject) => { 
    setTimeout(() => { 
    resolve("Promise выполнено") 
    }, 2000) 
    }) 
     
    simplePromise.then(result => { 
        console.log(result) 
        }) 
 
const errorPromise = new Promise((resolve, reject) => { 
    setTimeout(() => { 
    reject(new Error("Произошла ошибка")) 
    }, 2000) 
    }) 

//? дополниетльные задания

//! 1

function calculateAverage(numbers) { 
    let sum = 0 
     
    for (let i = 0; i < numbers.length; i++) { 
    sum += numbers[i] 
    } 
     
    let average = sum / numbers.length; 
    return average 
    } 
     
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8] 
    let result = calculateAverage(numbers) 
    console.log(result) 

//! 2

function capitalizeStrings(arr) { 
    return arr.map(str => str.toUpperCase()) 
    } 
    let strings = ["аыва", "авыпырпа", "рпарап"] 
    let result1 = capitalizeStrings(strings) 
    console.log(result1) 

//! 3

function sort(arr) { 
    return arr.sort((a, b) => a.age - b.age); 
    } 
     
    let people = [ 
    { name: "Дима", age:26}, 
    { name: "Ваня", age:17}, 
    { name: "Дио", age:123} 
    ] 
     
    let sortedPeople = sort(people) 
    console.log(sortedPeople) 

//! 4

function filterUniqueNumbers(numb) { 
    let uniqueNumbers = [] 
     
    for (let i = 0; i < numb.length; i++) { 
    if (uniqueNumbers.indexOf(numb[i]) === -1) { 
    uniqueNumbers.push(numb[i]) 
    } 
    } 
     
    return uniqueNumbers; 
    } 
     
    let numb = [1, 2, 3, 4, 5, 1, 2, 3] 
    let res = filterUniqueNumbers(numb) 
    console.log(res) 

//! 5

function sortObjectsByName(arr) { 
    return arr.sort((a, b) => a.name.localeCompare(b.name)) 
    } 
     
    let peopl = [ 
    { name: "vadim" }, 
    { name: "mary" }, 
    { name: "dastan" } 
    ] 
     
    let sortedPeopl = sortObjectsByName(peopl) 
    console.log(sortedPeopl)

//! 6

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
 
let evenNumber = number 
.slice() 
.filter(num => num % 2 === 0); 
 
let result14 = evenNumber.join(","); 
console.log(result14)

//! 7

function filterBySalary(arr) { 
    return arr.filter(employee => employee.salary > 50000); 
    } 
     
    let employees = [ 
    { name: "чмо", salary: 60000 }, 
    { name: "ещё чмо", salary: 45000 }, 
    { name: "и ещё один чмо", salary: 55000 } 
    ] 
     
    let highPaidEmployees = filterBySalary(employees) 
    console.log(highPaidEmployees) 
 
//! 8

function filterNumbers(arr) { 
    return arr.filter(number23 => number23 > 10 && number23 < 20) 
    } 
     
    let numbers23 = [5, 12, 15, 25, 8] 
    let result23 = filterNumbers(numbers23) 
    console.log(result23)