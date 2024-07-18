var lens = document.getElementsByClassName("modal-btn")[0];
var lens2 = document.getElementsByClassName("modal-btn2")[0];
var lens3 = document.getElementsByClassName("modal-btn3")[0];
var modal = document.getElementsByClassName("modal-container")[0];
var boximg = document.getElementsByClassName("boximage")[0];
var boximg2 = document.getElementsByClassName("boximage2")[0];
var boximg3 = document.getElementsByClassName("boximage3")[0];


lens.onclick = function () {
    var boximgcoords1 = boximg.getBoundingClientRect();
    var translateX1 = 670.664 - boximgcoords1.left;
    var translateY1 = 10 - boximgcoords1.top;

    boximg.style.transition = "transform 2s ease";
    boximg.style.transform = `translate(${translateX1}px, ${translateY1}px) scale(1.5)`;
    boximg.style.border = "1px solid grey";
    boximg.style.boxShadow = "0 25px 80px -12px rgba(0,0,0,0.75)";
    boximg.style.position = "relative";
    boximg.style.zIndex = 10;

    console.log("original to big:", boximg.style.transform);

};

boximg.onclick = function () {
    boximg.style.transition = "transform 2s ease";
    boximg.style.transform = "translate(0,0) scale(1)";

    console.log(boximg.style.transform);

    boximg.style.border = "none";
    boximg.style.boxShadow = "none";
    setTimeout(function () {
        boximg.style.zIndex = 0;
    }, 2000)
};

lens2.onclick = function () {
    var boximgcoords2 = boximg2.getBoundingClientRect();
    var translateX2 = 670.664 - boximgcoords2.left;
    var translateY2 = 10 - boximgcoords2.top;

    boximg2.style.transition = "transform 2s ease";
    boximg2.style.transform = `translate(${translateX2}px, ${translateY2}px) scale(1.5)`;
    boximg2.style.position = "relative";
    boximg2.style.zIndex = 10;
    boximg2.style.border = "1px solid grey"
    setTimeout(function () {
        modal.style.display = "block"
        modal.style.zIndex = 5;
    }, 2000)
    console.log("img2 transform", boximg2.style.transform)
};

boximg2.onclick = function () {
    boximg2.style.transition = "transform 2s ease";
    boximg2.style.transform = "translate(0,0) scale(1)";
    console.log(boximg.style.transform);
    setTimeout(function () {
        boximg2.style.zIndex = 0;
        boximg2.style.border = "none";
        modal.style.display = "none";
    }, 2000)
};

lens3.onclick = (function () {
    var boximgcoords3 = boximg3.getBoundingClientRect();
    var translateX3 = 680.664 - boximgcoords3.left;
    var translateY3 = 10 - boximgcoords3.top;

    boximg3.style.transition = "transform 2s ease";
    boximg3.style.transform = `translate(${translateX3}px, ${translateY3}px) scale(1.5)`;
    boximg3.style.position = "relative";
    boximg3.style.zIndex = 10;

    setTimeout(function () {
        modal.style.display = "block";
        modal.style.zIndex = 5;
    }, 2000);
});

boximg3.onclick = function () {
    boximg3.style.transition = "transform 2s ease";
    boximg3.style.transform = `translate(0,0) scale(1)`;
    setTimeout(function () {
        modal.style.display = "none";
        boximg3.style.zIndex = 0;
    })
}

