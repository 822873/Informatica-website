const birthDateString = "10 March 2009";
const birthDate = new Date(birthDateString);
const now = new Date();
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

let jaren = now.getFullYear() - birthDate.getFullYear();
let maanden = now.getMonth() - birthDate.getMonth();

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
  }
});

if (maanden < 0 || (maanden === 0 && now.getDate() < birthDate.getDate())) {
    jaren--;
    maanden += 12;
}

if (now.getDate() < birthDate.getDate()) {
    maanden--;
    if (maanden < 0) {
        maanden += 12;
        jaren--;
    }
}

document.getElementById("leeftijd").textContent = `Leeftijd: ${jaren} jaar en ${maanden} maanden`;

