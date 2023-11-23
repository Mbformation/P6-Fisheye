import createModal from "./modal.js";

export function createForm() {
  const btnElement = document.querySelector(".button_close");
  const modalElement = document.querySelector("#contact_modal");
  createModal.closeModal(btnElement, modalElement);
}

export default createForm;
