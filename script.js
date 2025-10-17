// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the generate button element
    const generateButton = document.getElementById('generateBtn');

    // Add click event listener
    generateButton.addEventListener('click', function() {
        // Add a subtle animation effect when clicked
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);

        // TODO: Add your workout plan generation logic here
        alert('Workout plan generation feature coming soon!');
    });

    // Add hover effect
    generateButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });

    generateButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});