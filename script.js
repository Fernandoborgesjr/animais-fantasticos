initTabNav();
initAccordion();

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

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
      tabContent[index].classList.add("active");
    }
  }
}

function initAccordion() {
  const accordionListTitles = document.querySelectorAll(".js-accordion dt");

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
