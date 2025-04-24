function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
    });

    handleScroll();
    window.addEventListener('scroll', handleScroll);
}); 