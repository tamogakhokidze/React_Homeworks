//1)  შევქმნათ მართკუთხედის პერიმეტრისა და ფართობის გამოთვლის ფუნქციები - ორი სხვადასხვა ფუნქცია,
//ფუქნციებს გადაეცემა პარამეტრად სიგრძე და სიგანე, ერთი ფუქნცია აბრუნებს პერიმეტრს, მეორე ფართობს;

function perimeter(x, y) {
  const result = (x + y) * 2;
  return result;
}
perimeter(2, 5);

function area(x, y) {
  const result = x * y;
  return result;
}
area(2, 5);

// 2) შევქმნათ ფუქნცია, რომელსაც გადაეცემა რიცხვი და აბრუნებს true-ს თუ ეს რიცხვი იყოფა 10-ზე ზუსტად,
// თუ არა - აბრუნებს false
function isdevidedTen(number) {
  if (number % 10 == 0) {
    return true;
  } else {
    return false;
  }
}
isdevidedTen(20);

// 3) შევქმნათ ფუქნცია, რომელსაც გადაეცემა სამი რიცხვი და აბრუნებს
//ამათ შორის მაქსიმალურს;

// function isMax(x, y, z) {
//   return Math.max(x, y, z);
// }
// isMax(2, 44, 98);

function isMax(num1, num2, num3) {
  const numbers = [num1, num2, num3];
  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers[0];
}

let maxNumber = isMax(3, 77, 306, 2);
console.log(maxNumber);

// 4) შევქმნათ ფუქნცია, რომელსაც გადაეცემა ოთხი რიცხვი და აბრუნებს ამ ოთხი რიცხვის საშუალოს
function isAvarage(num1, num2, num3, num4) {
  let sum = num1 + num2 + num3 + num4;
  let avarage = sum / 4;
  return avarage;
}
isAvarage(2, 10, 20, 4);

// 5) შევქმნათ ობიექტი Patient, რომელსაც აქვს ველები - პირადი ნომერი, სახელი, გვარი,
//ასაკი, დიაგნოზი;
//      შევქმნათ ფუქნცია, რომელსაც პარაემტრად გადაეცემა პაციენტი და აბრუნებს
//       - "პაციენტი x y, პირადი ნომერი z, ასაკი k, დიაგნოზი p"
//      უცნობების ნაცვლად ჩავსვათ გადმოცემული პარამეტრიდან მნიშნელობები.

const patient = {
  personalNumber: 11,
  firstName: "x",
  lastName: "y",
  age: 20,
  diagnosis: "p",
};

function patientFunction(patient) {
  return patient;
}

patientFunction(patient);

// 6) შევქმნათ ობიექტი Employee, რომელსაც აქვს ველები - სახელი, პოზიცია, ხელფასი, მისამართი -
// რომელიც არის ასევე ობიექტი ველებით - ქალაქო, ქუჩა, კორპუსი
const Employee = {
  firstName: "Tamo",
  position: "PM",
  salary: 20,
  address: {
    city: "Tbilisi",
    street: "Robakidze",
    building: 24,
  },
};
console.log(Employee.address.building);
console.log(Employee.address.street);
console.log(Employee.firstName);
