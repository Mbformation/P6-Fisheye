import PhotographerCard from "../PhotographerCard.js";

class PhotographersGrid {
  constructor(cardsData) {
    this.cardsData = cardsData;
    this.cardsContainer = document.createElement("div");
    this.cardsContainer.classList.add("grid");
    this.template = new PhotographerCard();
  }
  render() {
    this.cardsData.forEach((cardData) => {
      this.cardsContainer.appendChild(this.template.render(cardData));
    });
    return this.cardsContainer;
  }
}

export default PhotographersGrid;
