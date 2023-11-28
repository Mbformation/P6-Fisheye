import getUrlData from "./getUrlData.js";

// Cherche l'id dans l'url
function getId() {
  return getUrlData("id");
}

export default getId;
