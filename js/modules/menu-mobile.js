import { outsideClick } from "./outsideclick.js";

export function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  if (menuButton) {
    events.forEach((event) => menuButton.addEventListener(event, openMenu));
  }

  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideClick(menuList, events, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }
}
