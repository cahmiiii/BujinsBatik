// Javascript Command for scrolling features //

const carousel = document.querySelector(".review-carousel");
const arrowBtn = document.querySelector(".review-content i");

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.navbar-btn').addEventListener('click', function() {
        window.location.href = 'contactus.php';
    });
});
