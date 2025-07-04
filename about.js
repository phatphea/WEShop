//code for counting number
document.addEventListener('DOMContentLoaded', () => {
            // Select all span elements that have the data-target attribute
            const counters = document.querySelectorAll('span[data-target]');

            // Options for the Intersection Observer (to start animation when visible)
            const observerOptions = {
                root: null, // use the viewport as the root
                rootMargin: '0px',
                threshold: 0.7 // trigger when 70% of the element is visible
            };

            // Create a new Intersection Observer
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) { // If the element is currently visible
                        const counter = entry.target;
                        const target = +counter.getAttribute('data-target');
                        let current = 0; // Start counting from 0

                        const duration = 3000; // Animation duration in milliseconds
                        let start = null;

                        // The animation function
                        const animate = (timestamp) => {
                            if (!start) start = timestamp;
                            const progress = timestamp - start;
                            const percentage = Math.min(progress / duration, 1); // Clamp to 1 (100%)

                            // Calculate the value based on percentage
                            current = Math.floor(percentage * target); // Use Math.floor for whole numbers

                            // Update the text content of the span
                            counter.innerText = current;

                            if (percentage < 1) {
                                requestAnimationFrame(animate); // Continue animation if not finished
                            } else {
                                counter.innerText = target; // Ensure final target value is set accurately
                                observer.unobserve(counter); // Stop observing after animation is complete
                            }
                        };

                        requestAnimationFrame(animate); // Start the animation
                    }
                });
            }, observerOptions);

            // Observe each counter element
            counters.forEach(counter => {
                observer.observe(counter);
            });
        });

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

