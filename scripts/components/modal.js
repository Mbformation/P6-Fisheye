function renderModal(childComponent, className, photographerName) {
  const componentEl = document.createElement("div");
  componentEl.classList.add("modal", className);
  const componentWrapperEl = document.createElement("div");
  componentWrapperEl.classList.add("modal_content");
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal_header");
  if (photographerName) {
    const title = document.createElement("h2");
    title.textContent = `Contactez-moi ${photographerName}`;
    modalHeader.appendChild(title);
  }
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close_modal");
  closeBtn.innerHTML = `<svg class="cross" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg"><path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill=Currentcolor></svg>`;
  closeBtn.addEventListener("click", () => {
    componentEl.remove();
  });

  modalHeader.appendChild(closeBtn);
  componentWrapperEl.appendChild(modalHeader);
  componentWrapperEl.appendChild(childComponent);
  componentEl.appendChild(componentWrapperEl);

  return componentEl;
}

export default renderModal;
