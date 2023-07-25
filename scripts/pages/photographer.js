import photographerHeader from "../templates/photographer/photographerHeader.js";
import mediaTemplate from "../templates/media.js";
import getData from "../utils/getData.js";
import getId from "../utils/getId.js";

async function displayPhotographer(photographers) {
  const photographerSection = document.querySelector(".photographer_section");
  const id = getId();
  const photographer = photographers.find((p) => p.id == parseInt(id));
  const { container, btnElement, imgElement } =
    photographerHeader(photographer);
  photographerSection.appendChild(container);
  photographerSection.appendChild(btnElement);
  photographerSection.appendChild(imgElement);
}

async function displayMedia(media) {
  const id = getId();
  const portfolio = media.filter((p) => p.photographerId == parseInt(id));
  const portfolioSection = document.querySelector(".portfolio_section");
  portfolio.forEach((work) => {
    const mediaModel = mediaTemplate(work);
    const mediaCard = mediaModel.getMediaForPortfolio();
    portfolioSection.appendChild(mediaCard);
  });
}

async function init() {
  const { photographers } = await getData();
  displayPhotographer(photographers);
  const { media } = await getData();
  displayMedia(media);
}

init();
