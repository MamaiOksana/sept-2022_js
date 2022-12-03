// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sq(a,b) {
    let sqPr = a*b;
    return sqPr
}
console.log(sq(5, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sqC(r) {
    let s = 3.14 * r**2
    return s
}
console.log(sqC(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sqCylinder(h,r) {
    let sq = 2*3.14*r+h
    return sq
}

console.log(sqCylinder(5, 2));


// - створити функцію яка приймає масив та виводить кожен його елемент
function array(arr){
    for (let arrElement of arr) {
        console.log(arrElement)
    }
}

array([5, 9, 7]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function p(text) {
    document.write(`<p> ${text} </p>`)
}
p('hello');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(text) {
    document.write(`<ul><li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li></ul>`)
}
ul('hello new day');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ul2(text, counter) {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ul2('cat', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrNew(arr) {
    document.write(`<ul>`)
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
arrNew([5,9,'car', true])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function f(users) {
    for (let user of users) {
        document.write(`<div>${user.id}. ${user.name} - ${user.age}</div>`)
    }
}
f([{id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31}])

// - створити функцію яка повертає найменьше число з масиву

function f1(num) {
    let minNum = num [0];
    for (let i = 0; i < num.length; i++) {
       if (num[i]<minNum){
           minNum = num[i];
    }
    }return minNum
}

console.log(f1([15, 9, 16, 55]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sum(arr) {
    let i = 0;
    for (let arrElement of arr) {
        i = i + arrElement
    }
    return i
}

console.log(sum([5, 9, 1]));
