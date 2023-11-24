class PhotographerBanner {
  constructor(photographer) {
    this.photographer = photographer;
  }
  render() {
    const banner = document.createElement("div");
    banner.classList.add("wrapper");
    const { name, portrait, city, country, tagline } = this.photographer;
    const picture = `assets/photographers/${portrait}`;
    const textContainer = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = name;
    const location = document.createElement("span");
    location.classList.add("location");
    const textWrapper = document.createElement("p");
    location.textContent = `${city}, ${country}`;
    const moto = document.createElement("span");
    moto.classList.add("moto");
    moto.textContent = tagline;
    textWrapper.appendChild(location);
    textWrapper.appendChild(moto);
    textContainer.appendChild(title);
    textContainer.appendChild(textWrapper);
    const container = document.createElement("div");
    container.classList.add("container");
    const btnElement = document.createElement("button");
    btnElement.classList.add("contact_button");
    btnElement.textContent = "Contactez-moi";

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", picture);
    container.appendChild(btnElement);
    container.appendChild(imgElement);
    banner.appendChild(textContainer);
    banner.appendChild(container);
    return banner;
  }
}

export default PhotographerBanner;
