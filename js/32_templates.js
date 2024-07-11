var lens = document.getElementsByClassName("modal-btn")[0];
var modal = document.getElementsByClassName("modal-container")[0];
var boximg = document.getElementsByClassName("boximage")[0];

lens.onclick = function() {
    modal.style.display = "block";
    boximg.style.opacity = 0;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        boximg.style.opacity = 1;
    }
}



