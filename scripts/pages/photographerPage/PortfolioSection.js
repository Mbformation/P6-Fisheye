import PortfolioGrid from "../../components/cardsGrid/PortfolioGrid.js";
import StickyFooter from "../../components/StickyFooter.js";
import SortBtnDropdown from "../../components/SortBtnDropdown.js";

class PortfolioSection {
  constructor(portfolio, photographer) {
    this.portfolio = portfolio;
    this.photographer = photographer;
    this.compEl = document.createElement("section");
    this.compEl.classList.add("portfolio");
    this.sortBtnDropdown = new SortBtnDropdown(
      this.updateGrid.bind(this),
      this.portfolio
    );
    this.portfolioGrid = new PortfolioGrid(
      this.portfolio,
      this.update.bind(this)
    );
    this.stickyFooter = new StickyFooter(
      this.photographer.price,
      this.countTotal()
    );
  }

  render() {
    this.compEl.appendChild(this.sortBtnDropdown.render());
    this.compEl.appendChild(this.portfolioGrid.render());
    this.compEl.appendChild(this.stickyFooter.render());
    return this.compEl;
  }

  countTotal() {
    return this.portfolio.reduce((sum, media) => sum + media.likes, 0);
  }

  update() {
    const newCount = this.countTotal();
    this.stickyFooter.updateTotal(newCount);
  }

  updateGrid(sortedPortfolio) {
    const portfolioGrid = document.querySelector(".grid");
    portfolioGrid.remove();
    this.compEl.appendChild(
      new PortfolioGrid(sortedPortfolio, this.update.bind(this)).render()
    );
  }
}

export default PortfolioSection;
