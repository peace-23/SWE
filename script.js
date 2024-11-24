// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Open navigation menu
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

// Close navigation menu
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}





let scrollAmount = 300; // Adjust the scroll amount as needed

function scrollTestimonials(direction) {
    const container = document.querySelector('.testimonial-container');
    const currentScroll = container.scrollLeft;
    container.scrollTo({
        left: currentScroll + direction * scrollAmount,
        behavior: 'smooth'
    });
}





let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const testimonialContainer = document.querySelector('.testimonial-container');
const totalTestimonials = testimonials.length;

document.querySelector('.left-arrow').addEventListener('click', function () {
    console.log("Left arrow clicked"); // Debugging
    showPreviousTestimonial();
});
document.querySelector('.right-arrow').addEventListener('click', showNextTestimonial);

function updateTestimonialPosition() {
    testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showPreviousTestimonial() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalTestimonials - 1; // Loop back to the last testimonial
    }
    console.log("Current Index (left):", currentIndex); // Debugging line
    updateTestimonialPosition();
}

function showNextTestimonial() {
    currentIndex++;
    if (currentIndex >= totalTestimonials) {
        currentIndex = 0;
    }
    updateTestimonialPosition();
}

// Auto-slide every 5 seconds
setInterval(showNextTestimonial, 7000);







function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide scroll-to-top button based on scroll position
const scrollButton = document.querySelector('.icon_arrow');

window.addEventListener('scroll', () => {
    // Show button when not at the top of the page
    if (window.scrollY > 0) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Ensure the button is hidden initially if the page is loaded at the top
document.addEventListener('DOMContentLoaded', () => {
    if (window.scrollY === 0) {
        scrollButton.style.display = 'none';
    }
});




// Animation for Mission and Vision Statements
document.addEventListener("scroll", () => {
    const mission = document.querySelector(".mission");
    const vision = document.querySelector(".vision");
    const divider = document.querySelector(".divider");

    const missionPosition = mission.getBoundingClientRect().top;
    const visionPosition = vision.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (missionPosition < screenPosition) {
        mission.classList.add("visible");
    }
    if (visionPosition < screenPosition) {
        vision.classList.add("visible");
        divider.classList.add("visible");
    }
});



