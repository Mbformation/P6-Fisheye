import ModalModel from "./ModalModel.js";

// Composant Modale pour la lightbox
class ModalLightbox extends ModalModel {
  constructor(childComponent, className) {
    super(); // instancie constructeur du modèle
    this.childComponent = childComponent;
    this.className = className;
  }

  render() {
    return super.render();
  }
}

export default ModalLightbox;
