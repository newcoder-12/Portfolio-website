// ---------------- HAMBURGER MENU ----------------
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// ---------------- TYPING EFFECT ----------------
const text = "I do code and build things";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}
typingEffect();


// ---------------- SCROLL REVEAL ----------------
const reveals = document.querySelectorAll(".reveal");

function scrollReveal() {
    reveals.forEach((el)=>{
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 120){
            el.classList.add("show");
        }
    })
}
window.addEventListener("scroll", scrollReveal);
scrollReveal();


// ---------------- BACK TO TOP BUTTON ----------------
const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

backBtn.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
});
