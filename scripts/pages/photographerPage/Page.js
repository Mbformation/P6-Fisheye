import Header from "./../../components/Header.js";
import PhotographerSection from "./PhotographerSection.js";
import PortfolioSection from "./PortfolioSection.js";

class Page {
  constructor(photographer, portfolio) {
    this.photographer = photographer;
    this.portfolio = portfolio;
    this.page = document.querySelector(".photographer-page");
    this.main = document.createElement("main");
    this.main.classList.add("main");
    this.header = new Header();
  }

  render() {
    this.page.appendChild(this.header.render());
    this.main.appendChild(new PhotographerSection(this.photographer).render());
    this.main.appendChild(
      new PortfolioSection(this.portfolio, this.photographer).render()
    );
    this.page.appendChild(this.main);
    return this.page;
  }
}

export default Page;
