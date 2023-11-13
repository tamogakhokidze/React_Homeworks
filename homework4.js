// 1) შევქმნათ ფუნქცია, რომელსაც გადაეცემა სთრინგი და დააბრუნებს რამდენი ხმოვანია მასში;
function countVowels(string) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const iterator of string) {
    if (vowels.includes(iterator)) {
      count++;
    }
  }
  return count;
}
let string = "find vowels in this sentence";
let result = countVowels(string);
console.log(result);

// 2) შევქმნათ ფუქნცია რომელსაც გადაეცემა რიცხვების მასივი და ერთი ციფრი და დააბრუნებს რომელი
//ორი რიცხვის ჯამია გადაცემული ციფრი.მაგალითად გადაეცემა [2,5,7,12,34] და 17 და უნდა დააბრუნოს 5 და 12.
function numberSum(arr, sum) {
  pairs = [];
  for (let index = 0; index < arr.length; index++) {
    for (let i = index; i < arr.length; i++) {
      if (arr[index] + arr[i] === sum) {
        pairs.push(arr[index] + arr[i]);
      }
    }
  }
  return pairs;
}

let arr = [2, 5, 7, 12, 34];
let sum = 17;
let result = numberSum(arr, sum);
console.log(result);

// 3) შევქმნათ ფუქნცია, რომელსაც გადაეცემა ორი რიცხვი და აბრუნებს მასივს, რომელიც შედგება ამ ორ
//რიცხვს შორის მდებარე რიცხვებისგან, რომელიც უდნაშთოდ იყოფა 4-ზე.
//    მაგალითად გადაეცემა 5 და 21 და უნდა დაბრუნდეს [8,12, 16,20]
function returnArray(x, y) {
  let result = [];
  for (let index = x + 1; index < y; index++) {
    if (index % 4 === 0) {
      result.push(index);
    }
  }
  return result;
}

let x = 5;
let y = 21;
let returnArrayResult = returnArray(x, y);
console.log(returnArrayResult);

// 4) შევქმნათ ფუქნცია, რომელიც აბრუნებს გადაცემული სთრინგი პალინდრომია თუ არა.
//    პალინდრომი ნიშნავს, რომ სთრინგი ორივე მხრიდან ერთნაირად იკითხება, მაგ :
//ababa და cedidec პალინდრომია, amara არ არის პალინდორმი.
function isPalindrom(string) {
  let palimdromlength = string.length;
  for (let index = 0; index < palimdromlength / 2; index++) {
    if (string[index] !== string[palimdromlength - 1 - index]) {
      return "it is not palindrome";
    }
  }
  return "it is palindrome";
}
let string1 = "ababa";
let string2 = "amara";
let result1 = isPalindrom(string1);
console.log(result1);
let result2 = isPalindrom(string2);
console.log(result2);

// 5) შევქმნათ ფუქნცია, რომელსაც გადაეცემა სთრინგი და აბრუნებს თანხმოვნების რაოდენობას.
//     შევქმნათ მეორე ფუქნცია რომელსაც გადაეცემა სთრინგების მასივი და აბრუნებს სიტყვას, რომელშიც
//ყველაზე მეტი თანხმოვანია -  პირველი ფუქნციის გამოყენებით.ანუ მეორე ფუქნციაში უნდა გამოვიძახთ პირველი ფუქნცია.

function countConsonants(string) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;
  for (const iterator of string) {
    if (consonants.includes(iterator)) {
      count++;
    }
  }
  return count;
}
//   let string = "find consonants in this sentence";
//   let result = countConsonants(string);
//   console.log(result);

function mostConsonants(words) {
  let maxConsonants = 0;
  let worldWithConsonants = "";

  for (const word of words) {
    const countConsonant = countConsonants(word);
    if (countConsonant > maxConsonants) {
      maxConsonants = countConsonant;
    //   worldWithConsonants = word;
    }
  }
  return worldWithConsonants;
}
let words = ["find", "the", "longest", "word", "in", "this", "sentence"];
let resultConsonant = mostConsonants(words);
console.log(resultConsonant);

// 6) შევქმნათ ფუქნცია, რომელიც კუბში აიყვანს გადმოცემულ რიცხვს.
//     შევქმნათ მეორე ფუქნცია, რომელსაც გადაეცემა მასივი, რომელიც შეიცავს უარყოფით და დადებით რიცხვებს
//და დააბრუნებს იმ რიცხვს, რომელიც ყველაზე დაბალია კუბში აყვანისას,
//     პირველი ფუქნციის გამოყენებით.
function cubefunction(number) {
  let cube = number * number * number;
  return 
  console.log(cube);
}
cubefunction(3);

function findMinCube(numbers) {
  let minCubeNumber = cubefunction(numbers[0]);
  for (const number of numbers) {
    const cubeNumber = cubefunction(number);
    if (cubeNumber < minCubeNumber) {
      minCubeNumber = cubeNumber;
    }
  }
  return minCubeNumber;
}

let numbers = [ -45, 4, 98, -1, 876]
let minCubeNumber = findMinCube(numbers);
console.log(minCubeNumber);