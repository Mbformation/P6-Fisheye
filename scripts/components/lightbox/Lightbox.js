import SlideBtn from "./LightboxBtn.js";
import MediaSlider from "./MediaSlider.js";
import mediaFactory from "../../utils/mediaFactory.js";
import moveIndex from "../../utils/moveIndex.js";

class Lightbox {
  constructor(portfolio, selectedIndex) {
    this.portfolio = portfolio;
    this.currentIndex = selectedIndex;
    this.previousSlideEl = mediaFactory(
      this.portfolio[moveIndex(-1, this.currentIndex, this.portfolio.length)]
    );
    this.currentSlideEl = mediaFactory(this.portfolio[this.currentIndex]);
    this.nextSlideEl = mediaFactory(
      this.portfolio[moveIndex(+1, this.currentIndex, this.portfolio.length)]
    );
    this.previousBtn = new SlideBtn(this, -1);
    this.mediaSlider = new MediaSlider(
      this.previousSlideEl,
      this.currentSlideEl,
      this.nextSlideEl
    );
    this.nextBtn = new SlideBtn(this, +1);
    this.compEl = document.createElement("div");
    this.compEl.classList.add("lightbox_wrapper");
    this.currentElTitle = document.createElement("h2");
    this.currentElTitle.classList.add("media-name");
    this.currentElTitle.textContent = `${
      this.portfolio[this.currentIndex].title
    }`;
  }

  render() {
    this.compEl.appendChild(this.previousBtn.render());
    this.compEl.appendChild(this.mediaSlider.render());
    this.compEl.appendChild(this.nextBtn.render());
    this.compEl.appendChild(this.currentElTitle);
    return this.compEl;
  }

  update() {
    this.mediaSlider.update(
      mediaFactory(
        this.portfolio[moveIndex(-1, this.currentIndex, this.portfolio.length)]
      ),
      mediaFactory(this.portfolio[this.currentIndex]),
      mediaFactory(
        this.portfolio[moveIndex(+1, this.currentIndex, this.portfolio.length)]
      )
    );
    const oldTitleElement = document.querySelector(".media-name");
    const newTitleElement = document.createElement("h2");
    newTitleElement.classList.add("media-name");
    newTitleElement.textContent = this.portfolio[this.currentIndex].title;

    this.compEl.replaceChild(newTitleElement, oldTitleElement);
  }
}
export default Lightbox;
