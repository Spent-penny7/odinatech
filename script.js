const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

// Open/Close Menu
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
});

// Close when clicking the overlay
overlay.addEventListener("click", () => {
    closeMenu();
});

// Prevent closing when clicking inside the sidebar
navLinks.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Close when clicking anywhere outside (extra safety)
document.addEventListener("click", (e) => {
    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        closeMenu();
    }
});

function closeMenu() {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
}