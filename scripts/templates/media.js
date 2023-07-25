function mediaTemplate(work) {
  const { id, photographerId, title, image, likes, date, price } = work;
  const properties = Object.values(work);
  const fileName = properties[3];
  const fileType = fileName.split(".").pop().toLowerCase();
  const picture = `assets/photographers/${photographerId}/${fileName}`;

  function getMediaForPortfolio() {
    const mediaCardContainer = document.createElement("figure");
    switch (fileType) {
      case "jpg":
        mediaCardContainer.innerHTML = `<img src="${picture}"/> <h2>${title}</h2>`;
        break;
      case "png":
        mediaCardContainer.innerHTML = `<img src="${picture}"/> <h2>${title}</h2>`;
        break;
      case "mp4":
        mediaCardContainer.innerHTML = `<video src="${picture}"</video> <h2>${title}</h2>`;
        break;
      default:
        break;
    }
    return mediaCardContainer;
  }
  function getMediaForLightbox() {}

  return { getMediaForPortfolio, getMediaForLightbox };
}

export default mediaTemplate;
