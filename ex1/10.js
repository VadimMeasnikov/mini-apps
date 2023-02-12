let buttonOpen = document.querySelector(".call")
let buttonClose = document.querySelector('.close')
let link = document.querySelectorAll(".link");
let popup = document.querySelector(".popup");
buttonOpen.addEventListener('click', (event) => {
   event.preventDefault();
   popup.className = 'open';
})
link.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        popup.className = 'open';
    })
})
buttonClose.addEventListener('click', (event) => {
    event.preventDefault();
    popup.className = 'popup'
})
