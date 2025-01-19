// Carousel Dragging Functionality (Desktop)
const carousel = document.querySelector(".review-carousel");

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX || e.touches[0].pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX;
  carousel.scrollLeft = startScrollLeft - (x - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

// Mouse Events
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// Touch Events (Mobile Swipe)
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("touchend", dragStop);

// Navbar Button Event
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".navbar-btn").addEventListener("click", function () {
    window.location.href = "contactus.php";
  });
});

// Add this to your existing script.js file
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.querySelector(".read-more-btn");
  const expandedText = document.querySelector(".expanded-text");

  readMoreBtn.addEventListener("click", function () {
    expandedText.classList.toggle("show");
    readMoreBtn.textContent = expandedText.classList.contains("show")
      ? "Read Less"
      : "Read More";
  });
});
