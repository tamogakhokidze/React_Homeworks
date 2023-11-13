// 1) შევქმნათ ფუნქცია, რომელსაც გადაეცემა რიცხვების მასივი და აბრუნებს იმ ორ რიცხვს,
//რომლის ჯამი ყველაზე მეტია
//მაგ: გადაეცემა [2,4,65,5,23,78] და აბრუნებს  [65,78]

function arraySum(arr) {
    if (arr.length < 2) {
      return null;
    }
    let maxSum = [arr[0] + arr[1]];
    let maxNumbers = [arr[0], arr[1]];
  
    for (let index = 0; index < arr.length; index++) {
      for (let i = 0; i < arr.length; i++) {
        let maxSum = [arr[0] + arr[1]];
        let maxNumbers = [arr[0], arr[1]];
  
        if (maxSum > maxNumbers) {
          maxSum = maxNumbers;
        }
      }
    }
    return maxNumbers;
  }
  
  let arr = [2, 4, 65, 5, 23, 78];
  const result = arraySum(arr);
  console.log(result);
  
  // 2) შევქნათ ფუქნცია, რომელსაც გადაეცემა ორი რიცხვი და აბრუნებს პირველ რიცხვს აყვანილს მეორე
  //რიცხვის ხარისხში. მაგ: გადაეცემა 5 და 3 და აბრუნებს 125-ს.
  
  function powerNumber(x, y) {
    let result = 1;
    for (let index = 0; index < y; index++) {
      result *= x;
    }
    return result;
  }
  
  const x = 5;
  const y = 3;
  
  const result = powerNumber(x, y);
  console.log(result);
  
  // 3)  შევქმათ ფუნქცია, რომელიც შეაბრუნებს გადმოცემულ მასივს, არ გამოიყენო reverse ფუნქცია.
  //     მაგ გადმოცემულია [3,4,5,6] და დააბრუნებს [6,5,4,3]
  
  function reverseNumbers(arr) {
    let reverseArray = [];
    for (let index = arr.length - 1; index >= 0; index--) {
      reverseArray.push(arr[index]);
    }
    return reverseArray;
  }
  const originalArray = [3, 4, 5, 6];
  const reverseArray = reverseNumbers(originalArray.slice());
  console.log(reverseArray);
  
  // 4) შევქმნათ ფუნქცია, რომელსაც გადაეცემა სთრინგი და აბრუნებს იგივე სთრინგს დიდი ასოებით
  //    მაგ: გადაეცემა 'abcd' და აბრუნებს 'ABCD'
  
  function uppercaseLetters(string) {
    return string.toUpperCase();
  }
  const string = "tamo";
  const result = uppercaseLetters(string);
  console.log(result);
  
  
  // 5) შევქმნათ ფუნქცია, რომელსაც გადაეცემა მილების მასივი და აბრუნდებს იგივე მასივს გადაყვანილს
  // კილომეტრებში map ფუნქციის გამოყენებით
  
  function toKilometers(milesArray) {
    const conversion = 1.6;
    const kilometersArray = milesArray.map((miles) => miles * conversion);
    return kilometersArray;
  }
  
  const milesArray = [100, 200, 300];
  const result = toKilometers(milesArray);
  console.log(result);
  
  // 6) შევქმნათ ფუქნცია, რომელიც გადმოცემული რიცხვების მასივიდან filter ფუნქციის გამოყენებით
  //დააბრუნებს მხოლოდ 5-ის ჯერად რიცხვებს
  
  function tofive(array) {
    const result = array.filter((number) => number % 5 === 0);
    return result;
  }
  const array = [5, 34, 55, 33, 125, 500];
  const result = tofive(array);
  console.log(result);
  
  // 7) შევქმნათ ფუნქცია, რომელსაც გადაეცემა ორნიშნა რიცხვი და აბრუნებ ამ რიცხვის ციფრთა ჯამს.
  //    მაგ: გადაეცემა 56 და აბრუნებს 11-ს
  
  function twoDigits(xy) {
    const x = parseInt(xy / 10);
    const y = xy % 10;
    const result = x + y;
    return result;
  }
  const xy = 56;
  const sum = twoDigits(xy);
  console.log(sum);
  
  // 8) შევქმნათ ფუქნცია, რომელსაც გადაეცემა რიცხვების მასივი და აბრუნებს
  //ლუწებისა და კენტების ჯამების სხვაობას.
  
  function evenAndOdds(array) {
    let oddsSum = 0;
    let evenSum = 0;
  
    for (let index = 0; index < array.length; index++) {
      if (array[index] % 2 === 0) {
        evenSum += array[index];
      }
      else{
        oddsSum += array[index];
      }
    }
    return evenSum - oddsSum;
  }
  const array = [10, 2, 1, 5, 6, 7];
  const result = evenAndOdds(array);
  console.log(result);
  
  // 9) შევქმნათ ფუქნცია, რომელსაც გადაეცემა რიცხვების მასივი და აბრუნებს მხოლოდ იმ რიცხვს,
  //რომელიც ყველაზე ახლოსაა 100-თან მაგ: გადაეცემა [34,5,67,156,400,78] და აბრუნებს 78-ს
  
  // 10) შევქმნათ ფუნქცია, რომელსაც გადაეცემა ორი სთრინგი და აბრუნებს true-ს თუ სთრინგები შეიცავენ
  //ერთიდაიგივე ასოებს, თუარა აბრუნებს false
  
  function similarstrings(string1, string2) {
    if (string1 === string2) {
      return true;
    }
    return false;
  }
  const string1 = "Tamo";
  const string2 = "Tamo";
  
  const result = similarstrings(string1, string2);
  console.log(result);
  