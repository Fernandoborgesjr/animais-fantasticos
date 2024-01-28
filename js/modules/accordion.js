export class Accordion {
  constructor(listSelector) {
    this.list = document.querySelectorAll(listSelector);
    this.activeClass = 'active';
  }

  init() {
    if (this.list.length) {
      this.addEvent();

      this.toggle(this.list[0]);
    }
  }

  addEvent() {
    this.list.forEach((item) => item.addEventListener('click', () => this.toggle(item)));
  }

  toggle(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
}
