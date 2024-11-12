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




// // This JavaScript will add a click event listener to each FAQ question, 
// toggling the open class and showing or hiding the answer.
document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            // Close any other open FAQs
            faqs.forEach(otherFaq => {
                if (otherFaq !== faq) {
                    otherFaq.classList.remove("open");
                    otherFaq.querySelector(".faq-answer").style.maxHeight = "0";
                }
            });
            // Toggle the clicked FAQ
            faq.classList.toggle("open");

            // Adjust the max-height for the answer
            const answer = faq.querySelector(".faq-answer");
            if (faq.classList.contains("open")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = "0";
            }
        });
    });
});

