import moveIndex from "../../utils/moveIndex.js";

class SlideBtn {
  constructor(parentComponent, direction) {
    this.parent = parentComponent;
    this.direction = direction;
  }
  render() {
    const slideBtnEl = document.createElement("button");
    slideBtnEl.classList.add("lightbox-btn");
    let path = "";
    if (this.direction === +1) {
      path =
        "M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z";
      slideBtnEl.classList.add("next");
    } else if (this.direction === -1) {
      path =
        "M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z";
      slideBtnEl.classList.add("previous");
    }
    slideBtnEl.innerHTML =
      `<svg viewBox='0 0 30 48' xmlns='http://www.w3.org/2000/svg'><path d='` +
      path +
      `' fill=Currentcolor></svg>`;
    slideBtnEl.addEventListener("click", (e) => {
      e.preventDefault();
      this.parent.currentIndex = moveIndex(
        this.direction,
        this.parent.currentIndex,
        this.parent.portfolio.length
      );
      this.parent.update();
    });
    return slideBtnEl;
  }
}

export default SlideBtn;
