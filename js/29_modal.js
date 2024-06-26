var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var modalImage = document.getElementById("modalImage");
var captionText = document.getElementById("imageCaption");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");

var images = [
    { src: "img/city1.jpeg", caption: "City Image 1" },
    { src: "img/city2.jpeg", caption: "City Image 2" },
    { src: "img/city3.jpeg", caption: "City Image 3" },
    { src: "img/city-wallpaper-32.jpg", caption: "City Wallpaper" },
    { src: "img/city5.jpeg", caption: "City Image 5" }
];
var currentIndex = 0;
console.log("currentIndex:", currentIndex)

btn.onclick = function() {
    modal.style.display = "block";
    updateImage();
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

prevBtn.onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    } else {
        currentIndex = images.length - 1;
        updateImage();
    }
    console.log("prevBtn:", currentIndex)
}

nextBtn.onclick = function() {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
        updateImage();
    } else {
        currentIndex++;
        updateImage();
    }
    console.log("nextBtn:", currentIndex)
}

function updateImage() {
    modalImage.src = images[currentIndex].src;
    captionText.innerText = images[currentIndex].caption;
    // prevBtn.classList.toggle("", currentIndex === 0);
    // nextBtn.classList.toggle("", currentIndex === images.length - 1);

}
