import mediaFactory from "../utils/mediaFactory.js";

class PortfolioCard {
  constructor(updateTotal, item, portfolio, index) {
    this.updateTotal = updateTotal;
    this.item = item;
    this.portfolio = portfolio;
    this.index = index;
    this.btn = document.createElement("button");
    this.btn.classList.add("like-btn");
    this.btn = document.createElement("button");
    this.btn.classList.add("like-btn");
    this.btn.setAttribute("aria-label", "Likes");
    this.btn.setAttribute("role", "button");
    this.btn.setAttribute("tabindex", "0");
    this.btn.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -3 26 25">
    <path d="M12 21.35l-1.45-1.32C4.53 14.75 0 11.58 0 7.77 0 4.46 2.69 2 6 2c1.93 0 3.68.99 4.71 2.5C12.32 2.99 14.07 2 16 2c3.31 0 6 2.46 6 5.77 0 3.81-4.53 6.98-10.55 12.26L12 21.35z"/>
  </svg>`;
    this.total = document.createElement("span");
    this.total.classList.add("total");
    this.total.textContent = `${this.item.likes}`;
    this.isLiked = false;
    this.listenForLike();
  }
  render() {
    const { title } = this.item;
    const mediaCardContainer = document.createElement("figure");
    const anchorEl = document.createElement("a");
    anchorEl.setAttribute("href", "#!");
    anchorEl.classList.add("lightbox-mode");
    const mediaEl = mediaFactory(this.item);
    anchorEl.appendChild(mediaEl);
    mediaEl.setAttribute("alt", `${title}, grand format`);
    const lightboxData = {
      portfolioData: this.portfolio,
      selectedIndex: this.index,
    };
    anchorEl.dataset.lightboxData = JSON.stringify(lightboxData);

    mediaCardContainer.appendChild(anchorEl);
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    const likesContainer = document.createElement("div");
    likesContainer.classList.add("likes");
    likesContainer.appendChild(this.total);
    likesContainer.appendChild(this.btn);
    textContainer.appendChild(titleElement);
    textContainer.appendChild(likesContainer);
    mediaCardContainer.appendChild(textContainer);
    return mediaCardContainer;
  }

  listenForLike() {
    this.btn.addEventListener("click", (event) => {
      event.preventDefault();
      if (this.isLiked) {
        this.item.likes--;
      } else {
        this.item.likes++;
      }
      this.isLiked = !this.isLiked;
      this.btn.querySelector("svg").classList.toggle("heart-filled");
      this.total.textContent = `${this.item.likes}`;
      this.updateTotal();
    });
  }
}

export default PortfolioCard;
