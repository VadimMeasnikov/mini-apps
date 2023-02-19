let openButton = document.querySelector('.openButton')
let closeButton = document.querySelector('.closeButton')
let menu = document.querySelector('.menu');
let main = document.querySelector('main')
let cont = document.querySelector('.container')
openButton.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.add('menu-open');
    main.className = "main-open";
    cont.classList.add('container-open');
    openButton.className = "newOpenButton";
})
closeButton.addEventListener('click', (event) => {
    event.preventDefault()
    main.classList.remove('main-open');
    menu.className = "menu";
    openButton.className = "openButton"
})