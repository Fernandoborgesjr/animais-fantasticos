export function initModal() {
    const btnOpen = document.querySelector('[data-modal="abrir"]');
    const btnClose = document.querySelector('[data-modal="fechar"]');
    const container = document.querySelector('[data-modal="container"]');
    
    btnOpen?.addEventListener("click", toggleModal);
    btnClose?.addEventListener("click", toggleModal);
    container?.addEventListener("click", outsideClickModal);
    
    function toggleModal(event) {
      event.preventDefault();
      container.classList.toggle("ativo");
    }
    
    function outsideClickModal(event) {
      event.target === this && toggleModal(event);
    }
}

