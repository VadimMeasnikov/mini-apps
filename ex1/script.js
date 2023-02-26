//Задание 1
// Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
//1)
let object = { name: 'Иван' };
let safe = JSON.stringify(object);
let parsing = JSON.parse(safe);
console.log(object);
console.log(safe);
console.log(parsing);

//2)
// Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

let user = { name: 'ghyt' };
localStorage.user = JSON.stringify(user);
let newUser = JSON.parse(localStorage.user);
console.log(user);
console.log(newUser);

//Задание 2
// 1) Добавить в таск-мееджер кнопку, которая помечает все задачи как сделанные.
// - Добавить тег button в html код и повесить на него обработчик события click
// - В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
// - В цикле или с помощью forEach обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';
let tasks = [];
const inputFind = document.querySelector(".text");
const formFind = document.querySelector("form");
const ulFind = document.querySelector("ul");
const button = document.querySelector('.buttonReady');
if(localStorage.tasks){
    tasks = JSON.parse(localStorage.tasks);
    for( let item of tasks){
        let li = document.createElement('li');
        li.innerText = item;
        let ul = document.querySelector('ul');
        ul.appendChild(li)
        let checkBox = document.createElement('input');
            checkBox.type = "checkbox";
            let closeButton = document.createElement('button');
            closeButton.innerText = 'X'
            closeButton.style.marginLeft = '30px';
            closeButton.className = 'closeButton';
            li.prepend(checkBox);
            li.append(closeButton);
            ulFind.append(li);
    }
}


formFind.addEventListener('submit', (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    console.log(checkBox);
    checkBox.style.marginRight = '30px';
    let closeButton = document.createElement('button');
    closeButton.innerText = 'X'
    closeButton.style.marginLeft = '30px';
    closeButton.className = 'closeButton';
    li.innerText = inputFind.value;
    //добавление задачи в localStorage
    tasks.push(inputFind.value);
    localStorage.tasks = JSON.stringify(tasks);
    
    li.prepend(checkBox);
    li.append(closeButton);
    ulFind.append(li);
    inputFind.value = "";
    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        li.remove();
    })
    checkBox.addEventListener('click', () => {
        if (checkBox.checked) {
            ulFind.append(li)
            li.style.textDecoration = 'line-through';
        } else {
            ulFind.prepend(li);
            li.style.textDecoration = 'none'
        }
    })
    let liCheck = document.querySelectorAll('li');
    liCheck.forEach((item) => {
        checkBox.addEventListener('click', () => {
            if (checkBox.checked) {
                ulFind.append(li)
                li.style.textDecoration = 'line-through';
            } else {
                ulFind.prepend(li);
                li.style.textDecoration = 'none'
            }
        })
    })
    button.addEventListener('click', (event) => {
        document.querySelectorAll('li').forEach((item) => {
            item.style.textDecoration = 'line-through';
        })
    })
})

//2
