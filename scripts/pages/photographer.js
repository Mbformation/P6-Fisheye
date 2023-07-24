import photographerTemplate from "../templates/photographer.js";
import mediaTemplate from "../templates/media.js";
import getData from "../templates/getData.js";

async function displayData(photographers, media) {
  const photographerSection = document.querySelector(".photographers_section");
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const photographer = photographers.find((p) => p.id == parseInt(id));
  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  photographerSection.appendChild(userCardDOM);
  const portfolio = media.filter((p) => p.photographerId == parseInt(id));
  const portfolioSection = document.querySelector(".portfolio_section");
  console.log(portfolio);
  portfolio.forEach((work) => {
    const mediaModel = mediaTemplate(work);
    const mediaCard = mediaModel.getMediaCard();
    portfolioSection.appendChild(mediaCard);
  });
}

async function init() {
  const { photographers, media } = await getData();
  displayData(photographers, media);
}

init();
