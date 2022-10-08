const backToTopButton = document.querySelector(".toTopBtn");

document.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("active", window.scrollY > 0);
});
