// Composant bouton submit formulaire
class SubmitBtn {
  constructor(form) {
    this.form = form; // reçoit son parent pour appeler .submit()
    this.componentEl = document.createElement("button");
  }

  render() {
    this.componentEl.classList.add("submit-btn");
    this.componentEl.type = "submit";
    this.componentEl.textContent = "Envoyer";

    this.submit();
    this.focusToClose();
    return this.componentEl;
  }

  submit() {
    // ecoute sur le bouton pour appeler méthode submit()
    this.componentEl.addEventListener("click", (event) => {
      event.preventDefault();
      this.form.submit();
    });
  }

  focusToClose() {
    // navigation clavier vers le bouton close
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
