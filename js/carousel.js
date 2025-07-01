let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.iframe-slide');
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentSlide = index;

  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
      const iframe = slide.querySelector('iframe');
      const src = slide.getAttribute('data-src');
      iframe.src = src;  // Reload iframe
    } else {
      slide.style.display = 'none';
      const iframe = slide.querySelector('iframe');
      iframe.src = ''; // Clear iframe to force reload next time
    }
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(0);
});
