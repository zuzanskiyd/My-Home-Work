// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) { if (age > 18) {
// return true; } else {
// return confirm('Батьки дозволили?'); }
// }

// let age = prompt('Введіть ваш вік', '');

// function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?');
// }

// checkAge(age);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(25, 15));

// ---3---
// Перепишіть з використанням стрілкових функцій Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) { if (confirm(question)) yes();
// else no(); }
// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); }, function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };

// ask(
//   'Ви згодні?',
//   () => {
//     alert('Ви погодились.');
//   },
//   () => {
//     alert('Ви скасували виконання.');
//   },
// );
