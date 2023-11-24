import CardsGrid from "../../components/CardsGrid.js";
import PortfolioCard from "../../components/PortfolioCard.js";
import StickyFooter from "../../components/StickyFooter.js";

class PortfolioSection {
  constructor(portfolio, photographer) {
    this.portfolio = portfolio;
    this.photographer = photographer;
    this.compEl = document.createElement("section");
    this.compEl.classList.add("portfolio");
    this.portfolioCard = new PortfolioCard(this.updateTotal); // faire passer les méthodes dans PortfolioCard
    this.stickyFooter = new StickyFooter(
      this.photographer.price,
      this.countTotal()
    );
  }

  render() {
    this.compEl.appendChild(
      new CardsGrid(this.portfolio, this.portfolioCard).render()
    );
    this.compEl.appendChild(this.stickyFooter.render());
    this.listenForLike();
    return this.compEl;
  }

  listenForLike() {
    this.compEl.addEventListener("click", (event) => {
      if (event.target.closest(".like-btn svg")) {
        let previousLikes = event.target.closest(".like-btn").dataset.likes;
        console.log(previousLikes);
        let isLiked = false;
        if (isLiked) {
          newLikes = previousLikes--;
        } else {
          newLikes = previousLikes++;
        }
        isLiked = !isLiked;
        this.portfolioCard.updateCount(newLikes);
      }
    });
  }

  countTotal() {
    return this.portfolio.reduce((sum, media) => sum + media.likes, 0);
  }

  updateTotal() {
    this.countTotal();
    this.portfolioCard.updateTotal();
    this.stickyFooter.updateTotal();
  }
}

export default PortfolioSection;
