import HeaderModel from "./HeaderModel.js"; // importe le modèle

// Composant header de la page d'accueil
class HeaderHome extends HeaderModel {
  constructor() {
    super(); // on instancie le constructeur du composant modèle
  }
  render() {
    // on rajoute un h1 au render de base du composant HeaderModel
    this.compEl.innerHTML += `<h1>Nos photographes</h1>`;
    return super.render();
  }
}

export default HeaderHome;
