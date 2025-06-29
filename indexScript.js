// script flowbit dropdown for WOMEN
<script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>;

// script for sticky logo on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("mainNavbar");
  const stickyLogo = document.getElementById("stickyLogo");
  const normalLogo = document.getElementById("normalLogo");

  if (window.scrollY > 0) {
    stickyLogo.classList.remove("hidden");
    normalLogo.classList.add("hidden");
  } else {
    stickyLogo.classList.add("hidden");
    normalLogo.classList.remove("hidden");
  }
});
