const backToTopButton = document.querySelector(".btn");

document.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("active", window.scrollY > 0);
});
