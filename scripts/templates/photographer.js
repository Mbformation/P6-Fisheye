function photographerTemplate(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const h3City = document.createElement("h3");
    h3City.textContent = city;
    const h3Country = document.createElement("h3");
    h3Country.textContent = country;
    const pTag = document.createElement("p");
    pTag.textContent = tagline;
    const pPrice = document.createElement("p");
    pPrice.textContent = `${price} €`;
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3City);
    article.appendChild(h3Country);
    article.appendChild(pTag);
    article.appendChild(pPrice);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
