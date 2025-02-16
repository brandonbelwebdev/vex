document.addEventListener('DOMContentLoaded', function () {
    const sliderTrack = document.querySelector('.slider-track');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100; // Calculate offset for the current slide
        sliderTrack.style.transform = `translateX(${offset}%)`;
    }

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }, 5000);
});
