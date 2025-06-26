const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) {
    navLinks.classList.remove('active');
  }
});

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
} 
