// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей

// function Calculator() {
//   this.num1 = 0;
//   this.num2 = 0;

//   this.read = function () {
//     this.num1 = parseInt(prompt('Введіть перше число:', ''));
//     this.num2 = parseInt(prompt('Введіть друге число:', ''));
//   };

//   this.sum = function () {
//     return this.num1 + this.num2;
//   };

//   this.mult = function () {
//     return this.num1 * this.num2;
//   };
// }

// const calculator = new Calculator();

// calculator.read();
// alert(`Результат додавання: ${calculator.sum()}`);
// alert(`Результат множення: ${calculator.mult()}`);
