// 1. Typing Effect
const typedText = "Java Developer | Software Engineer ";
let charIndex = 0;

function typeEffect() {
    if (charIndex < typedText.length) {
        document.getElementById("typing-text").innerHTML += typedText.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 60);
    }
}

// 2. Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

// 3. Back to Top Logic
const topBtn = document.getElementById("backToTop");
window.onscroll = () => {
    revealOnScroll();
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Start
window.onload = typeEffect;