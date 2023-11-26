import FormInput from "./FormInput.js";
import SubmitBtn from "./SubmitBtn.js";

class Form {
  constructor() {
    this.fields = [
      new FormInput("input", "first-name", "Prénom", true),
      new FormInput("input", "last-name", "Nom", true),
      new FormInput("input", "email", "Email", true),
      new FormInput("textarea", "message", "Message", true),
    ];

    this.submitBtn = new SubmitBtn(this).render();
  }

  render() {
    const componentEl = document.createElement("form");
    componentEl.classList.add("contact_form");
    const inputsEl = this.renderInputs();
    componentEl.appendChild(inputsEl);
    componentEl.appendChild(this.submitBtn);
    return componentEl;
  }

  submit() {
    if (!this.isValid()) {
      alert("error");
      return;
    }

    const payload = {};
    this.fields.forEach((field) => {
      payload[field.id] = field.value;
    });

    console.log(payload);
  }

  isValid() {
    let isValid = true;
    let count = 0;
    this.fields.forEach((field) => {
      if (!field.isValid()) {
        field.createError();
        isValid = false;
        count++;
      }
    });

    return isValid;
  }

  renderInputs() {
    const el = document.createElement("div");
    el.classList.add("inputs_wrapper");

    this.fields.forEach((field) => {
      const fieldEl = field.render();
      el.appendChild(fieldEl);
    });

    return el;
  }
}

export default Form;
