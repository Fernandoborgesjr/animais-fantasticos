export function initTabNav() {
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
      const animationDirection = tabContent[index].dataset.anime;
      tabContent[index].classList.add("active", animationDirection);
    }
  }
}
