// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Highlight Navbar Section on Scroll
    const sections = document.querySelectorAll('.box');
    const navLinks = document.querySelectorAll('.panel-ops p');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 50) {
                currentSection = section.querySelector('h2').innerText;
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.innerText.toLowerCase() === currentSection.toLowerCase()) {
                link.classList.add('active');
            }
        });
    });

    // Dynamic Cart Counter
    const cartButton = document.querySelector('.nav-cart');
    let cartCount = 0;

    cartButton.addEventListener('click', () => {
        cartCount++;
        cartButton.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
    });

    // Toggle Panel
    const toggleButton = document.querySelector('.panel-all i');
    const panelOptions = document.querySelector('.panel-ops');

    toggleButton.addEventListener('click', () => {
        panelOptions.classList.toggle('visible');
    });
});
