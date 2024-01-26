export function initAccordion() {
  const accordionListTitles = document.querySelectorAll("[data-anime='accordion'] dt");

  if (accordionListTitles.length) {
    accordionListTitles.forEach((item) => item.addEventListener('click', activeAccordion));

    accordionListTitles[0].click();
  }

  function activeAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }
}
