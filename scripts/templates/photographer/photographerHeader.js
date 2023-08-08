function photographerHeader(photographer) {
  const { name, portrait, id, city, country, tagline, price } = photographer;
  const picture = `assets/photographers/${portrait}`;
  const textContainer = document.createElement("div");
  textContainer.innerHTML = `
    <h1>${name}</h1>
    <p>
      <span class="location">${city}, ${country}</span>
      <span class="moto">${tagline}</span>
    </p>
`;
  const container = document.createElement("div");
  container.classList.add("container");
  const btnElement = document.createElement("button");
  btnElement.classList.add("contact_button");
  btnElement.setAttribute("onclick", "displayModal()");
  btnElement.textContent = "Contactez-moi";
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", picture);
  container.appendChild(btnElement);
  container.appendChild(imgElement);
  return { textContainer, container };
}

export default photographerHeader;
