import Header from "../../components/Header.js";
import CardsGrid from "../../components/CardsGrid.js";
import PhotographerCard from "../../components/PhotographerCard.js";

class Page {
  constructor(pageData) {
    this.pageData = pageData;
    this.page = document.querySelector(".home-page");
    this.main = document.createElement("main");
    this.main.classList.add("main");
    this.header = new Header();
  }

  render() {
    this.page.appendChild(this.header.render());
    const section = document.createElement("section");
    section.classList.add("photographers");
    section.appendChild(
      new CardsGrid(this.pageData, new PhotographerCard()).render()
    );
    this.main.appendChild(section);
    this.page.appendChild(this.main);
  }
}

export default Page;
