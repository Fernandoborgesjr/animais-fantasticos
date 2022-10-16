initTabNav();
initAccordion();
initAnimateScroll();

function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active");

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => activeTab(index));
    });

    function activeTab(index) {
      if (tabContent[index].classList.contains("active")) {
        return;
      }
      tabContent.forEach((section) => {
        section.classList.remove("active");
      });
      const animationDirection = tabContent[index].dataset.anime
      tabContent[index].classList.add("active", animationDirection);
    }
  }
}

function initAccordion() {
  const accordionListTitles = document.querySelectorAll("[data-anime='accordion'] dt");

  if (accordionListTitles.length) {
    accordionListTitles.forEach((item) =>
      item.addEventListener("click", activeAccordion)
    );

    accordionListTitles[0].click();
  }

  function activeAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }
}

function initAnimateScroll() {
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
