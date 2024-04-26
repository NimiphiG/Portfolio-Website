
// console.log('conected');

window.onload = setup();
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var fullImgBoxP = document.getElementById("fullImgBox-p");
var fullImgP = document.getElementById("fullImg-p");
var PaintingTitle = document.getElementById('paintingTitle');
var refUse = document.getElementById('refUse');
const path = localStorage.getItem('userRef');
let refrence = document.getElementById('refLinks')
let painting = false;
console.log(path);

const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navMenu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


if (path != null) {
    openFullImgP(path);
    console.log('open use');
    localStorage.clear();
}

function openFullImg(pic) {
// localStorage.clear();
console.log('clear')

    if (pic === 'http://127.0.0.1:5500/images/lifeDrawings/lifeDrawing%20(23).jpg'|| pic === 'http://127.0.0.1:5500/images/lifeDrawings/lifeDrawing%20(37).jpg' ) {
         painting = true
        refrence.setAttribute('href', "/paintings.html");
        refrence.innerHTML = 'This drawing was used in the making of a painting. click to go to paintings';
        refUse.src = 'http://127.0.0.1:5500/images/paintings/painting%20(1).jpg';
        console.log('the claw');
        refUse.style.display = 'flex';
    }

  if (pic === 'http://127.0.0.1:5500/images/lifeDrawings/lifeDrawing%20(5).jpg' || pic === 'http://127.0.0.1:5500/images/lifeDrawings/lifeDrawing%20(12).jpg'|| pic === 'http://127.0.0.1:5500/images/lifeDrawings/lifeDrawing%20(40).jpg') {
         painting = true
        refrence.setAttribute('href', "/paintings.html");
        refrence.innerHTML = 'This drawing was used in the making of a painting. click to go to paintings';
        refUse.src = 'http://127.0.0.1:5500/images/paintings/painting%20(2).jpg';
        refUse.style.display = 'flex';
    }
 if (pic === 'http://127.0.0.1:5500/images/lifeDrawings/lifeDrawing%20(55).jpg') {
         painting = true
        refrence.setAttribute('href', "/paintings.html");
        refrence.innerHTML = 'This drawing was used in the making of a painting. click to go to paintings';
        refUse.src = 'http://127.0.0.1:5500/images/paintings/painting%20(3).jpg';
        refUse.style.display = 'flex';
    }

    if(painting ===false ){
        refUse.style.display = 'none';
        refrence.innerHTML = "'This Drawing Doesn't Feature In Any Paintings Yet'"
    }
    
    
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    console.log('open');
    console.log(pic);
    localStorage.setItem('userRef', refUse.src)
}

function openFullImgP(pic) {
    fullImgBoxP.style.display = "flex";
    fullImgP.src = pic;
    console.log('open');
    console.log(pic);
    localStorage.clear();

    if (pic === 'http://127.0.0.1:5500/images/paintings/painting%20(1).jpg'  ) {
        PaintingTitle.innerHTML = "'The Claw'"
    }
    if (pic === 'http://127.0.0.1:5500/images/paintings/painting%20(2).jpg') {
        PaintingTitle.innerHTML = "'Hubba Bubba'"
    }
    if (pic === 'http://127.0.0.1:5500/images/paintings/painting%20(3).jpg') {
        PaintingTitle.innerHTML = "'Grapple'"
    }
}

function closeFullImg() {
    fullImgBox.style.display = "none";
    localStorage.clear();
    painting = false
}
function closeFullImgP() {
    fullImgBoxP.style.display = "none";
}



function setup() {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]
    let page = document.getElementById('pageCounter')

    if (page.className === 'home') { }
    if (page.className === 'drawings') {

        for (i = 0; i < 61; i++) {

            let rand = Math.floor(Math.random() * (61 - i));

            let img = document.createElement('img');
            img.src = 'images/lifeDrawings/lifeDrawing (' + list[rand] + ').jpg';
            img.id = 'clickable' + i;
            img.setAttribute('onclick', 'openFullImg(this.src)');

            document.getElementById('img-gallery').appendChild(img);


            list.splice(rand, 1);
            // console.log(rand);

        }
    }
    if (page.className === 'paintings') {

        for (i = 0; i < 3; i++) {

            let rand = Math.floor(Math.random() * (3 - i));

            let img = document.createElement('img');
            img.src = 'images/paintings/painting (' + list[rand] + ').jpg';
            img.id = 'clickable' + i;
            img.setAttribute('onclick', 'openFullImgP(this.src)');
            document.getElementById('img-gallery').appendChild(img);
            list.splice(rand, 1);
        }

    }

}
