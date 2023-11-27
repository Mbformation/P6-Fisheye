import HeaderModel from "./HeaderModel.js";

class HeaderHome extends HeaderModel {
  constructor() {
    super();
  }
  render() {
    this.compEl.innerHTML += `<h1>Nos photographes</h1>`;
    return super.render();
  }
}

export default HeaderHome;
