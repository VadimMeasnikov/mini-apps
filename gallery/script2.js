let cont = document.querySelector('.container');
let img = document.querySelectorAll('img');
console.log(img)

if(localStorage.background){
    document.body.style.background = `url(${localStorage.background})`;
} else{
    // document.body.style.background = 'red';
    document.body.style.background = `url(${img[0].src})`;

}

img.forEach((item) => {
    item.addEventListener('click', (event) => {
         console.log(event);
       let background =  event.target.src;
       document.body.style.background = `url(${background})`;
       localStorage.background = background;
    }) 
})
