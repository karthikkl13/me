document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const responseMessage = document.getElementById('response-message');

    // Show response message
    responseMessage.innerHTML = `Thank you, ${name}! Your message has been sent.`;
    responseMessage.classList.add('response-message');
    responseMessage.style.opacity = 1; // Make it visible

    // Clear the form fields
    document.getElementById('contact-form').reset();

    // Fade out the response message after 3 seconds
    setTimeout(() => {
        responseMessage.style.opacity = 0;
    }, 3000);
});

// Function to handle section animations
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});