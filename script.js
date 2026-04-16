document.addEventListener("DOMContentLoaded", () => {
    // Aparecer el cuerpo de la página
    document.body.style.transition = "opacity 1.5s ease-in-out";
    document.body.style.opacity = 1;

    // Configuración del observador para animar secciones al hacer scroll
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Aplicar animación a cada sección
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        observer.observe(section);
    });
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


