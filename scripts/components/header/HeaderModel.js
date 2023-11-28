// composant modèle de Header

class HeaderModel {
  constructor() {
    this.compEl = document.createElement("header");
    this.compEl.innerHTML = `
    <a href="index.html" alt="Page d'accueil Fisheye">
      <img src="assets/images/logo.png" class="logo" alt="Logo Fisheye"/>
    </a>`;
  }
  render() {
    return this.compEl;
  }
}

export default HeaderModel;
