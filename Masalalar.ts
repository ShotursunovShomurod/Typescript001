// Masala 1
// {
//     let name: string = "John Doe";
// let age: number = 30;
// let isStudent: boolean = true;
// let hobbies: string[] = ["Reading", "Gaming", "Coding"];

// function greet(person: string): string {
//   return `Hello, ${person}`;
// }

// function calculateSum(a: number, b: number): number {
//   return a + b;
// }

// function isAdult(personAge: number): boolean {
//   return personAge >= 18;
// }

// }


// Masala 2
// {
//     function countPositiveNumbers(arr: number[]): number {
//         let count = 0;
//         for (let num of arr) {
//           if (num > 0) {
//             count++;
//           }
//         }
//         return count;
//       }
      
// }


// Masala 3
// {
//      // void hech narsa qaytarmaydi
//     function fizzBuzz(n: number): void {
//         for (let i = 1; i <= n; i++) {
//           if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//           } else if (i % 3 === 0) {
//             console.log("Fizz");
//           } else if (i % 5 === 0) {
//             console.log("Buzz");
//           } else {
//             console.log(i);
//           }
//         }
//       }
      
// }


// Masala 4
// {
//     function sumArray(arr: number[]): number {
//         let sum = 0;
//         for (let num of arr) {
//           sum += num;
//         }
//         return sum;
//       }
      
// }


// Masala 5
// {
// // /\s+/ Nima qiladi?
// // \s: Bu whitespace (bo'sh joy) belgilarini ifodalaydi. Whitespace bu bo'sh joylar, yangi satr (newlines), tabulyatsiya kabi belgilar bo'lishi mumkin.
// // +: Bu esa "kamida bitta" belgini qidiradi. Ya'ni, kamida bitta yoki undan ortiq bo'sh joylar ketma-ket bo'lsa, ularni topadi.

// {
//     function countWords(str: string): number {
//         const words = str.trim().split(/\s+/); 
//         return words.length;
//       }      
// }
// }


// Masala 6
// {
//     function findMax(arr: number[]): number {
//         let max = arr[0];
//         for (let num of arr) {
//           if (num > max) {
//             max = num;
//           }
//         }
//         return max;
//       }
      
// }


// Masala 7
// {
//     function findMin(arr: number[]): number {
//         let min = arr[0];
//         for (let num of arr) {
//           if (num < min) {
//             min = num;
//           }
//         }
//         return min;
//       }
      
// }


// Masala 8
// {
//     function contains(arr: number[], target: number): boolean {
//         return arr.includes(target);
//       }
      
// }


// Masala 9
// {
//     function reverseArray(arr: number[]): number[] { 
//         return arr.reverse();
//       }      
// }


// Masala 10
// {
//     function capitalizeWords(str: string): string {
//         return str
//           .split(' ')
//           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//           .join(' '); 
//       }
      
// }


// Masala 11
// {
//     function sumArray(arr: number[]): number {
//         let sum = 0;
//         for (let num of arr) {
//           sum += num;
//         }
//         return sum;
//       }
      
//       function average(arr: number[]): number {
//         let sum = sumArray(arr);
//         return sum / arr.length;
//       }      
      
// }


// Masala 12
// {
//     function filterUnique(arr: (number | string | boolean)[]): (number | string | boolean)[] {
//         let uniqueArray: (number | string | boolean)[] = [];
        
//         arr.forEach(item => {
//           if (!uniqueArray.includes(item)) {
//             uniqueArray.push(item);
//           }
//         });
        
//         return uniqueArray;
//       }      
// }