import { outsideClick } from './outsideclick.js';

export class MenuMobile {
  constructor(button, list, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.openMenu = this.openMenu.bind(this);
    this.activeClass = 'active';

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.events.forEach((event) => this.menuButton.addEventListener(event, this.openMenu));
    }

    return this;
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }
}
