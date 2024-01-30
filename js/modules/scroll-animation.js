export class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();

      window.addEventListener('scroll', this.checkDistance);
    }
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const { offsetTop } = section;
      return {
        element: section,
        offsetTop: Math.floor(offsetTop - this.windowHalf),
      };
    });
  }

  checkDistance() {
    this.distance.forEach(({ element, offsetTop }) => {
      if (window.scrollY > offsetTop) {
        element.classList.add('active');
      } else if (element.classList.contains('active')) {
        element.classList.remove('active');
      }
    });
  }

  destroy() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
