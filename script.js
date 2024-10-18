// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


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