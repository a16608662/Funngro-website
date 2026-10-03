document.addEventListener("DOMContentLoaded", function () {

  // Show website content
  document.querySelectorAll(".reveal").forEach(function (element) {
    element.classList.add("visible");
  });

  // Mobile menu
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
    });
  }

});
