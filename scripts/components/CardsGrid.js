class CardsGrid {
  constructor(cardsData, template) {
    this.cardsData = cardsData;
    this.template = template;
    this.cardsContainer = document.createElement("div");
    this.cardsContainer.classList.add("grid");
  }
  render() {
    this.cardsData.forEach((cardData) => {
      this.cardsContainer.appendChild(this.template.render(cardData));
    });
    return this.cardsContainer;
  }
}

export default CardsGrid;
