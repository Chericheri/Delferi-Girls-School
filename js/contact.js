document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset errors
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
                el.textContent = '';
            });
            
            // Validate form
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name');
            if (name.value.trim() === '') {
                document.getElementById('name-error').textContent = 'Please enter your name';
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            }
            
            // Email validation
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email';
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            }
            
            // Message validation
            const message = document.getElementById('message');
            if (message.value.trim() === '') {
                document.getElementById('message-error').textContent = 'Please enter your message';
                document.getElementById('message-error').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                
                // In a real implementation, you would send the form data to a server here
                // For example using fetch():
                /*
                const formData = new FormData(contactForm);
                fetch('process-form.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        contactForm.style.display = 'none';
                        formSuccess.style.display = 'block';
                    }
                });
                */
            }
        });
    }
    
    // Campus Visit Form
    const visitForm = document.getElementById('visit-request-form');
    const visitSuccess = document.getElementById('visit-success');
    
    if (visitForm) {
        visitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            visitForm.style.display = 'none';
            visitSuccess.style.display = 'block';
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
            
            // Close other open FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.parentElement.classList.remove('active');
                }
            });
        });
    });
    
    // Initialize date picker for visit date
    const visitDate = document.getElementById('visit-date');
    if (visitDate) {
        // Set min date to tomorrow
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const yyyy = tomorrow.getFullYear();
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const dd = String(tomorrow.getDate()).padStart(2, '0');
        
        visitDate.min = `${yyyy}-${mm}-${dd}`;
        
        // Disable weekends
        visitDate.addEventListener('input', function() {
            const selectedDate = new Date(this.value);
            const day = selectedDate.getDay();
            
            if (day === 0 || day === 6) {
                this.setCustomValidity('Please select a weekday (Monday-Friday)');
            } else {
                this.setCustomValidity('');
            }
        });
    }
});