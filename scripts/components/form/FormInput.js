// Composant modèle pour un input

class FormInput {
  constructor(type, id, text, isRequired = false) {
    (this.type = type), (this.id = id);
    this.text = text;
    this.el = null;
    this.value = null;
    this.isRequired = isRequired;
  }

  render() {
    // render le html de l'input
    const wrapper = document.createElement("div");
    wrapper.classList.add("field-wrapper");

    const label = document.createElement("label");
    label.setAttribute("for", this.id);
    label.textContent = this.text;

    const fieldEl = document.createElement(this.type);
    fieldEl.setAttribute("id", `${this.id}`);

    switch (this.type) {
      case "input":
        fieldEl.setAttribute("type", "text");
        break;
      case "text-area":
        fieldEl.setAttribute("rows", "4");
        fieldEl.setAttribute("cols", "50");
        break;
    }

    wrapper.appendChild(label);
    wrapper.appendChild(fieldEl);

    this.el = wrapper;
    this.validateField(wrapper);

    return wrapper;
  }

  validateField() {
    this.el.addEventListener("input", (e) => {
      // écouter l'input
      this.value = e.target.value;
      this.removeError();

      // appeler isValid() et s'il retourne false on génère une erreur
      if (!this.isValid()) {
        this.createError();
      }
    });
  }

  isValid() {
    // si l'input est requis alors on check déjà sans regex
    if (this.isRequired && (!this.value || this.value.length === 0)) {
      return false;
    }
    // on check la regex
    return this.getRegex().test(this.value);
  }

  // code de manipulation du dom lorsqu'erreur ou s'il n'y a
  // plus d'erreur
  createError() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("error-message");
    wrapper.textContent = "Veuillez renseigner une réponse valide";
    this.el.closest(".field-wrapper").appendChild(wrapper);
  }

  removeError() {
    const errorEl = this.el.querySelector(".error-message");
    if (errorEl) {
      errorEl.remove();
    }
  }

  // on récupère la bonne regex en fonction de l'id de l'input
  getRegex() {
    switch (this.id) {
      case "first-name":
        return /^([A-Za-z]{2,})(?:[-'][A-Za-z]+)*$/;
      case "last-name":
        return /^([A-Za-z]{2,})(?:[-'][A-Za-z]+)*$/;
      case "email":
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      case "message":
        return /^.{1,200}$/;
      default:
        throw new Error("Ce type n'existe pas");
    }
  }
}

export default FormInput;
