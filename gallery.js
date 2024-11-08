
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null, 
        threshold: 0.8 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card); 
    });
});

