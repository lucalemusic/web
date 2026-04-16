document.addEventListener("DOMContentLoaded", () => {

    // 🔥 FADE IN MÁS PRO
    document.body.style.transition = "opacity 1.8s ease-out";
    document.body.style.opacity = 1;

    // 🎬 OBSERVER (SCROLL)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";
                
                // 🔥 delay leve para efecto cinematográfico
                entry.target.style.transitionDelay = "0.1s";

            }
        });
    }, observerOptions);

    // 🎯 SECCIONES
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(60px) scale(0.98)";
        section.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(section);
    });

    // 💣 HERO ANIMACIÓN EXTRA (entrada)
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "scale(1.05)";
        
        setTimeout(() => {
            hero.style.transition = "all 2s ease-out";
            hero.style.opacity = "1";
            hero.style.transform = "scale(1)";
        }, 200);
    }

});


// 🔥 EFECTO PARALLAX SUAVE EN SCROLL
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const video = document.querySelector(".bg-video");

    if (video) {
        video.style.transform = `scale(1.1) translateY(${scrollY * 0.05}px)`;
    }
});


// 🎯 CUANDO TERMINA DE CARGAR TODO
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
