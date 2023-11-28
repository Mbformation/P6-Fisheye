// Factory qui est utilisée pour créer les élements du dom
// image ou vidéo. Appelée à la fois dans lightbox et portfolio
function mediaFactory(item) {
  const { photographerId, image, video } = item;
  const picture = `assets/photographers/${photographerId}/${image}`;
  const vid = `assets/photographers/${photographerId}/${video}`;
  const hasVideo = "video" in item;

  if (hasVideo) {
    const videoElement = document.createElement("video");
    videoElement.setAttribute("alt", `${item.title}`);
    videoElement.src = vid;

    return videoElement;
  }
  const imageElement = document.createElement("img");
  imageElement.src = picture;
  imageElement.setAttribute("alt", `${item.title}`);

  return imageElement;
}

export default mediaFactory;
