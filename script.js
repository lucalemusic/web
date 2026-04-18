document.addEventListener("DOMContentLoaded", () => {
    // Forzamos la visibilidad del body
    document.body.style.opacity = "1";

    const observerOptions = {
        threshold: 0.15 // Un poquito más alto para que empiece a animar cuando ya entró un poco
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionamos todas las secciones
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        // Excluimos las secciones que queremos visibles desde el inicio (Hero)
        // Como tu Hero tiene clase 'hero' pero no id, lo detectamos así:
        if (section.classList.contains('hero')) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        } else {
            // Estado inicial de las secciones ocultas
            section.style.opacity = "0";
            section.style.transform = "translateY(30px)";
            section.style.transition = "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)";
            observer.observe(section);
        }
    });
});
