export class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  init() {
    if (this.tooltips.length) this.addTooltipsEvent();
    return this;
  }

  onMouseOver(event) {
    const target = event.currentTarget;

    this.createTooltipBox(target);

    this.tooltipBox.style.top = `${event.pageY}px`;
    this.tooltipBox.style.left = `${event.pageX}px`;

    target.addEventListener('mouseleave', this.onMouseLeave);
    target.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseLeave(event) {
    const target = event.currentTarget;
    this.tooltipBox.remove();
    target.removeEventListener('mouseleave', this.onMouseLeave);
    target.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 >= window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  addTooltipsEvent() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', this.onMouseOver);
    });
  }

  createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
}
