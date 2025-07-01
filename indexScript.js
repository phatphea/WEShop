// script for sticky logo on scroll
const navbar = document.getElementById("mainNavbar");
const logo = document.getElementById("navbarLogo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 97) {
    logo.classList.remove("hidden");
  } else {
    logo.classList.add("hidden");
  }
});

// script for sticky logo on scroll
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const closeMobileMenuButton = document.getElementById("closeMobileMenu");

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle("translate-x-full"); // Slide out
    mobileMenu.classList.toggle("translate-x-0"); // Slide in
    mobileMenuOverlay.classList.toggle("hidden"); // Show/hide overlay
    document.body.classList.toggle("overflow-hidden"); // Prevent body scrolling
  };

  // Event listeners for opening and closing the mobile menu
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", toggleMobileMenu);
  }
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", toggleMobileMenu);
  }
  if (closeMobileMenuButton) {
    closeMobileMenuButton.addEventListener("click", toggleMobileMenu);
  }

  // Handle dropdowns within the mobile menu (simple toggle)
  const mobileDropdownToggles = document.querySelectorAll(
    ".mobile-dropdown-toggle"
  );
  mobileDropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const dropdownList = toggle.nextElementSibling; // Get the next sibling (ul)
      const arrowIcon = toggle.querySelector("svg");

      if (dropdownList && dropdownList.tagName === "UL") {
        dropdownList.classList.toggle("hidden"); // Toggle visibility of dropdown list
        arrowIcon.classList.toggle("rotate-180"); // Rotate arrow icon
      }
    });
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Function to set initial theme
function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    localStorage.setItem("theme", "light");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
});

// Set theme on initial load
setInitialTheme();
