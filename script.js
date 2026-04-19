document.addEventListener("DOMContentLoaded", () => {

    // Forzamos la visibilidad del body

    document.body.style.opacity = "1";



    const observerOptions = {

        threshold: 0.10 

    };



    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                // Una vez que la sección ya apareció, dejamos de observarla

                // Esto mejora el rendimiento de la página

                observer.unobserve(entry.target);

            }

        });

    }, observerOptions);



    const sections = document.querySelectorAll('section');

    

    sections.forEach(section => {

        // Solo animamos si la sección NO es la primera (Hero)

        // así el usuario ve algo apenas carga y no una pantalla vacía

        if (section.id !== 'hero') {

            section.style.opacity = "0";

            section.style.transform = "translateY(30px)";

            section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

            observer.observe(section);

        } else {

            section.style.opacity = "1";

            section.style.transform = "translateY(0)";

        }

    });

});

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Función para ocultar el preloader
    function ocultarPreloader() {
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }

    // Ejecutar después de 1.5 segundos asegurados
    setTimeout(ocultarPreloader, 1500);
});

