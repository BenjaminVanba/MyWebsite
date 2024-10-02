const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopButton.classList.remove('opacity-0');
        backToTopButton.classList.add('opacity-100');
    } else {
        backToTopButton.classList.add('opacity-0');
        backToTopButton.classList.remove('opacity-100');
    }
});

// On ajoute un effet de défilement fluide en haut de la page
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".fade-in-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0");
                entry.target.classList.add("opacity-100");
            } else {
                entry.target.classList.remove("opacity-100");
                entry.target.classList.add("opacity-0");
            }
        });
    }, {
        threshold: 0.1
    });

    containers.forEach(container => {
        observer.observe(container);
    });
});


