const controls = {
  openBtn: document.querySelector("[data-modal-open]"),
  closeBtn: document.querySelector("[btn-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

const toggleModal = event => {
  controls.modal.classList.toggle("is-open");
};

controls.openBtn.onclick = toggleModal;
controls.closeBtn.onclick = toggleModal;
