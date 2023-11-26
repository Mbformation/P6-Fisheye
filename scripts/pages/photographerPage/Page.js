import Header from "./../../components/Header.js";
import PhotographerSection from "./PhotographerSection.js";
import PortfolioSection from "./PortfolioSection.js";
import ModalLightbox from "../../components/modal/ModalLightbox.js";
import Lightbox from "../../components/lightbox/Lightbox.js";
import ModalForm from "../../components/modal/ModalForm.js";
import Form from "../../components/form/Form.js";

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

  listenForUpdate() {
    this.page.addEventListener("click", (event) => {
      if (event.target.closest(".lightbox-mode")) {
        const { portfolioData, selectedIndex } = JSON.parse(
          event.target.dataset.lightboxData
        );
        const currentModal = document.querySelector(".modal");
        if (currentModal) {
          currentModal.remove();
        }
        this.page.appendChild(
          new ModalLightbox(
            new Lightbox(portfolioData, selectedIndex).render(),
            "modal-lightbox"
          ).render()
        );
      } else if (event.target.closest(".contact-button")) {
        this.page.appendChild(
          new ModalForm(
            new Form().render(),
            "modal-form",
            this.photographer.name
          ).render()
        );
      }
    });
  }
}

export default Page;
