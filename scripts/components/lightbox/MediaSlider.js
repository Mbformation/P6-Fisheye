class MediaSlider {
  constructor(previousSlideEl, currentSlideEl, nextSlideEl, currentSlideName) {
    this.previousSlideEl = previousSlideEl;
    this.previousSlideEl.classList.add("previous-media");
    this.currentSlideEl = currentSlideEl;
    this.currentSlideEl.classList.add("current-media");
    this.nextSlideEl = nextSlideEl;
    this.nextSlideEl.classList.add("next-media");
    this.currentSlideName = currentSlideName;
    this.compEl = document.createElement("div");
    this.compEl.classList.add("media-slider");
    this.slidesContainer = document.createElement("div");
    this.slidesContainer.classList.add("slide-container");
  }

  render() {
    this.addControlsAttribute(this.currentSlideEl);
    this.slidesContainer.appendChild(this.previousSlideEl);
    this.slidesContainer.appendChild(this.currentSlideEl);
    this.slidesContainer.appendChild(this.nextSlideEl);
    this.compEl.appendChild(this.slidesContainer);
    this.compEl.appendChild(this.currentSlideName);
    return this.compEl;
  }

  update(previousSlideEl, currentSlideEl, nextSlideEl, currentSlideName) {
    while (this.slidesContainer.firstChild) {
      this.slidesContainer.removeChild(this.slidesContainer.firstChild);
    }
    while (this.compEl.firstChild) {
      this.compEl.removeChild(this.compEl.firstChild);
    }
    previousSlideEl.classList.add("previous-media");
    currentSlideEl.classList.add("current-media");
    nextSlideEl.classList.add("next-media");
    this.addControlsAttribute(currentSlideEl);
    this.slidesContainer.appendChild(previousSlideEl);
    this.slidesContainer.appendChild(currentSlideEl);
    this.slidesContainer.appendChild(nextSlideEl);
    this.compEl.appendChild(this.slidesContainer);
    this.compEl.appendChild(currentSlideName);
  }
  addControlsAttribute(element) {
    if (element instanceof HTMLVideoElement) {
      element.setAttribute("controls", "");
    }
  }
}

export default MediaSlider;
