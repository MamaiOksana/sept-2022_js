// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        img : 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
for (let simpson of simpsons) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.classList.add('member');
    img.src = simpson.photo
    div.innerText = `name - ${simpson.name}; surname - ${simpson.surname}; age - ${simpson.age}; info - ${simpson.info}`;
    document.body.append(div, img);
}


//
//
// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql','mongodb', 'angular', 'aws', 'docker', 'git','java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css','js', 'mysql','mongodb','angular','aws', 'docker','python core','python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html','css','js','mysql', 'mongodb', 'react','angular','aws', 'docker','git', 'node.js', 'python', 'java']
        },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
//
for (let coursesArrayElement of coursesArray) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3')
    h3.innerText = `${coursesArrayElement.title}`;
    let monthDuration = document.createElement('div');
    monthDuration.innerText = `${coursesArrayElement.monthDuration}`;
    let hourDuration = document.createElement('div');
    hourDuration.innerText = `${coursesArrayElement.hourDuration}`;

    let modulesUl = document.createElement('ul');
    let modules = coursesArrayElement.modules
    for (let module of modules) {
        let modulesLi = document.createElement('li');
        modulesLi.innerText = `${module}`
        modulesUl.append(modulesLi);
    }
div.append(h3, monthDuration, hourDuration, modulesUl);
    document.body.append(div);

}

//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//

let div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.style.background = 'red';
div.style.fontSize = '16px';
div.style.color = 'yellow';
div.innerText = 'hello!!! how are you???';

document.body.appendChild(div);
let div2 = div.cloneNode(true);
document.body.appendChild(div2);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menu = ['Main','Products','About us','Contacts'];

let ulElements = document.getElementsByClassName('menu');
let ulElement = ulElements[0];

for (let menuElement of menu) {
let li = document.createElement('li');
li.innerText = `${menuElement}`
ulElement.append(li);
}


//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
   let div = document.createElement('div');
   div.innerText = `${coursesAndDurationArrayElement.title} - ${coursesAndDurationArrayElement.monthDuration}`;
   document.body.append(div);
}



// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
//
for (let coursesAndDurationArray2Element of coursesAndDurationArray2) {
   let div = document.createElement('div');
   div.classList.add('item');
   let h1 = document.createElement('h1');
   h1.classList.add('heading');
   h1.innerText = `${coursesAndDurationArray2Element.title}`;
   let p = document.createElement('p');
   p.classList.add('description');
   p.innerText = `${coursesAndDurationArray2Element.monthDuration}`;
   div.append(h1, p);
   document.body.append(div);
}

//
// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
let text = document.getElementById('text')
let btn = document.getElementById('button')
btn.onclick = function () {
    text.style.display = 'none'
};

//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let input = document.getElementById('button2')
input.onclick = function (){
    let info = document.getElementById('info').value
    if (!info) {
        alert('Ви повинні ввести свій вік')
    }else if (info>=18){
        alert('Вітаємо, ваш вік дозволяє відвідати наш сайт')
    }else {
        alert('Вибачте, але ви ще замаленькі для нашого сайту')
    }
}


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let inputOne = document.createElement('input');
let inputTwo = document.createElement('input');
let inputThree = document.createElement('input');
let button2 = document.createElement('button');

button2.innerText = 'створити таблицю';
document.body.append(inputOne, inputTwo, inputThree, button2);
button2.addEventListener('click', function () {
    let line = inputOne.value;
    let column = inputTwo.value;
    let text = inputThree.value;
    function generationTable (line, column, text) {
        let table = document.createElement('table');
        let div = document.createElement('div')

        table.style.border = '2px solid yellow';
        div.append(table);
        document.body.append(div);

        for (let i = 0; i < line; i++) {
            let line =  document.createElement('tr');
            for (let j = 0; j < column; j++) {
                let column = document.createElement('td') ;
                column.style.border = '2px solid blue';
                column.innerText = `${text}`;
                table.append(line);
                line.append(column);
            }
        }
    }
    generationTable(line, column, text);

})