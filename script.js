// 1. Efecto de entrada inicial (Fade In del Body)
window.addEventListener("DOMContentLoaded", () => {
    document.body.style.transition = "opacity 1.5s ease";
    document.body.style.opacity = 1;
});

// 2. Scroll Reveal: Las secciones aparecen al bajar
const observerOptions = {
    threshold: 0.15 // Se activa cuando el 15% de la sección es visible
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target); // Deja de observar una vez que ya apareció
        }
    });
}, observerOptions);

// Aplicamos el efecto a todas las secciones y tarjetas
document.querySelectorAll('section, .press-card, .grid img').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    revealOnScroll.observe(el);
});

// 3. Smooth Scroll para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
