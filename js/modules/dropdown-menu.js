import { outsideClick } from './outsideclick.js';

export class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    this.activeClass = 'active';
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
  }

  init() {
    if (this.dropdownMenus.length) this.addDropownMenusEvent();
    return this;
  }

  addDropownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  activeDropdownMenu(event) {
    const target = event.currentTarget;
    event.preventDefault();
    target.classList.add(this.activeClass);

    outsideClick(target, this.events, () => {
      target.classList.remove(this.activeClass);
    });
  }
}
