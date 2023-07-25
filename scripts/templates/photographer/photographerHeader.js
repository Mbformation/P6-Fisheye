function photographerHeader(photographer) {
  const { name, portrait, id, city, country, tagline, price } = photographer;
  const picture = `assets/photographers/${portrait}`;
  const container = document.createElement("div");
  container.innerHTML = `
    <h1>${name}</h1>
    <p>
        <span class="location">${city}, ${country}</span>
        <span class="moto">${tagline}</span>
        <span class="price">${price}€/jour</span></p>
`;
  const btnElement = document.createElement("button");
  btnElement.classList.add("contact_button");
  btnElement.createAttribute = 'onclick="displayModal()';
  btnElement.textContent = "Contactez-moi";
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", picture);
  return { container, btnElement, imgElement };
}

export default photographerHeader;
