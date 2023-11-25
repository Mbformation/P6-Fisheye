import mediaFactory from "../utils/mediaFactory.js";

class PortfolioCard {
  constructor(updateTotal, item, portfolio, index) {
    this.updateTotal = updateTotal;
    this.item = item;
    this.portfolio = portfolio;
    this.index = index;
    this.btn = document.createElement("button");
    this.btn.classList.add("like-btn");
    this.btn.innerHTML += `<svg class="heart" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>`;
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
    anchorEl.classList.add("lightbox-mode");
    const mediaEl = mediaFactory(this.item);
    anchorEl.appendChild(mediaEl);

    const lightboxData = {
      portfolioData: this.portfolio,
      selectedIndex: this.index,
    };
    mediaEl.dataset.lightboxData = JSON.stringify(lightboxData);

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
      event.target.closest("svg").classList.toggle("heart-filled");
      this.total.textContent = `${this.item.likes}`;
      this.updateTotal();
    });
  }
}

export default PortfolioCard;
