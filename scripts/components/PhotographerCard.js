class PhotographerCard {
  render(photographer) {
    const { name, portrait, id, city, country, tagline, price } = photographer;
    const picture = `assets/photographers/${portrait}`;
    const cardContainer = document.createElement("article");
    const link = document.createElement("a");
    link.href = `photographer.html?id=${id}`;
    link.setAttribute("tabindex", "0");
    link.innerHTML = `<img src="${picture}"/> <h2 arria-label="${name}">${name}</h2>`;
    const details = document.createElement("p");
    details.innerHTML = `<span class="location">${city}, ${country}</span>
        <span class="moto">${tagline}</span>
        <span class="price">${price}€/jour</span>`;
    cardContainer.appendChild(link);
    cardContainer.appendChild(details);
    return cardContainer;
  }
}

export default PhotographerCard;
