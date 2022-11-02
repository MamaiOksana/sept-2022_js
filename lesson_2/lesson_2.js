// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2 , 3, true, false, 'car', 'cat', 'audi', '100500', 'USA' ];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book_1= {
    title: 'Маруся Чурай',
    pageCount: 250,
    genre: 'Історичний роман'
}
console.log(book_1);

let book_2= {
    title: 'Триста поезій',
    pageCount: 350,
    genre: 'Збірка поезій'
}
console.log(book_2);

let book_3= {
    title: 'Кобзар',
    pageCount: 300,
    genre: 'Збірка поезій'
}
console.log(book_3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book_4= {
    title: 'Маруся Чурай',
    pageCount: 250,
    genre: 'Історичний роман',
    authors: {name:'Ліна Костенко',
              age: 93}
}
console.log(book_4);

let book_5= {
    title: 'Триста поезій',
    pageCount: 350,
    genre: 'Збірка поезій',
    authors: {name:'Ліна Костенко',
              age: 93}
}
console.log(book_5);

let book_6= {
    title: 'Кобзар',
    pageCount: 300,
    genre: 'Збірка поезій',
    authors: {name:'Тарас Шевченко',
              age: 'помер у віці 47р'}
}
console.log(book_6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [{name: 'Ira', username: 'Ira.gmail.com',password: 55889},
    {name: 'Max', username:'max.gmail.com',password: 455545},
    {name: 'Oksana', username: 'Oksana.gmail.com',password: 88963},
    {name: 'Taras', username: 'Taras.gmail.com',password: 588426},
    {name: 'Vita', username: 'Vita.gmail.com',password: 5741236695},
    {name: 'Denus', username: 'Denus.gmail.com',password: 6321445},
    {name: 'Ivan', username: 'Ivan.gmail.com', password: 445589632},
    {name: 'Petro', username: 'Petro.gmail.com',password: 4488847444},
    {name: 'Mira', username: 'Mira.gmail.com',password: 1111111},
    {name: 'Vova', username: 'Vova.gmail.com',password: 2222222}];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);