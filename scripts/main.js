// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// document.querySelector('html').onclick = function() {
//     alert('STOP TOUCHING ME!');
// }

let clickImg = document.querySelector('img');

clickImg.onclick = function() {
    let srcImg = clickImg.getAttribute('src');
    if (srcImg === 'images/Hussy.png') {
        clickImg.setAttribute('src', 'images/Hussy-flip.png')
    } else {
        clickImg.setAttribute('src', 'images/Hussy.png')
    }
}

let button = document.querySelector('button');
let heading = document.querySelector('h1');

function setUserName() {
    let Name = prompt('Please enter your Name');
    if (!Name || Name === null) {
        setUserName();
    } else {
        localStorage.setItem('name', Name);
        heading.textContent = 'Hey ' + Name + '!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    heading.textContent = 'Hey ' + storedName + '!';
}

button.onclick = function () {
    setUserName();
}