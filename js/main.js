//! Треугольник. Напишите цикл,  выводит такой треугольник: ялинка
//* #
//* ##
//* ###
//* ####
//* #####
//* ######
//* #######

// let a = "#";
// for (let x = 0; x < 8; x += 1) {
//   console.log(a);
//   a += "#";
// }

//! FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел,
//! нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так,
//!  чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
//* # # # #
//*  # # # #
//* # # # #
//*  # # # #
//* # # # #
//*  # # # #
//* # # # #
//*  # # # #

// let f = "Fizz";
// let b = "Buzz";
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(f + b);
//     continue;
//   }
//   console.log(i);
// }

//! Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
//! На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
// let value = "#";
// for (let i = 0; i < 8; i += 1) {
//   for (let y = 0; y < 3; y += 1) {
//     value += " #";
//   }
//   console.log(value);
//   if (i % 2 === 0) {
//     value = " #";
//   } else value = "#";
// }

// ! Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
// function min(a, b) {
//   let result = Math.min(a, b);
//   return result;
// }
// console.log(min(10, 100));

// ! перевірка на парн непарні
// function isEven(num) {
//   let result;
//   console.log((result = num % 2 ? "нечетное" : "четное"));
// }
// isEven(-2);

//! задача з автоперевірки 2й модуль
// function findLongestWord(string) {
//   const arr = string.split(" ");
//   let result;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[0].length < arr[i].length) {
//       arr.unshift(arr[i]);
//     }
//   }

//   return arr[0];
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//! У грі в гольф кожна лунка має par, що відповідає середній кількості ударів (strokes), які повинен зробити гравець,
//! щоб забити м’яч у лунку та завершити гру. Існують різні псевдоніми залежно від того, де знаходяться ваші удари (strokes)
//!  відповідно до par.
//! Вашій функції буде передано аргументи par та strokes. Поверніть правильний рядок відповідно до цієї таблиці, в якій перелічено
//! удари за пріоритетом зверху (найвищий) донизу (найнижчий):

//* Удари	      Повернений рядок
//*   1	            "Hole-in-one!"
//*   <= par - 2	  "Eagle"
//*   par - 1	     "Birdie"
//*   par	           "Par"
//*   par + 1	      "Bogey"
//*   par + 2	  "Double Bogey"
//*   >= par + 3	 "Go Home!"
// par та strokes завжди будуть додатними числами. Ми додали масив усіх імен для вашої зручності.

// let count = 0;
// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count += 1;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count -= 1;
//       break;
//   }

//   if (count === 0) {
//     return count + " Hold";
//   } else if (count < 0) {
//     return count + " Hold";
//   } else {
//     return count + " Bet";
//   }
// }

// console.log(cc(10));
// console.log(cc("J"));
// console.log(cc("Q"));
// console.log(cc("K"));
// console.log(cc("A"));

//! задача з автоперевірки 2й модуль
// function checkStorage(available, ordered) {

//   return ordered > available
//     ? "Not enough goods in stock!"
//     : "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(5, 4));
// function sum(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return sum(arr, n - 1) * arr[n - 1];
//   }
// }
// console.log(sum([1], 0));
//! №2

//* Дано число. Выведите в консоль последнюю цифру этого числа.
// const num = 16687;
// const result = num.toString();
// console.log(result[result.length - 1]);

//! №3

//* Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// const num = 7675675;
// const result = num.toString();
// console.log(Number(result[0]) + Number(result[result.length - 1]));

//! №4

//* Дано число. Выведите количество цифр в этом числе.
// const number = 12873487;
// const result = number.toString();
// console.log(result.length);

// const num1 = 95;
// const num2 = 96;

// const str1 = `${num1}`;
// const str2 = `${num2}`;

// const result = str1[0] === str2[0] ? "сoвпадают" : "не сoвпадают";
// console.log(result);
//! Виведіть в консоль за допомогою циклів таке
// let row = "";
// for (let i = 0; i < 10; i += 1) {
//   for (let j = 0; j < 10; j += 1) {
//     if (j === i || j + i == 9 || j === 0 || i == 0 || j === 9 || i === 9) {
//       row += "#";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
//   row = "";
// }

//! Дано 2 масиви [1, 5, 7] та [2, 4, 5, 7, 9]. Виведи масив  з числами окрім тих, що є однаковими в обох масивах
//* 1 варіант
// function getCommonArrays(array1, array2) {
//   let arr = [];
//   for (const element of array1) {
//     if (!array2.includes(element)) {
//       arr.push(element);
//     }
//   }
//   for (const element of array2) {
//     if (!array1.includes(element)) {
//       arr.push(element);
//     }
//   }
//   return arr;
// }
// console.log(getCommonArrays([1, 5, 7], [2, 4, 5, 7, 9]));

//* 2 варіант працюж не вірно, але цікаве рішення
// варіант задачі, коли повертається один масив зі значеннями, які є унікальними
// function getUnique(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }
//  console.log(getUnique([1, 5, 7], [2, 4, 5, 7, 9]));
// console.log(getUnique([1, 5, 7, 3, 6], [2, 4, 5, 7, 9]));

//* 3 варіант

//  варіант задачі, коли повертається два масиви зі значеннями, які є унікальними для обох
// function getUniqueArrays(arr1, arr2) {
//   const arr1Copy = [...arr1];
//   const arr2Copy = [...arr2];
//   const result = [];
//   const checkCallback = (checkArr, checkValue, pushArr) =>
//     !checkArr.includes(checkValue) && pushArr.push(checkValue);
//   arr1Copy.forEach((el) => checkCallback(arr2Copy, el, result));
//   arr2Copy.forEach((el) => checkCallback(arr1Copy, el, result));
//   return result;
// }
// console.log(getUniqueArrays([1, 5, 7], [2, 4, 5, 7, 9])); //[[1], 2, 4, 9]

//* 4 варіант
// function getCommonArrays(array1, array2) {
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       array2.splice(array2.indexOf(element), 1);
//     } else {
//       array2.unshift(element);
//     }
//   }
//   return array2;
// }
// console.log(getCommonArrays([1, 5, 7], [2, 4, 5, 7, 9]));

/*
 * Написати фразу за допомогою конкатенації та шаблонних рядків
 * "Hello, my name is [name], I'm [age] years old and I like [hobby]", де квадратних дужках - змінні вставлені в рядок
 */

// const name = "Dan";
// const age = 35;
// const hobby = "swimming";
// const message = `Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}`;
// console.log(message);
// const message2 =
//   "Hello, my name is " +
//   name +
//   ", I'm " +
//   age +
//   " years old and I like " +
//   hobby;
// console.log(message2);

// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
// const word = "Педаль";
// if (word[word.length - 1] === "ь") {
//   console.log(word[word.length - 2]);
// }

//! дз 2 . 9

// function getExtremeElements(array) {
//     return [array[0], array[array.length-1]];
//    // Change code above this line
//  }
//  console.log(getExtremeElements([1, 2, 3, 4, 5]))

//! дз 2 . 10

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);

//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
//! дз 2 . 10 var2
// function splitMessage(message, delimiter) {
//   // Change code below this line

//   // Change code above this line
//   return message.split(delimiter);
// }
// console.log(splitMessage("Mango hurries to the train", " "));
//! дз 2 . 11
// function calculateEngravingPrice(message, pricePerWord) {
//   let result = message.split(` `);
//    return result = result.length * pricePerWord;
//   }
//! дз 2 . 11 var 2
// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(` `).length * pricePerWord;
// }
// console.log(calculateEngravingPrice("Mango hurries to the train", 10));
//! дз 2 . 12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);

//   return string;
// }
//! дз 2 . 13
// function slugify(title) {
//   let slug = title.toLowerCase().split(" ");
//   slug = slug.join("-");

//   return slug;
// }
// console.log(slugify("Arrays for begginers"));

//! дз 2 . 13 var2

// function slugify(title) {

//   return title.toLowerCase().split(" ").join("-");
// }
// console.log(slugify("Mango hurries to the train"));

//! дз 2 . 14

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);
//! дз 2 . 16

// function makeArray(firstArray, secondArray, maxLength) {
//   return firstArray.concat(secondArray).slice(0, maxLength);
//   // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//! дз 2 . 18
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(7));
//! дз 2 . 19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//! дз 2 . 22
// function coo(array) {
//   let sum = 0;
//   array.forEach((i) => (sum += i));
//   return sum;
// }
// console.log(coo([2, 4]));
//! дз 2 . 2
// function calculateTotalPrice(order) {
//   let total = 0;
//   order.forEach((i) => (total += i));

//   return total;
// }
// ! дз 2 21.
// function findLongestWord(string) {
//   let words = string.split(" ");
//     for(let i = 0; i < words.length; i += 1) {
//       if (words[0].length < words[i].length) {
//         words.unshift(words[i])
//       }
//     }

//   return words[0]

// ! дз 2 21. var 2
// function findLongestWord(string) {
//   let words = string.split(" ");
//   const sorted = words.sort((a, b) => a.length - b.length);
//   return sorted[sorted.length - 1];
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// ! дз 2 22. var 2
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (; min <= max; min += 1) {
//     numbers.push(min);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// ! дз 2 23

// function filterArray(numbers, value) {
//   let newArrey = []
// for( const number of numbers) {
//   if (number > value ) {
//     newArrey.push(number)
//   }
// }
// return newArrey;

//   // Change code above this line
// }
// ! дз 2 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }
