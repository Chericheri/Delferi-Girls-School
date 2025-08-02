let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  // Reset all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Handle wrap-around
  currentSlide = (n + slides.length) % slides.length;
  
  // Show current slide and dot
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Click handlers for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Auto-advance slides every 5 seconds
let slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);

// Pause on hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => {
  slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
});

// Initialize first slide
showSlide(0);