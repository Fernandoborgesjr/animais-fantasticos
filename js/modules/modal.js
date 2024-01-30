export class Modal {
  constructor(container, open, close) {
    this.btnOpen = document.querySelector(open);
    this.btnClose = document.querySelector(close);
    this.container = document.querySelector(container);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideClickModal = this.outsideClickModal.bind(this);
  }

  init() {
    this.btnOpen?.addEventListener('click', this.eventToggleModal);
    this.btnClose?.addEventListener('click', this.eventToggleModal);
    this.container?.addEventListener('click', this.outsideClickModal);
    return this;
  }

  toggleModal() {
    this.container.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  outsideClickModal(event) {
    if (event.target === this.container) this.toggleModal(event);
  }
}
