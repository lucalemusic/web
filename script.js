document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.opacity = "1";
        section.style.transform = "none";
    });

});
