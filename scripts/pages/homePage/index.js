import getFromJson from "./../../utils/getFromJson.js";
import Page from "./Page.js";

async function init() {
  const { photographers } = await getFromJson("/data/photographers.json");
  const homePage = new Page(photographers);
  homePage.render();
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});
