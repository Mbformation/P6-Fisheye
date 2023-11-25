class ModalModel {
  constructor() {
    this.compEl = document.createElement("div");
  }

  render() {
    this.compEl.classList.add("modal", this.className);
    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add("modal-content");
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-modal");
    closeBtn.innerHTML = `<svg class="cross" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg"><path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill=Currentcolor></svg>`;
    closeBtn.addEventListener("click", () => {
      this.compEl.remove();
    });
    modalHeader.appendChild(closeBtn);
    wrapperEl.appendChild(modalHeader);
    wrapperEl.appendChild(this.childComponent);
    this.compEl.appendChild(wrapperEl);

    return this.compEl;
  }
}

export default ModalModel;
