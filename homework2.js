// 1) შევქმნათ ქალაქების დასახელების არაი(ლისთი) დეფოლტად 5 ქალაქისგან;
//      დავამატოთ ერთი ქალაქი დასაწყისში და ერთი ბოლოში არაის მეთოდების გამოყენებით;
//      დავბეჭდოთ სიგრძე;
//      დავბეჭდოთ მესამე და მეოთხე წევრი;
//      დავბეჭდოთ ბოლო წევრი, ოღონდ არა პირდაპირი ინდექსის მიმართვის - arr[5] - ასე არა !

const cities = ["თბილისი", "ბათუმი", "ქუთაისი", "წყალტუბო", "ხონი"];
cities.unshift("სამტრედია");
cities.push("თელავი");
console.log(cities);
let cityLength = cities.length;
console.log(cityLength);
console.log(cities[2], cities[3]);
console.log(cities[cities.length - 1]);

// 2) შევქმნათ სოფლების არაი დეფოლტად 3 სოფლისგან
//      გავაერთიანოთ წინა არაისთან.
//      ამოვჭრათ არაის მესამე წევრი.
//      ამოვჭრა არაის მეოთხე წევრიდან მომდევნო 2 წევრი.
//      მეოთხე წევრის მერე ჩავამატოთ სამი სოფელი არაის მეთოდის გამოყენებით.

const villages = ["ჯუთა", "როშკა", "სიონი"];
let newArray = villages.concat(cities);
console.log(newArray);
newArray.splice(2, 1);
console.log(newArray);
newArray.splice(3, 2);
console.log(newArray);
newArray.splice(4, 0, "სნო", "ცდო", "არშა");
console.log(newArray);

// 3) შევქმნათ ცარიელი არაი.
//     შევქმნათ სამი მანქანის ობიექტი ველებით - მარკა, გამოშვების წელი, ფასი.
//     დავამატოთ სამივე შექმნილ არაიში.
//     დავბეჭდოთ არაის მეორე წევრის მარკა.
//     დავბეჭდოთ არაის პირველი და მესამე წევრის ფასი.

let carsArray = [];
let carsObject1 = { model: "Audi", releaseDate: 2000, price: 1700 };
let carsObject2 = { model: "Volvo", releaseDate: 1900, price: 4300 };
let carsObject3 = { model: "Honda", releaseDate: 2023, price: 2500 };

carsArray.push(carsObject1);
carsArray.push(carsObject2);
carsArray.push(carsObject3);

console.log(carsArray[1].model);
console.log(carsArray[0].price);
console.log(carsArray[2].price);

// 4) შევქმნათ ფუქნცია, რომელსაც პარამეტრად გადაეცემა არაი და ინდექსი და რომელიც დააბრუნებს
//     ამ არაიში ამ ინდექსზე მდგომი ელემენტის სიგრძეს.
//     სატესტოდ გადაეცი ფუქნციას arr=['samsung','xiaomi','htc', 'nokia'] და index=2,
//უნდა დააბრუნოს 3 რადგან მეორე ინდექსზე მდგომი არის  'htc' , მისი სიგრძე არის 3.
//     შევქმნათ ახალი ფუქნცია, რომელსაც პარამეტრად გადაეცემა არაი და რომელიც
//აბრუნებს პირველ და ბოლო ელემენტებს ახალ არაიში ჩაწერილს.

function mobilePhones(arr, index) {
  return arr[index].length;
}
var arr = ["samsung", "xiaomi", "htc", "nokia"];
var index = 2;
console.log(arr[2].length);

function newMobilePhones(arr) {
  return [arr[0], arr[arr.length - 1]];
}
var arr = ["samsung", "xiaomi", "htc", "nokia"];
var result = newMobilePhones(arr);
console.log(result);
