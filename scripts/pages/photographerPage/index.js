import getId from "../../utils/getId.js";
import getFromJson from "./../../utils/getFromJson.js";
import Page from "./Page.js";

async function init() {
  const { photographers, media } = await getFromJson(
    "/data/photographers.json"
  );
  const id = getId("id");
  const portfolio = media
    .filter((p) => p.photographerId == parseInt(id))
    .map((item) => {
      item.hasBeenLiked = false;
      return item;
    });
  const photographer = photographers.find((p) => p.id == parseInt(id));
  const photographerPage = new Page(photographer, portfolio);
  photographerPage.render();
  photographerPage.listenForUpdate();
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});
