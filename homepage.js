var element = document.body;
var tombol = document.querySelector('.toggle');

tombol.addEventListener("click", function () {
    element.classList.toggle('gelap');

    if (element.classList.contains("gelap")) {
        tombol.textContent = "☀️";
    } else {
        tombol.textContent = "🌕"; 
    }
});

 
const words = ["Buku yang kamu inginkan", "Novel terbaik", "Komik favorit", "Manga seru"];
let kata = 0;
let huruf = 0;
let hapus = false;
const typingSpeed = 120;   // kecepatan ketik 
const erasingSpeed = 80;   // kecepatan hapus
const delayBetweenWords = 1500; // jeda sebelum hapus/ganti kata

const typingText = document.getElementById("typing-text");

function typeEffect() {
  const currentWord = words[kata];
  if (!hapus) {
    // Ngetik
    typingText.textContent = currentWord.substring(0, huruf + 1);
    huruf++;
    if (huruf === currentWord.length) {
      hapus = true;
      setTimeout(typeEffect, delayBetweenWords);
      return;
    }
  } else {
    // Hapus
    typingText.textContent = currentWord.substring(0, huruf - 1);
    huruf--;
    if (huruf === 0) {
      hapus = false;
      kata = (kata + 1) % words.length; // pindah ke kata berikutnya
    }
  }
  const speed = huruf ? erasingSpeed : typingSpeed;
  setTimeout(typeEffect, speed);
}

// Jalankan efek
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

