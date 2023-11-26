class SubmitBtn {
  constructor(form) {
    this.form = form;
    this.componentEl = document.createElement("button");
  }

  render() {
    this.componentEl.classList.add("submit_btn");
    this.componentEl.type = "submit";
    this.componentEl.textContent = "Envoyer";

    this.submit();

    return this.componentEl;
  }

  submit() {
    this.componentEl.addEventListener("click", (event) => {
      event.preventDefault();
      this.form.submit();
    });
  }
}

export default SubmitBtn;
