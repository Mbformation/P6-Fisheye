import PortfolioCard from "../PortfolioCard.js";

// La grille qui contient les cards de media du portfolio
class PortfolioGrid {
  constructor(cardsData, update) {
    this.cardsData = cardsData;
    this.update = update;
    this.cardsContainer = document.createElement("div");
    this.cardsContainer.classList.add("grid");
    this.template = PortfolioCard;
  }

  render() {
    // itérer sur chaque carte et lui appliquer un template
    this.cardsData.forEach((cardData, index) => {
      const card = new this.template(
        this.update,
        cardData,
        this.cardsData,
        index
      );
      this.cardsContainer.appendChild(card.render());
    });
    return this.cardsContainer;
  }
}

export default PortfolioGrid;
