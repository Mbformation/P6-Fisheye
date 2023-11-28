import ModalModel from "./ModalModel.js";

// Composant modale sur formulaire
class ModalForm extends ModalModel {
  constructor(childComponent, className, photographerName) {
    super(); // instancie le constructeur de son modèle
    this.childComponent = childComponent;
    this.className = className;
    this.photographerName = photographerName;
    this.modal = super.render();
  }

  render() {
    // ajoute un titre par rapport à une modale basique
    const modalHeader = this.modal.querySelector(".modal-header");
    const title = document.createElement("h2");
    title.innerHTML = `Contactez-moi <br>${this.photographerName}`;
    modalHeader.appendChild(title);

    return this.modal;
  }
}

export default ModalForm;
