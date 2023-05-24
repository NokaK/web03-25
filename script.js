let rendamData = [
  1,
  2,
  "4",
  4,
  true,
  [
    6,
    7,
    8,
    9,
    10,
    {
      name: "John",
    },
  ],
];

// console.log(rendamData[5][0]);
let numbers = [1, 2, 3, 4, 5];

let numbersSum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
// console.log(numbersSum);

let person = {
  name: "John",
};

// console.log(typeof numbers);
// console.log(typeof person);

let persons = [
  {
    name: "John",
    age: 30,
    address: "New York",
  },
  {
    name: "Jane",
    age: 18,
    address: "New York",
  },
  {
    name: "Givi",
    age: 50,
    address: "New York",
  },
];

let personsIndex = 1;
// console.log(
//   `My name is ${persons[personsIndex].name} and I am ${persons[personsIndex].age} years old`
// );
// console.log(
//   "My name is " +
//     persons[personsIndex].name +
//     " and I am " +
//     persons[personsIndex].age +
//     " years old"
// );

// if (persons[personsIndex].age > 19) {
//   console.log("You are old enough to drink alcohol");
// } else if (persons[personsIndex].age === 18) {
//   console.log("You are 18 years old");
// } else {
//   console.log("You are not old enough to drink alcohol");
// }

// switch (persons[personsIndex].age) {
//   case 18:
//     console.log("You are 18 years old");
//     break;
//   case 30:
//     console.log("You are 30 years old");
//     break;
//   case 50:
//     console.log("You are 50 years old");

//   default:
//     console.log("You are not old enough to drink alcohol");
//     break;
// }

// const currentDate = new Date().getDay();
// console.log(currentDate);

// switch (9) {
//   case 0:
//     console.log("Today is Sunday");
//     break;
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//   case 3:
//     console.log("Today is Tuesday  or  Wednesday");
//     break;
//   case 4:
//     console.log("Today is Thursday");
//   case 5:
//     console.log("Today is Friday");
//     break;
//   case 6:
//     console.log("Today is Saturday");
//     break;
//   default:
//     console.log("Today is not a day");
//     break;
// }

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newItem = {
  name: "John",
};

let sliceNumbers = numbersArr.splice(0, 5); // slice array
// console.log(sliceNumbers);

numbersArr.pop(); // remove last element
numbersArr.shift(); // remove first element
numbersArr.unshift(999); // add first element
numbersArr.push(newItem); // add last element

// console.log(numbersArr);

let newNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 60, 20, 40];

for (let index = 0; index < newNumbersArray.length; index++) {
  let number = newNumbersArray[index];
  if (number % 2 === 0) {
    number = number * 2;
    console.log(number);
  } else {
    number = number * number;
    console.log(number);
  }
}
console.log(newNumbersArray.length);

let names = ["John", "Jane", "Alexandre", "Givi", "nia", "Gio"];

let students = [
  { name: "Jane", age: 10 },
  { name: "Jane", age: 20 },
  { name: "Alexandre", age: 40 },
  { name: "Givi", age: 80 },
  { name: "nia", age: 35 },
  { name: "Gio", age: 50 },
];

for (let index = 0; index < students.length; index++) {
  let student = students[index].name;
  let age = students[index].age;
  if (student.length === 3 && age > 30) {
    let uppercaseName = student.toUpperCase();
    console.log(uppercaseName);
  } else {
    let lowerCaseName = student.toLowerCase();
    console.log(lowerCaseName);
  }
}

let colors = [];

for (let index = 0; index < 10; index++) {
  colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
}
console.log(Array.isArray(colors));

let lastName;
console.log(typeof lastName);

let whileNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 0;
while (index < whileNumber.length) {
  console.log(whileNumber[index]);
  index++;
}

do {
  console.log(whileNumber[index]);
  index++;
} while (index < 10);
