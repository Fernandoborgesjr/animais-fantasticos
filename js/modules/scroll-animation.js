export function initAnimateScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - windowHalf < 0;
          const hasSectionActive = section.classList.contains("active");

          if (isSectionVisible) {
            section.classList.add("active");
          } else if (hasSectionActive) {
            section.classList.remove("active");
          }
      });
    }

    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}
