document.addEventListener("DOMContentLoaded", () => {
    // Aseguramos que el body sea visible inmediatamente
    document.body.style.opacity = "1";

    // Configuración del observador para animar las secciones al hacer scroll
    const observerOptions = {
        threshold: 0.10 // Bajamos un poco el umbral para que la animación empiece antes
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Seleccionamos todas las secciones para aplicarles el efecto de entrada
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        // Estado inicial de las secciones antes de que el usuario haga scroll
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        
        // Empezar a observar la sección
        observer.observe(section);
    });
});
