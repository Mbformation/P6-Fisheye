import getFromJson from "./../../utils/getFromJson.js";
import Page from "./Page.js";

// Cherche les données photographes pour la page d'accueil
// Instancie le composant de la page d'accueil
async function init() {
  const { photographers } = await getFromJson("data/photographers.json");
  const homePage = new Page(photographers);
  homePage.render();
}

// on attend que le html soit chargé pour executer init()
document.addEventListener("DOMContentLoaded", function () {
  init();
});
