// Домашнє завдання
// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

// (1)
// function printNumbersInterval(from, to) {
//   let current = from;

//   let intervalId = setInterval(function () {
//     console.log(current);
//     if (current === to) {
//       clearInterval(intervalId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbersInterval(1, 5);

// // (2)
// function printNumbersTimeout(from, to) {
//   let current = from;

//   function print() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(print, 1000);
//     }
//     current++;
//   }

//   print();
// }

// printNumbersTimeout(1, 5);

// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// delay(3000).then(() => {
//   console.log('Виконалось через 3 секунди');
// });
