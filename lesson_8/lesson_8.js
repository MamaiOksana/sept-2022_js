// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)

//не знаю як правильно "наповнити" тому робила 3ма варіантами))

// let user1 = new User(1, 'olha', 'pupkina', 'gfndngk@.gmail', +380631759634);
// let user2 = new User (15, 'Захар', 'Кузьма','@jlhорощккgmail.com', 380631769877);
// let user3 = new User (6, 'Мирося', 'Факел','@jоооііпhlgmail.com', 380931725974);
// let user4 = new User (78, 'Оля', 'Вільха','@іііропhlgmail.com', 380931755974);
// let user5 = new User (18, 'Оксана', 'Китиця','@сссііропhlgmail.com', 380638965974);
// let user6 = new User (98, 'Михайло', 'Козій','@jlосіhlgmail.com', 38063885574);
// let user7 = new User (10, 'Іван', 'Смотрик','@jlhсісіоgmail.com', 380631639875);
// let user8 = new User (21, 'Макс', 'Голик','@jlhоропhlgmail.com', 380631725974);
// let user9 = new User (44, 'Марко', 'Коралик','@hоддорпlgmail.com', 380631728874);
// let user10 = new User (12, 'Коля', 'Дідик', '@jlhjlghlgmail.com', 380694444448);
//
// let arr = [user1,user2,user3,user4,user5,user6,user7,user8,user9, user10];
// console.log(arr);

// let arr2 = [];
// arr2.push(user1,user2,user3,user4,user5,user6,user7,user8,user9, user10);

let userArray = [
    new User (12, 'Коля', 'Дідик', '@jlhjlghlgmail.com', 380694444448),
    new User (21, 'Макс', 'Голик','@jlhоропhlgmail.com', 380631725974),
    new User (36, 'Марія', 'Полик','@jраоаhоропhlgmail.com', 380636925974),
    new User (44, 'Марко', 'Коралик','@hоддорпlgmail.com', 380631728874),
    new User (15, 'Захар', 'Кузьма','@jlhорощккgmail.com', 380631769877),
    new User (6, 'Мирося', 'Факел','@jоооііпhlgmail.com', 380931725974),
    new User (78, 'Оля', 'Вільха','@іііропhlgmail.com', 380931755974),
    new User (18, 'Оксана', 'Китиця','@сссііропhlgmail.com', 380638965974),
    new User (98, 'Михайло', 'Козій','@jlосіhlgmail.com', 38063885574),
    new User (10, 'Іван', 'Смотрик','@jlhсісіоgmail.com', 380631639875)
]

console.log(userArray);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(userArray.filter(value => { return value.id % 2 === 0}));


//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(userArray.sort((a,b) => a.id - b.id));
//


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }}


// створити пустий масив, наповнити його 10 об'єктами Client

let clientArr = [
    new Client (12, 'Коля', 'Дідик', '@jlhjlghlgmail.com', 380694444448, ['мило','шампунь','паста']),
    new Client (21, 'Макс', 'Голик','@jlhоропhlgmail.com', 380631725974, ['порошок']),
    new Client (36, 'Марія', 'Полик','@jраоаhоропhlgmail.com', 380636925974, ['риба','хліб']),
    new Client (44, 'Марко', 'Коралик','@hоддорпlgmail.com', 380631728874, ['книга','ручка','олівець','зошит']),
    new Client (15, 'Захар', 'Кузьма','@jlhорощккgmail.com', 380631769877, ['сир','масло']),
    new Client (6, 'Мирося', 'Факел','@jоооііпhlgmail.com', 380931725974, ['яйця']),
    new Client (78, 'Оля', 'Вільха','@іііропhlgmail.com', 380931755974, ['вода','журнал']),
    new Client (18, 'Оксана', 'Китиця','@сссііропhlgmail.com', 380638965974, ['кабель']),
    new Client (98, 'Михайло', 'Козій','@jlосіhlgmail.com', 38063885574, ['машина','колеса','пальне']),
    new Client (10, 'Іван', 'Смотрик','@jlhсісіоgmail.com', 380631639875, ['піджак'])
]
console.log(clientArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientArr.sort((j,k)=> j.order.length - k.order.length));

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car (model, producer, graduation, speed, volume) {
    this.model = model;
    this.producer = producer;
    this.graduation = graduation;
    this.speed = speed;
    this.volume = volume;

    this.drive= function () {
      console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }

    this.info = function () {
        for (let value in this) {
            if (typeof this[value] !== 'function'){
                console.log(`${value} - ${this[value]}`)
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
         this.speed = this.speed + newSpeed;
    }

    this.changeGraduation = function (newGraduation){
        this.graduation = newGraduation;
    }

    this.addDriver = function (driver) {
       this.driver = driver;
    }

}

let addCar = new Car('BMW', 'Germany', 2018, 250, 3);
console.log(addCar);

addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(80);
addCar.changeGraduation(2021);
addCar.addDriver({name: 'Ivan'});

console.log(addCar);


// Car.prototype.drive = function () {
//     return `їдемо зі швидкістю ${this.speed} на годину`;
// }
// console.log(addCar.drive());


// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     return  this.speed = this.speed + newSpeed;
// }
// console.log(addCar.increaseMaxSpeed(50));



// Car.prototype.changeGraduation = function (newGraduation){
//     return this.graduation = newGraduation;
// }
// console.log(addCar.changeGraduation(2022));


// Car.prototype.addDriver = function (driver) {
//     return this.driver = driver;
// }
// console.log(addCar.addDriver('Peter'));



//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

class Car2 {
    constructor(model, producer, graduation, speed, volume) {
        this.model = model;
        this.producer = producer;
        this.graduation = graduation;
        this.speed = speed;
        this.volume = volume;
    }


    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }

    info() {
        for (let value in this) {
            if (typeof this[value] !== 'function') {
                console.log(`${value} - ${this[value]}`)
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.speed = this.speed + newSpeed;
    }

    changeGraduation(newGraduation) {
        this.graduation = newGraduation;
    }

    addDriver(driver) {
      this.driver = driver
    }

}
//console.log(addCar2.drive());

//     drive(){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     info (){
//         for (let value in this) {
//             console.log(`${value} - ${this[value]}`)
//         }
//     }
//     newSpeed (speed) {
//         this.speed = this.speed + speed;
//     }
//     changeGraduation (newGraduation) {
//         this.graduation = newGraduation;
//     };
//     addDriver (driver){
//         this.driver = driver;
//     }
// }
 let addCar1 = new Car2('BMW', 'Germany', 2018, 250, 3);
 console.log(addCar1);
 addCar1.drive();
 addCar1.info();
 addCar1.increaseMaxSpeed(40);
addCar1.changeGraduation(2020);
addCar1.addDriver('Pavlo');
 console.log(addCar1);
//
//



//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella (name, age, sizeLegs) {
    this.name = name;
    this.age = age;
    this.sizeLegs = sizeLegs;
}

// let cinderellaArray = [
//     new Cinderella('Марія', 25, 39),
//     new Cinderella('Оля', 27, 36),
//     new Cinderella('Женя', 24, 38),
//     new Cinderella('Олена', 20, 35),
//     new Cinderella('Ніна', 21, 37),
//     new Cinderella('Діана', 29, 39),
//     new Cinderella('Зоряна', 28, 38),
//     new Cinderella('Оксана', 27, 36),
//     new Cinderella('Маргарита', 26, 37),
//     new Cinderella('Марго', 18, 39),
// ];
// console.log(cinderellaArray);


let cinderella1 = new Cinderella('Марія', 25, 39);
let cinderella2 = new Cinderella('Оля', 27, 36);
let cinderella3 =  new Cinderella('Женя', 24, 38);
let cinderella4 =  new Cinderella('Олена', 20, 35);
let cinderella5 =  new Cinderella('Ніна', 21, 37);
let cinderella6 = new Cinderella('Діана', 29, 39);
let cinderella7 =  new Cinderella('Зоряна', 28, 38);
let cinderella8 =  new Cinderella('Оксана', 27, 36);
let cinderella9 =  new Cinderella('Маргарита', 26, 37);
let cinderella10 =  new Cinderella('Марго', 18, 39);

let cinderellaArray = [];
cinderellaArray.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10);
console.log(cinderellaArray);


//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
}
let prince = new Prince('Ivan', 30, 35);
console.log(prince);


//За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let couple = (prince, cinderellaArray) => {
    for (const item of cinderellaArray) {
        if (item.sizeLegs === prince.shoes) {
            return `new girl ${item.name} for prince`
        }
    }
};
console.log(couple(prince,cinderellaArray));


//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let newGirl = cinderellaArray.find(item => item.sizeLegs === prince.shoes);
console.log(newGirl);
