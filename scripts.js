document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');

    });
    const navLinks = document.querySelectorAll('nav ul li');
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name from the URL

    navLinks.forEach(link => {
        const linkPage = link.querySelector('a').getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active'); // Add active class to the current page's <li>
        }
    });
});
