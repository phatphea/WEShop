// script flowbit dropdown for WOMEN
<script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>;

// script for sticky logo on scroll
document.addEventListener("DOMContentLoaded", function () {
  const logoImage = document.getElementById("logo-image");
  const scrollThreshold = 50; // Adjust this value as needed

  let isLogoVisible = false; // Track the current state of the logo

  function toggleLogoVisibility() {
    if (window.scrollY > scrollThreshold) {
      if (!isLogoVisible) {
        // If currently hidden
        logoImage.classList.remove("hidden"); // Make it display: block (takes space)
        // Use a small timeout to allow 'hidden' removal to register before opacity change
        // This ensures the transition applies correctly from opacity-0
        setTimeout(() => {
          logoImage.classList.remove("opacity-0");
          logoImage.classList.add("opacity-100");
        }, 10); // A very small delay
        isLogoVisible = true;
      }
    } else {
      if (isLogoVisible) {
        // If currently visible
        logoImage.classList.remove("opacity-100");
        logoImage.classList.add("opacity-0");
        // After the transition, make it hidden (removes space)
        logoImage.addEventListener(
          "transitionend",
          function handler() {
            logoImage.classList.add("hidden");
            logoImage.removeEventListener("transitionend", handler); // Remove listener to prevent re-firing
          },
          { once: true }
        ); // Ensure this listener runs only once
        isLogoVisible = false;
      }
    }
  }

  // Run the function once on load to set initial state
  toggleLogoVisibility();

  // Add scroll event listener
  window.addEventListener("scroll", toggleLogoVisibility);
});
