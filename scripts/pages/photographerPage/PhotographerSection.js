import PhotographerBanner from "../../components/PhotographerBanner.js";

//Composant section photographe
class PhotographerSection {
  constructor(photographer) {
    this.photographer = photographer;
    this.compEl = document.createElement("section");
    this.compEl.classList.add("photographer");
    this.banner = new PhotographerBanner(this.photographer);
  }

  render() {
    this.compEl.appendChild(this.banner.render());
    return this.compEl;
  }
}

export default PhotographerSection;
