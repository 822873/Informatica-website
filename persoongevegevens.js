// Geboortedatum invoeren
const birthDateString = "10 March 2009"; // Engelse maandnaam!
const birthDate = new Date(birthDateString);
const now = new Date();

let jaren = now.getFullYear() - birthDate.getFullYear();
let maanden = now.getMonth() - birthDate.getMonth();

// Als de huidige maand vóór de geboortemaand ligt, of als het nog geen geboortedag is
if (maanden < 0 || (maanden === 0 && now.getDate() < birthDate.getDate())) {
    jaren--;
    maanden += 12;
}

// Pas als de huidige dag kleiner is dan de geboortedag, 1 maand eraf
if (now.getDate() < birthDate.getDate()) {
    maanden--;
    if (maanden < 0) {
        maanden += 12;
        jaren--;
    }
}

document.getElementById("leeftijd").textContent = `Leeftijd: ${jaren} jaar en ${maanden} maanden`;

