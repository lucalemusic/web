document.addEventListener("DOMContentLoaded", () => {
    // 1. Configuración del Intersection Observer para el efecto de aparición
    const observerOptions = {
        threshold: 0.1 // Se activa cuando el 10% de la sección es visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // El retraso (index * 0.15) hace que las secciones aparezcan en orden, una tras otra
                entry.target.style.transitionDelay = `${index * 0.15}s`;
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                
                // Una vez que aparece, dejamos de observar para ahorrar recursos
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 2. Aplicamos el efecto a todas las secciones
    document.querySelectorAll('section').forEach(section => {
        // Estado inicial (oculto y desplazado hacia abajo)
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 1s cubic-bezier(0.22, 1, 0.36, 1)";
        observer.observe(section);
    });

    // 3. Pequeño extra: Interacción para el Marquee (opcional)
    // Hace que el marquee cambie de velocidad al pasar el mouse (efecto premium)
    const marquee = document.querySelector('.marquee-text');
    if (marquee) {
        marquee.addEventListener('mouseenter', () => marquee.style.animationPlayState = 'paused');
        marquee.addEventListener('mouseleave', () => marquee.style.animationPlayState = 'running');
    }
});
