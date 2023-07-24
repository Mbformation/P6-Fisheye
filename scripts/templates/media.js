function mediaTemplate(work) {
  const { id, photographerId, title, image, likes, date, price } = work;
  const properties = Object.values(work);
  const fileName = properties[3];
  const fileType = fileName.split(".").pop().toLowerCase();
  const picture = `assets/photographers/${photographerId}/${fileName}`;
  function getMediaCard() {
    const mediaCardContainer = document.createElement("figure");
    switch (fileType) {
      case "jpg":
        mediaCardContainer.innerHTML = `<img src="${picture}"/> <h2>${title}</h2>`;
        break;
      case "png":
        mediaCardContainer.innerHTML = `<img src="${picture}"/> <h2>${title}</h2>`;
        break;
      case "mp4":
        mediaCardContainer.innerHTML = `<video src="${picture}" controls> </video> <h2>${title}</h2>`;
        break;
      default:
        break;
    }
    return mediaCardContainer;
  }
  return { getMediaCard };
}

export default mediaTemplate;
