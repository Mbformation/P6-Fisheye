import FormInput from "./FormInput.js";
import SubmitBtn from "./SubmitBtn.js";

// Composant Form
class Form {
  constructor() {
    //instanciation de chaque composant input
    this.fields = [
      new FormInput("input", "first-name", "Prénom", true),
      new FormInput("input", "last-name", "Nom", true),
      new FormInput("input", "email", "Email", true),
      new FormInput("textarea", "message", "Message", true),
    ];

    this.submitBtn = new SubmitBtn(this).render();
  }

  render() {
    // render les inputs et le submit button
    const componentEl = document.createElement("form");
    componentEl.classList.add("contact-form");
    const inputsEl = this.renderInputs();
    componentEl.appendChild(inputsEl);
    componentEl.appendChild(this.submitBtn);
    return componentEl;
  }

  submit() {
    // check s'il y avait des messages d'erreur déjà créés pour les enlever
    document.querySelectorAll(".error-message").forEach((e) => {
      e.remove();
    });
    // check si le formulaire et valide
    if (!this.isValid()) {
      alert("Formulaire incomplet");
      return;
    }
    // crée le payload avec infos des inputs
    const payload = {};
    this.fields.forEach((field) => {
      payload[field.id] = field.value;
    });
    //affiche le payload
    console.log(payload);
  }

  isValid() {
    let isValid = true;
    let count = 0;
    this.fields.forEach((field) => {
      if (!field.isValid()) {
        field.createError(); // ici on affiche les messages d'erreur
        isValid = false;
        count++;
      }
    });

    return isValid;
  }

  renderInputs() {
    // render les différents inputs
    const el = document.createElement("div");
    el.classList.add("inputs-wrapper");

    this.fields.forEach((field) => {
      const fieldEl = field.render();
      el.appendChild(fieldEl);
    });

    return el;
  }
}

export default Form;
