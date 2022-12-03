// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';

console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

let str = ' dirty string   ';
console.log(str.trim());
//

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//

let stringToarray = (str7) => {
    return str7.split(' ');
}
let str7 = 'Ревуть воли як ясла повні';
let aRR = stringToarray(str7);
console.log(aRR);

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

arr = [10,8,-7,55,987,-1011,0,1050,0];
// let mapArr = arr.map(function (value) {
//     let newArr = {
//        return arr.split(' ');
//        let arrTo
//     }
// })

let newArr = arr.map(arr => arr.toString());
console.log(newArr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums = [11,21,3];

let sortNums = (nums, direction) => {
    if (direction === 'ascending'){
        return nums.sort((a,b)=>a-b)
    }else if (direction === 'descending'){
        return nums.sort((a,b)=>b-a)
    }
}
console.log(sortNums(nums, 'descending'))



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

    coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
 ];

console.log(coursesAndDurationArray.sort((p,g) => g.monthDuration-p.monthDuration));

console.log(coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5;
}));

//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// console.log(cards.filter(value => value==='ace' && color=>color==='black'));
//console.log(cards.filter(value => value==='6'));
// console.log(cards.filter(color => color === 'red'));
// console.log(cards.filter(cardSuit => cardSuit === 'diamond'));
// console.log(cards.filter(cardSuit => cardSuit === 'clubs' && value === '9'  ||  'ace' || 'jack' || 'queen' || 'king' || 'joker' ));

//const arrOfRed10 = cards.filter(card => card.value === 10 && card.color === 'red) - якщо через масив!!!


//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduce = cards.reduce((suit, card) => {
//     if (card.cardSuit === 'spade'){
//         suit.spades.push(card)
//     } else  if (card.cardSuit === 'diamond'){
//         suit.diamond.push(card)
//     }else  if (card.cardSuit === 'heart'){
//         suit.hearts.push(card)
//     }else{
//         suit.clubs.push(card)
//     }
//     return suit;
// }, {spades:[], diamonds:[], hearts:[], clubs:[]});
// console.log(reduce);