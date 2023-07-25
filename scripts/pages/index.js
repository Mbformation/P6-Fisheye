import photographerCard from "../templates/photographer/photographerCard.js";
import getData from "../utils/getData.js";

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographers_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerCard(photographer);
    photographersSection.appendChild(photographerModel);
  });
}

async function init() {
  const { photographers } = await getData();
  displayData(photographers);
}

init();
