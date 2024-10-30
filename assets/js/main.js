document.addEventListener('DOMContentLoaded', () => {
    // Initialize form handler
    const formHandler = new FormHandler('contactForm');
    
    // Smooth scrolling for navigation links (preserved from original)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 