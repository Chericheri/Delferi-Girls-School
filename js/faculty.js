document.addEventListener('DOMContentLoaded', function() {
    // Department Filtering
    const deptButtons = document.querySelectorAll('.dept-btn');
    const facultyCards = document.querySelectorAll('.faculty-card');
    
    deptButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            deptButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter faculty
            const dept = button.dataset.dept;
            facultyCards.forEach(card => {
                if (dept === 'all' || card.dataset.dept === dept) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
                
                // Show/hide department headings
                const groups = document.querySelectorAll('.faculty-group');
                if (dept === 'all') {
                    groups.forEach(group => group.style.display = 'block');
                } else {
                    groups.forEach(group => {
                        const hasVisible = Array.from(group.querySelectorAll('.faculty-card'))
                            .some(card => card.dataset.dept === dept);
                        group.style.display = hasVisible ? 'block' : 'none';
                    });
                }
            });
        });
    });
    
    // Faculty Modals
    const modalBtns = document.querySelectorAll('.faculty-modal-btn');
    const modals = document.querySelectorAll('.faculty-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    
    modalBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('href');
            document.querySelector(modalId).style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modals.forEach(modal => modal.style.display = 'none');
            document.body.style.overflow = 'auto';
        });
    });
    
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('faculty-modal')) {
            modals.forEach(modal => modal.style.display = 'none');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Faculty Spotlight Slider
    const spotlightSlides = document.querySelectorAll('.spotlight-slide');
    const spotlightDots = document.querySelectorAll('.spotlight-dots .dot');
    let currentSpotlight = 0;
    
    function showSpotlight(n) {
        spotlightSlides.forEach(slide => slide.classList.remove('active'));
        spotlightDots.forEach(dot => dot.classList.remove('active'));
        
        currentSpotlight = (n + spotlightSlides.length) % spotlightSlides.length;
        
        spotlightSlides[currentSpotlight].classList.add('active');
        spotlightDots[currentSpotlight].classList.add('active');
    }
    
    spotlightDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSpotlight(index);
        });
    });
    
    // Auto-advance spotlight
    setInterval(() => showSpotlight(currentSpotlight + 1), 5000);
});