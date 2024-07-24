function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Form submission alert
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been sent successfully.');
    this.reset(); // Reset form fields
});
// Function to scroll to a specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to redirect to a social media URL
function redirectTo(url) {
    window.open(url, '_blank');
}
