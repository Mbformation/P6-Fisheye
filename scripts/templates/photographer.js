function photographerTemplate(photographer) {
  const { name, portrait, id, city, country, tagline, price } = photographer;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const userCardContainer = document.createElement("article");
    const userIdentity = document.createElement("a");
    userIdentity.href = `photographer.html?id=${id}`;
    userIdentity.innerHTML = `<img src="${picture}"/> <h2>${name}</h2>`;
    const userDetails = document.createElement("p");
    userDetails.innerHTML = `<span class="location">${city}, ${country}</span>
      <span class="moto">${tagline}</span>
      <span class="price">${price}€/jour</span>`;
    userCardContainer.appendChild(userIdentity);
    userCardContainer.appendChild(userDetails);
    return userCardContainer;
  }
  return { name, picture, getUserCardDOM };
}

export default photographerTemplate;
