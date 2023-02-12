const inputFind = document.querySelector(".text");
const formFind = document.querySelector("form");
const ulFind = document.querySelector("ul");
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
})