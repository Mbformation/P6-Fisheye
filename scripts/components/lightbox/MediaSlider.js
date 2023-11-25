class MediaSlider {
  constructor(previousSlideEl, currentSlideEl, nextSlideEl) {
    this.previousSlideEl = previousSlideEl;
    this.previousSlideEl.classList.add("previous_media");
    this.currentSlideEl = currentSlideEl;
    this.currentSlideEl.classList.add("current_media");
    this.nextSlideEl = nextSlideEl;
    this.nextSlideEl.classList.add("next_media");
    this.slideContainer = document.createElement("div");
    this.slideContainer.classList.add("slide_container");
  }

  render() {
    this.slideContainer.appendChild(this.previousSlideEl);
    this.slideContainer.appendChild(this.currentSlideEl);
    this.slideContainer.appendChild(this.nextSlideEl);
    return this.slideContainer;
  }

  update(previousSlideEl, currentSlideEl, nextSlideEl) {
    previousSlideEl.classList.add("previous_media");
    currentSlideEl.classList.add("current_media");
    nextSlideEl.classList.add("next_media");
    while (this.slideContainer.firstChild) {
      this.slideContainer.removeChild(this.slideContainer.firstChild);
    }
    this.slideContainer.appendChild(previousSlideEl);
    this.slideContainer.appendChild(currentSlideEl);
    this.slideContainer.appendChild(nextSlideEl);
  }
}

export default MediaSlider;
