import photographerHeader from "../templates/photographer/photographerHeader.js";
import getPortfolioCard from "../templates/media/portfolioCard.js";
import getStickyFooter from "../templates/stickyFooter.js";
import getData from "../utils/getData.js";
import getUrlId from "../utils/getUrlId.js";
import listenToSortBtn from "../templates/sortButton.js";

async function displayPhotographer(photographers) {
  const photographerWrapper = document.querySelector(".wrapper");
  const id = getUrlId();
  const photographer = photographers.find((p) => p.id == parseInt(id));
  const { textContainer, container } = photographerHeader(photographer);
  photographerWrapper.appendChild(textContainer);
  photographerWrapper.appendChild(container);
}

async function displaySortBtn(media) {
  const id = getUrlId();
  const portfolio = media.filter((p) => p.photographerId == parseInt(id));
}

async function displayMedia(media) {
  const id = getUrlId();
  const portfolio = media.filter((p) => p.photographerId == parseInt(id));
  const portfolioSection = document.querySelector(".portfolio_section");
  portfolio.forEach((work) => {
    const mediaCard = getPortfolioCard(work);
    portfolioSection.appendChild(mediaCard);
  });
}

async function displayStickyFooter(photographers, media) {
  const id = getUrlId();
  const photographer = photographers.find((p) => p.id == parseInt(id));
  const portfolio = media.filter((p) => p.photographerId == parseInt(id));
  const { totalLikesElement, priceElement } = getStickyFooter(
    photographer,
    portfolio
  );
  const stickyFooterElement = document.querySelector(".sticky_footer");
  stickyFooterElement.appendChild(totalLikesElement);
  stickyFooterElement.appendChild(priceElement);
}

async function init() {
  const { photographers, media } = await getData();
  displayPhotographer(photographers);
  displaySortBtn(media);
  listenToSortBtn();
  displayMedia(media);
  displayStickyFooter(photographers, media);
}

init();
