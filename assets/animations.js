function fadeIn(element, duration) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let start = null;

    function animationStep(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.min(progress / duration, 1);

        if (progress < duration) {
            requestAnimationFrame(animationStep);
        }
    }

    requestAnimationFrame(animationStep);
}

function slideIn(element, duration) {
    element.style.transform = 'translateX(-100%)';
    element.style.transition = `transform ${duration}ms ease-in-out`;
    element.style.display = 'block';

    requestAnimationFrame(() => {
        element.style.transform = 'translateX(0)';
    });
}

function bounce(element) {
    element.style.animation = 'bounce 0.5s';
    element.addEventListener('animationend', () => {
        element.style.animation = '';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach(element => {
        fadeIn(element, 1000);
    });

    const elementsToSlideIn = document.querySelectorAll('.slide-in');
    elementsToSlideIn.forEach(element => {
        slideIn(element, 1000);
    });

    const bounceElements = document.querySelectorAll('.bounce');
    bounceElements.forEach(element => {
        bounce(element);
    });
});