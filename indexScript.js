// script flowbit dropdown for WOMEN
<script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>;

// script for sticky logo on scroll
const logo = document.getElementById("navbarLogo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    logo.classList.remove("opacity-0", "pointer-events-none");
    logo.classList.add("opacity-100");
  } else {
    logo.classList.add("opacity-0", "pointer-events-none");
    logo.classList.remove("opacity-100");
  }
});
