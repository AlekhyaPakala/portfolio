const typedText = "Java Developer  |  IT Fresher  |  Software Career Focus";
const typingTarget = document.getElementById("typing-text");
const topButton = document.getElementById("backToTop");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
let charIndex = 0;

function typeEffect() {
    if (!typingTarget || charIndex >= typedText.length) {
        return;
    }

    typingTarget.textContent += typedText.charAt(charIndex);
    charIndex += 1;
    window.setTimeout(typeEffect, 45);
}

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < window.innerHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

function toggleBackToTop() {
    if (!topButton) {
        return;
    }

    topButton.classList.toggle("visible", window.scrollY > 360);
}

function closeMobileMenu() {
    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        navLinks.classList.toggle("open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });
}

window.addEventListener("scroll", () => {
    revealOnScroll();
    toggleBackToTop();
});

if (topButton) {
    topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

window.addEventListener("load", () => {
    revealOnScroll();
    toggleBackToTop();
    typeEffect();
});
