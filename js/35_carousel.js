var slides = document.getElementsByClassName("slide");
var inds = document.getElementsByClassName("indicator");
var container = document.getElementsByClassName("carousel-container")[0];
var prevbtn = document.getElementsByClassName("prev")[0];
var nextbtn = document.getElementsByClassName("next")[0];

let currentIndex = 0;
slides[currentIndex].style.display = "block";
inds[currentIndex].classList.add("currentind");

console.log("slides and index", slides, currentIndex, slides[currentIndex]);

function currentHide() {

    slides[currentIndex].style.display = "none";
    inds[currentIndex].classList.remove("currentind");
}

function changeImg() {
    slides[currentIndex].style.display = "block";
    inds[currentIndex].classList.add("currentind");

};

prevbtn.onclick = function () {
    let currentImgCoords = slides[currentIndex].getBoundingClientRect()
    let translateX = currentImgCoords.width;

    currentHide();
    if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
    } else {
        currentIndex = slides.length - 1;
    }
    changeImg();

    slides[currentIndex].style.transform = `translate(${-translateX}px , 0px)`;

    let translatedImgCoords = slides[currentIndex].getBoundingClientRect()
    console.log("transformed", slides[currentIndex].style.transform, translatedImgCoords.left);

    slides[currentIndex].style.transition = "transform 0.5s linear";
    slides[currentIndex].style.transform = "translate(0,0)";

}

nextbtn.onclick = function () {
    let currentImgCoords = slides[currentIndex].getBoundingClientRect()
    let translateX = currentImgCoords.width;

    currentHide();

    if (currentIndex == slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }

    changeImg();

    slides[currentIndex].style.transform = `translate(${translateX}px , 0px)`;

    let translatedImgCoords = slides[currentIndex].getBoundingClientRect()
    console.log("transformed", slides[currentIndex].style.transform, translatedImgCoords.left);

    slides[currentIndex].style.transition = "transform 0.5s linear";
    slides[currentIndex].style.transform = "translate(0,0)";

}
