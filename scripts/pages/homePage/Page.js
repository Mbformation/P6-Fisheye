import HeaderHome from "../../components/header/HeaderHome.js";
import PhotographersGrid from "../../components/cardsGrid/PhotographersGrid.js";

// Composant Page qui affiche les différents composants
// de la page d'accueil: header, main, la section
class Page {
  constructor(pageData) {
    this.pageData = pageData;
    this.page = document.querySelector(".home-page");
    this.main = document.createElement("main");
    this.main.classList.add("main");
    this.header = new HeaderHome();
  }

  render() {
    this.page.appendChild(this.header.render());
    const section = document.createElement("section");
    section.classList.add("photographers");
    section.appendChild(new PhotographersGrid(this.pageData).render());
    this.main.appendChild(section);
    this.page.appendChild(this.main);
  }
}

export default Page;
