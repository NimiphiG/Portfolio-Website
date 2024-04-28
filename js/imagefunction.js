
// console.log('conected');
//-------------------------global variables--------------------------//

window.onload = setup();
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var fullImgBoxP = document.getElementById("fullImgBox-p");
var fullImgP = document.getElementById("fullImg-p");
var paintingTitle = document.getElementById("paintingTitle");
var paintingInfo = document.getElementById('paintingInfo');
var refUse = document.getElementById('refUse');
const path = localStorage.getItem('userRef');
let refrence = document.getElementById('refLinks');
let painting = false;
var iframe = document.getElementById('fullIframe');
var iframeBox = document.getElementById('fullIframeBox');
console.log(path);

const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navMenu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


if (path != null) {
    openFullImgP(path);
    console.log('open use');
    localStorage.clear();
}

//------------------------- open and close full screen drawing image and reference function --------------------------//

function openFullImg(pic) {
    // localStorage.clear();
    console.log('clear')

    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/lifeDrawings/lifeDrawing%20(23).jpg' || pic === 'http://127.0.0.1:5500/Portfolio-Website/images/lifeDrawings/lifeDrawing%20(37).jpg') {
        painting = true
        refrence.setAttribute('href', "/Portfolio-Website/paintings.html");
        refrence.innerHTML = 'This drawing was used in the making of a painting. click to go to paintings';
        refUse.src = 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(5).jpg';
        console.log('the claw');
        refUse.style.display = 'flex';
    }
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/lifeDrawings/lifeDrawing%20(5).jpg' || pic === 'http://127.0.0.1:5500/Portfolio-Website/images/lifeDrawings/lifeDrawing%20(12).jpg' || pic === 'http://127.0.0.1:5500/Portfolio-Website/images/lifeDrawings/lifeDrawing%20(40).jpg') {
        painting = true
        refrence.setAttribute('href', "/Portfolio-Website/paintings.html");
        refrence.innerHTML = 'This drawing was used in the making of a painting. click to go to paintings';
        refUse.src = 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(4).jpg';
        refUse.style.display = 'flex';
    }
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/lifeDrawings/lifeDrawing%20(55).jpg') {
        painting = true
        refrence.setAttribute('href', "/Portfolio-Website/paintings.html");
        refrence.innerHTML = 'This drawing was used in the making of a painting. click to go to paintings';
        refUse.src = 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(3).jpg';
        refUse.style.display = 'flex';
    }
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/lifeDrawings/lifeDrawing%20(53).jpg') {
        painting = true
        refrence.setAttribute('href', "/Portfolio-Website/paintings.html");
        refrence.innerHTML = 'This drawing was used in the making of a painting. click to go to paintings';
        refUse.src = 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(1).jpg';
        refUse.style.display = 'flex';
    }
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/lifeDrawings/lifeDrawing%20(54).jpg' || pic === 'http://127.0.0.1:5500/Portfolio-Website/images/lifeDrawings/lifeDrawing%20(56).jpg') {
        painting = true
        refrence.setAttribute('href', "/Portfolio-Website/paintings.html");
        refrence.innerHTML = 'This drawing was used in the making of a painting. click to go to paintings';
        refUse.src = 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(2).jpg';
        refUse.style.display = 'flex';
    }

    if (painting === false) {
        refUse.style.display = 'none';
        refrence.innerHTML = "'This Drawing Doesn't Feature In Any Paintings Yet'"
    }


    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    console.log('open');
    console.log(pic);
    localStorage.setItem('userRef', refUse.src);
}
function closeFullImg() {
    fullImgBox.style.display = "none";
    localStorage.clear();
    painting = false;
}
//-------------------------open and close full screen painting image and title function --------------------------//

function openFullImgP(pic) {
    fullImgBoxP.style.display = "flex";
    fullImgP.src = pic;
    console.log('open');
    console.log(pic);
    localStorage.clear();

    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(0).jpg') {
        paintingTitle.innerHTML = "' RGB - Rattle Babble Grapple '";
        paintingInfo.src = "/Portfolio-Website/text/RGB.txt";

    };
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(1).jpg') {
        paintingTitle.innerHTML = "' RGB - Rattle '";
        paintingInfo.src = "/Portfolio-Website/text/Rattle.txt";
    }
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(2).jpg') {
        paintingTitle.innerHTML = "' RGB - Babble '";
        paintingInfo.src = "/Portfolio-Website/text/Babble.txt";
    };
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(3).jpg') {
        paintingTitle.innerHTML = "' RBG - Grapple '";
        paintingInfo.src = "/Portfolio-Website/text/Grapple.txt";
    };
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(4).jpg') {
        paintingTitle.innerHTML = "' Hubba Bubba '";
        paintingInfo.src = "/Portfolio-Website/text/HubbaBubba.txt";
    };
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/paintings/painting%20(5).jpg') {
        paintingTitle.innerHTML = "' The Claw '";
        paintingInfo.src = "/Portfolio-Website/text/TheClaw.txt";
    };
}

function closeFullImgP() {
    fullImgBoxP.style.display = "none";
}

//-------------------------open and close coding iframe --------------------------//


function openIframe(pic) {
    iframeBox.style.display = "flex";

    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/coding/code%20(1).jpg') {
       iframe.src = '/Algorithmic-Art-2/crochet.html'
    };
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/coding/code%20(2).jpg') {
        iframe.src = '/Algorithmic-Art-2/afformations.html'
    }
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/coding/code%20(3).jpg') {
        iframe.src = '/Algoritmic-Art-1/index.html'
    };
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/coding/code%20(4).jpg') {
        iframe.src = '/Algorithmic-Art-3/1nClassExamples/recursion2.html'
    };
    if (pic === 'http://127.0.0.1:5500/Portfolio-Website/images/coding/code%20(5).jpg') {
        iframe.src = '/Algorithmic-Art-3/1nClassExamples/recursion1.html'
    };
 
}

function closeIframe() {
    iframeBox.style.display = "none";
}

//-------------------------random gallery set up --------------------------//

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
        for (i = 0; i < 6; i++) {

            let img = document.createElement('img');
            img.src = 'images/paintings/painting (' + i + ').jpg';
            // img.id = 'clickable' + i;
            img.setAttribute('onclick', 'openFullImgP(this.src)');
            document.getElementById('img-gallery').appendChild(img);
        }



    }
    if (page.className === 'coding') {
        for (i = 1; i < 6; i++) {

            let img = document.createElement('img');
            img.src = 'images/coding/code (' + i + ').jpg';
            // img.id = 'clickable' + i;
            img.setAttribute('onclick', 'openIframe(this.src)');
            document.getElementById('img-gallery-c').appendChild(img);
        }
    }
}
// for (i = 0; i < 2; i++) {

//     let rand = Math.floor(Math.random() * (5 - i));

//     let img = document.createElement('img');
//     img.src = 'images/paintings/painting (' + list[rand] + ').jpg';
//     img.id = 'clickable' + i;
//     img.setAttribute('onclick', 'openFullImgP(this.src)');
//     document.getElementById('img-gallery').appendChild(img);
//     list.splice(rand, 1);
// }