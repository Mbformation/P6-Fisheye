class SubmitBtn {
  constructor(form) {
    this.form = form;
    this.componentEl = document.createElement("button");
  }

  render() {
    this.componentEl.classList.add("submit-btn");
    this.componentEl.type = "submit";
    this.componentEl.textContent = "Envoyer";

    this.submit();
    this.listenFocus();
    return this.componentEl;
  }

  submit() {
    this.componentEl.addEventListener("click", (event) => {
      event.preventDefault();
      this.form.submit();
    });
  }

  listenFocus() {
    this.componentEl.addEventListener("keydown", function (event) {
      if (event.key === "Tab" && !event.shiftKey) {
        event.preventDefault();
        const closeBtn = document.querySelector(".close-modal");
        closeBtn.focus();
      }
    });
  }
}

export default SubmitBtn;
