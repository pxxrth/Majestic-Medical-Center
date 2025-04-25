// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.specialty-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.specialty-card, .testimonial-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
window.addEventListener('load', animateOnScroll);

// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonials-slider');
    const prevButton = document.querySelector('.nav-prev');
    const nextButton = document.querySelector('.nav-next');
    const cards = document.querySelectorAll('.testimonial-card');
    
    let currentIndex = 0;
    const cardCount = cards.length;
    const cardsPerView = window.innerWidth <= 768 ? 1 : 2;
    const cardWidth = 100 / cardsPerView; // Percentage width per card
    
    function updateSlider() {
        const offset = currentIndex * cardWidth;
        slider.style.transform = `translateX(-${offset}%)`;
    }
    
    function handleNavigation(direction) {
        const newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex <= cardCount - cardsPerView) {
            currentIndex = newIndex;
            updateSlider();
        }
    }
    
    prevButton.addEventListener('click', () => handleNavigation(-1));
    nextButton.addEventListener('click', () => handleNavigation(1));
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const newCardsPerView = window.innerWidth <= 768 ? 1 : 2;
        if (newCardsPerView !== cardsPerView) {
            currentIndex = 0;
            updateSlider();
        }
    });
    
    // Initialize slider position
    updateSlider();
});
