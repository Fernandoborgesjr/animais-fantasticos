export class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.tabContent[0].classList.add(this.activeClass);

      this.tabMenu.forEach((item, index) => {
        item.addEventListener('click', () => this.activeTab(index));
      });
    }
  }

  activeTab(index) {
    if (this.tabContent[index].classList.contains(this.activeClass)) {
      return;
    }
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const animationDirection = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, animationDirection);
  }
}
