document.addEventListener('DOMContentLoaded', function() {
    // Animaciones de scroll
    const elements = document.querySelectorAll('.scroll-fade');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    elements.forEach(el => observer.observe(el));

    // Validación del formulario
    document.querySelector('form').addEventListener('submit', function(event) {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Por favor, completa todos los campos.');
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Por favor, introduce un email válido.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Botón de volver arriba
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animación de carga de la página
    document.body.classList.add('loading');
    window.onload = function() {
        document.body.classList.remove('loading');
        document.getElementById('loader').style.display = 'none';
    }
});

