let openButton = document.querySelector('.openButton');
let menu = document.querySelector('.menu')
let openMenu = (button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        menu.className = "menuOpen";
        button.className = 'closeButton';
        button.innerText = 'X';
        closeButton = document.querySelector('.closeButton');
        closeMenu(closeButton);
    })
}
let closeMenu = (button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        menu.className = "menu";
        button.className = 'openButton';
        button.innerText = 'Y'
        openMenu(openButton);
    })
}
openMenu(openButton);


