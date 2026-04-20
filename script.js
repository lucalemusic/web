document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";

    // 1. PRELOADER
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }
    }, 600);

    // 2. ANIMACIONES SCROLL
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.10 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id !== 'hero') {
            section.style.opacity = "0";
            section.style.transform = "translateY(30px)";
            section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            observer.observe(section);
        }
    });
});

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Esperamos 2 segundos después de que cargó todo para que el usuario aprecie el logo
    setTimeout(() => {
        preloader.style.opacity = '0'; // Esto crea el efecto de desvanecimiento
        
        // Una vez que terminó la transición de opacidad, quitamos el elemento
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); // 500ms es el tiempo que dura la transición
    }, 2000); 
});
