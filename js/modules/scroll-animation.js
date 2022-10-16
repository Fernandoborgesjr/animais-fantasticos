export function initAnimateScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach((section) => {
        if (!section.classList.contains("active")) {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - windowHalf < 0;
          isSectionVisible && section.classList.add("active");
        }
      });
    }

    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}
