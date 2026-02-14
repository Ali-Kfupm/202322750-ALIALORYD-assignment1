/* =====================================================
   HEADER SHADOW ON SCROLL
   Adds a shadow + blur effect to the fixed header
   when the user scrolls down the page.
===================================================== */
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});


/* =====================================================
   DYNAMIC FOOTER YEAR
   Automatically updates the copyright year
   so it always shows the current year.
===================================================== */
document.getElementById("year").textContent = new Date().getFullYear();


/* =====================================================
   ACTIVE NAVIGATION LINK ON SCROLL
   Highlights the navbar link that corresponds
   to the section currently visible on screen.
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  // Add offset to compensate for fixed header height
  const scrollPosition = window.scrollY + 200;

  sections.forEach(section => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  // Update active navigation link
  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
