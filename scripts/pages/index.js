import photographerTemplate from "../templates/photographer.js";
import getData from "../templates/getData.js";

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographers_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const { photographers } = await getData();
  displayData(photographers);
}

init();
