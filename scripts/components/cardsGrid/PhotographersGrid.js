import PhotographerCard from "../PhotographerCard.js";

// La grille qui contient les cards de photographes
class PhotographersGrid {
  constructor(cardsData) {
    this.cardsData = cardsData;
    this.cardsContainer = document.createElement("div");
    this.cardsContainer.classList.add("grid");
    this.template = new PhotographerCard();
  }
  render() {
    // itérer sur chaque carte et lui appliquer un template
    this.cardsData.forEach((cardData) => {
      this.cardsContainer.appendChild(this.template.render(cardData));
    });
    return this.cardsContainer;
  }
}

export default PhotographersGrid;
