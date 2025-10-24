// Smooth Page Transitions Script
document.addEventListener('DOMContentLoaded', function() {
    // Fade in the page on load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Add click event to all nav links for fade-out effect
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent immediate navigation
            const href = this.getAttribute('href');
            
            // Fade out the body
            document.body.style.opacity = '0';
            
            // Show a loading spinner (optional visual feedback)
            showLoadingSpinner();
            
            // Navigate after fade-out completes
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the transition duration
        });
    });

    // Function to show a simple loading spinner
    function showLoadingSpinner() {
        let spinner = document.getElementById('loading-spinner');
        if (!spinner) {
            spinner = document.createElement('div');
            spinner.id = 'loading-spinner';
            spinner.innerHTML = `
                <div class="spinner-overlay">
                    <div class="spinner"></div>
                </div>
            `;
            document.body.appendChild(spinner);
        }
        spinner.style.display = 'flex';
    }

    // Hide spinner on page load (if present)
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
});