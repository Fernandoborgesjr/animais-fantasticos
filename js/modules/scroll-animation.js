export class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;
    this.animateScroll = this.animateScroll.bind(this);
  }

  init() {
    if (this.sections.length) {
      this.animateScroll();

      window.addEventListener('scroll', this.animateScroll);
    }
  }

  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowHalf < 0;
      const hasSectionActive = section.classList.contains('active');

      if (isSectionVisible) {
        section.classList.add('active');
      } else if (hasSectionActive) {
        section.classList.remove('active');
      }
    });
  }
}
