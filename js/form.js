const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    form.reset();
});