
document.addEventListener('astro:page-load', () => {
    var mobileMenuIcon = document.querySelector(".header-icon");
    var mobileMenu = document.querySelector(".mobile-menu");
    
    mobileMenuIcon.addEventListener("click", () => {
      if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "flex";
        
      } else {
        mobileMenu.style.display = "none";
       
      }
    });

   

   
});