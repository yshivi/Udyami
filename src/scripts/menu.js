
document.addEventListener('astro:page-load', () => {
  var mobileMenuIcon = document.querySelector(".header-icon");
  var mobileMenu = document.querySelector(".mobile-menu");
  
  // Ensure the mobile menu is initially hidden
  mobileMenu.style.display = "none";
  
  mobileMenuIcon.addEventListener("click", () => {
    if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
      mobileMenu.style.display = "flex";
    } else {
      mobileMenu.style.display = "none";
    }
  });
});

