import ModalModel from "./ModalModel.js";

class ModalLightbox extends ModalModel {
  constructor(childComponent, className) {
    super();
    this.childComponent = childComponent;
    this.className = className;
  }

  render() {
    return super.render();
  }
}

export default ModalLightbox;
