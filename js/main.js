document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (!name || !email) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Submit the form
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you! Your project information has been submitted.');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            alert('There was a problem submitting your form. Please try again later.');
            console.error(error);
        });
    });

    // Smooth scrolling for navigation links
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