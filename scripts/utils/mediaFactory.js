function mediaFactory(item) {
  const { photographerId, image, video } = item;
  const picture = `assets/photographers/${photographerId}/${image}`;
  const vid = `assets/photographers/${photographerId}/${video}`;
  const hasVideo = "video" in item;

  if (hasVideo) {
    const videoElement = document.createElement("video");
    videoElement.src = vid;

    return videoElement;
  }
  const imageElement = document.createElement("img");
  imageElement.src = picture;

  return imageElement;
}

export default mediaFactory;
