// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let greeting = 'hello';
console.log(greeting);

let site1 = 'owu';
console.log(site1);

let site2 = 'com';
console.log(site2);

let site3 = 'ua';
console.log('ua');

let num1 = 1;
console.log(num1);

let num2 = 10;
console.log(num2);

let num3 = -999;
console.log(num3);

let num4 = 123;
console.log(num4);

const Pi = 3.14;
console.log(Pi);

let num5 = 2.7;
console.log(num5);

let num6 = 16;
console.log(num6);

let bool1 = true;
console.log(bool1);

let bool2 = false;
console.log(bool2);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Mamai';
let middleName = 'Oksana';
let lastName = 'Iaroslavivna';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100;
    console.log(typeof a);

    let b = '100';
    console.log(typeof b);

    let c = true;
    console.log(typeof c);


// Додаткове
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Введіть своє імя');
console.log(name);
let fatherName = prompt('Введіть ваше по-батькові');
console.dir(fatherName);
let age = prompt('Введіть свій вік');
console.log(age);
let info = `${name} ${fatherName}, вам ${age} років`;
console.log(info);
