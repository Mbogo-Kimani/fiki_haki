document.getElementById('login-btn').addEventListener('click', function() {
    alert('Redirecting to login/register page...');
    // Redirect logic can be added here
});
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});