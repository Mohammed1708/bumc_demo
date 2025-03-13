document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('block'); // Ensures visibility
    });

    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('block');
        }
    });
    menuToggle.addEventListener("click", function(event) {
        console.log("Hamburger clicked!"); // Check if this prints in console
        event.stopPropagation();
        mobileMenu.classList.toggle("hidden");
    });
});

console.log("navbar masok")