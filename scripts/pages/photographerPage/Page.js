import Header from "../../components/header/HeaderModel.js";
import PhotographerSection from "./PhotographerSection.js";
import PortfolioSection from "./PortfolioSection.js";
import ModalLightbox from "../../components/modal/ModalLightbox.js";
import Lightbox from "../../components/lightbox/Lightbox.js";
import ModalForm from "../../components/modal/ModalForm.js";
import Form from "../../components/form/Form.js";

// Composant Page de la page photographer
class Page {
  constructor(photographer, portfolio) {
    this.photographer = photographer;
    this.portfolio = portfolio;
    this.page = document.querySelector(".photographer-page");
    this.main = document.createElement("main");
    this.main.classList.add("main");
    this.header = new Header();
  }

  render() {
    this.page.appendChild(this.header.render());
    this.main.appendChild(new PhotographerSection(this.photographer).render());
    this.main.appendChild(
      new PortfolioSection(this.portfolio, this.photographer).render()
    );
    this.page.appendChild(this.main);
    return this.page;
  }
  // Les différents listeners sur la page pour actualiser d'autres
  // composants
  listenForUpdate() {
    this.page.addEventListener("click", (event) => {
      let el = event.target;
      if (
        event.target.nodeName === "IMG" ||
        event.target.nodeName === "VIDEO"
      ) {
        el = event.target.closest("a");
      }

      if (el.classList.contains("lightbox-mode")) {
        const { portfolioData, selectedIndex } = JSON.parse(
          el.dataset.lightboxData
        );
        const currentModal = document.querySelector(".modal");
        if (currentModal) {
          currentModal.remove();
        }
        const lightbox = new Lightbox(portfolioData, selectedIndex);
        this.page.appendChild(
          new ModalLightbox(lightbox.render(), "modal-lightbox").render()
        );
        document.querySelector(".previous").focus();
      } else if (event.target.closest(".contact-button")) {
        const form = new Form();
        this.page.appendChild(
          new ModalForm(
            form.render(),
            "modal-form",
            this.photographer.name
          ).render()
        );
        form.fields[0].el.querySelector("input").focus();
      }
    });
  }
}

export default Page;
