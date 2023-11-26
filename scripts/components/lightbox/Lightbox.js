import SlideBtn from "./LightboxBtn.js";
import MediaSlider from "./MediaSlider.js";
import mediaFactory from "../../utils/mediaFactory.js";
import moveIndex from "../../utils/moveIndex.js";

class Lightbox {
  constructor(portfolio, selectedIndex) {
    this.portfolio = portfolio;
    this.currentIndex = selectedIndex;
    this.currentSlideName = document.createElement("h2");
    this.currentSlideName.classList.add("media-name");
    this.currentSlideName.textContent = `${
      this.portfolio[this.currentIndex].title
    }`;
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
      this.nextSlideEl,
      this.currentSlideName
    );
    this.nextBtn = new SlideBtn(this, +1);
    this.compEl = document.createElement("div");
    this.compEl.classList.add("lightbox-wrapper");
  }

  render() {
    this.compEl.appendChild(this.previousBtn.render());
    this.compEl.appendChild(this.mediaSlider.render());
    this.compEl.appendChild(this.nextBtn.render());
    return this.compEl;
  }

  update() {
    const newCurrentElName = document.createElement("h2");
    newCurrentElName.classList.add("media-name");
    newCurrentElName.textContent = `${this.portfolio[this.currentIndex].title}`;
    this.mediaSlider.update(
      mediaFactory(
        this.portfolio[moveIndex(-1, this.currentIndex, this.portfolio.length)]
      ),
      mediaFactory(this.portfolio[this.currentIndex]),
      mediaFactory(
        this.portfolio[moveIndex(+1, this.currentIndex, this.portfolio.length)]
      ),
      newCurrentElName
    );
  }
}
export default Lightbox;
