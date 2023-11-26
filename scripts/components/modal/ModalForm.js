import ModalModel from "./ModalModel.js";

class ModalForm extends ModalModel {
  constructor(childComponent, className, photographerName) {
    super();
    this.childComponent = childComponent;
    this.className = className;
    this.photographerName = photographerName;
    this.modal = super.render();
  }

  render() {
    const modalHeader = this.modal.querySelector(".modal-header");
    const title = document.createElement("h2");
    title.textContent = `Contactez-moi ${this.photographerName}`;
    modalHeader.appendChild(title);

    return this.modal;
  }
}

export default ModalForm;
