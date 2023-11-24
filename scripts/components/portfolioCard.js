import mediaFactory from "../utils/mediaFactory.js";

class PortfolioCard {
  constructor(updateTotal) {
    this.updateTotal = updateTotal;
  }
  render(item) {
    const { title, likes } = item;
    const mediaCardContainer = document.createElement("figure");
    const anchorEl = document.createElement("a");
    anchorEl.classList.add("lightbox_mode");
    const mediaEl = mediaFactory(item);
    anchorEl.appendChild(mediaEl);
    mediaCardContainer.appendChild(anchorEl);
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    const likesContainer = document.createElement("div");
    likesContainer.classList.add("likes");
    const total = document.createElement("span");
    total.classList.add("total");
    total.textContent = `${likes}`;
    const btn = document.createElement("button");
    btn.classList.add("like-btn");
    btn.dataset.likes = JSON.stringify(likes);
    btn.innerHTML += `<svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`;
    likesContainer.appendChild(total);
    likesContainer.appendChild(btn);
    textContainer.appendChild(titleElement);
    textContainer.appendChild(likesContainer);
    mediaCardContainer.appendChild(textContainer);
    return mediaCardContainer;
  }
  updateCount(newTotal) {
    document.querySelector(".total").textContent = `${newTotal}`;
  }
}

export default PortfolioCard;

/*
const mediaCardContainer = document.createElement("figure");
  const anchorEl = document.createElement("a");
  anchorEl.classList.add("lightbox_mode");
  const mediaEl = mediaFactory(item);

  mediaEl.dataset.lightboxData = JSON.stringify(lightboxData);
  anchorEl.appendChild(mediaEl);

  mediaCardContainer.appendChild(anchorEl);

  const textContainer = document.createElement("div");
  textContainer.classList.add("text_container");

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const likeElement = renderLike(item, resetTotalLikes)

  textContainer.appendChild(titleElement);
  textContainer.appendChild(likeElement);

  mediaCardContainer.appendChild(textContainer);

  return mediaCardContainer;*/
