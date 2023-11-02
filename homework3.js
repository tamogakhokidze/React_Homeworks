// 1) შევქმნათ რიცხვების არაი ათი რიცხვისგან
// ა) ციკლის გამოყენებით გადავუაროთ და დავბეჭდოთ ყველა ლუწი;

let numbers = [2, 55, 64, 976, 54, 1, 99, 454, 65, 678];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 == 0) {
    console.log(element);
  }
}
// ბ) ვიპოვოთ და დავბეჭდოთ მაქსიმალური ელემენტი
let numbers = [2, 55, 64, 976, 54, 1, 99, 454, 65, 678];
let maxNumber = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maxNumber) {
    maxNumber = numbers[index];
  }
}
console.log(maxNumber);

// გ) დავბეჭდოთ ყველა ელემენტის ჯამი

let numbers = [2, 55, 64, 976, 54, 1, 99, 454, 65, 678];
let numberSum = 0;
for (let index = 0; index < numbers.length; index++) {
  numberSum += numbers[index];
}
console.log(numberSum);

// დ) დავბეჭდოთ რაოდენობა - რამდენია 15-ზე მეტი ელემენტი

let numbers = [2, 55, 64, 976, 54, 1, 99, 454, 65, 678];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > 15) {
    console.log(element);
  }
}

// ; 2) შევქმნათ სახელების არაი ათი სახელისგან
// ;     ა) დავბეჭდოთ ყველა ისეთი სახელი, რომლის სიგრძე არის 5 ან მეტის ტოლი

let names = [
  "Tamari",
  "Nini",
  "ia",
  "Nikoloz",
  "eli",
  "Ekaterine",
  "Toma",
  "Io",
  "Tekla",
  "Miako",
];
for (let index = 0; index < names.length; index++) {
  const element = names[index];
  if (element.length >= 5) {
    console.log(element);
  }
}

// ;     ბ) დავბეჭდოთ ისეთი სახელები რომლებიც შეიცავ ასო 'ი'-ს. includes() ფუნქციის გამოყენებით

let names = [
  "Tamari",
  "Nini",
  "ia",
  "Nikoloz",
  "eli",
  "Ekaterine",
  "Toma",
  "Io",
  "Tekla",
  "Miako",
];
for (let index = 0; index < names.length; index++) {
  const element = names[index];
  if (element.includes("i")) {
    console.log(element);
  }
}

// გ) ვიპოვოთ ყველაზე გრძელი სახელი და დავბეჭდოთ

let names = [
  "Tamari",
  "Nini",
  "ia",
  "Nikoloz",
  "eli",
  "Ekaterine",
  "Toma",
  "Io",
  "Tekla",
  "Miako",
];
let longestElement = names[0];
for (let index = 0; index < names.length; index++) {
  const element = names[index];
  if (element.length > longestElement.length) {
    longestElement = element;
  }
}
console.log(longestElement);

// ; 3) შევქმნათ ხუთი მანქანის ობიექტი ველებით - მოდელი, გამოშვების წელი, ფასი, ჩავყაროთ არაიში
// ;     ა) ციკლის გამოყენებით დავბეჭდოთ ყველა მანქანა რომლის გამოშვების წელი მეტია 2020-ზე

let cars = [
  { model: "Audi", releaseDate: 2000, price: 1700 },
  { model: "Volvo", releaseDate: 1900, price: 4300 },
  { model: "Honda", releaseDate: 2022, price: 2500 },
  { model: "BMW", releaseDate: 2023, price: 5400 },
  { model: "Mercedes", releaseDate: 1950, price: 6500 },
];

for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  if (element.releaseDate > 2020) {
    console.log(element);
  }
}

// ;     ბ) ვიპოვოთ ყველაზე ძვირიანი მანქანა და დავბეჭდოთ მოდელი

let cars = [
  { model: "Audi", releaseDate: 2000, price: 1700 },
  { model: "Volvo", releaseDate: 1900, price: 4300 },
  { model: "Honda", releaseDate: 2022, price: 2500 },
  { model: "BMW", releaseDate: 2023, price: 5400 },
  { model: "Mercedes", releaseDate: 1950, price: 6500 },
];
let maxPrice = 0;
let maxPriceCar = 0;
for (let index = 0; index < cars.length; index++) {
  const element = cars[index];

  if (element.price > maxPrice) {
    maxPrice = element.price;
    maxPriceCar = element;
  }
}
console.log(maxPriceCar);
// ;     გ) ვიპოვოთ ყველა მანქანის ღირებულების ჯამი

let cars = [
  { model: "Audi", releaseDate: 2000, price: 1700 },
  { model: "Volvo", releaseDate: 1900, price: 4300 },
  { model: "Honda", releaseDate: 2022, price: 2500 },
  { model: "BMW", releaseDate: 2023, price: 5400 },
  { model: "Mercedes", releaseDate: 1950, price: 6500 },
];
let sumPrice = 0;
for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  sumPrice += element.price;
}
console.log(sumPrice);
