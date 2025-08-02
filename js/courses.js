// Course Filtering and Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab Filtering
    const tabButtons = document.querySelectorAll('.tab-btn');
    const courseItems = document.querySelectorAll('.accordion-item');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter courses
            const category = button.dataset.category;
            courseItems.forEach(item => {
                if (category === 'all' || item.dataset.categories.includes(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
        });
    });
    
    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
            
            const content = header.nextElementSibling;
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
            
            // Close other open accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherItem = otherHeader.parentElement;
                    otherItem.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = null;
                }
            });
        });
    });
    
    // Open first accordion by default
    if (accordionHeaders.length > 0) {
        accordionHeaders[0].click();
    }
});