class SortBtnDropdown {
  constructor(updateGrid, portfolio) {
    this.updateGrid = updateGrid;
    this.portfolio = portfolio;
    this.compEl = document.createElement("div");
    this.compEl.classList.add("sort-btn");
    this.sortTitle = document.createElement("span");
    this.sortTitle.classList.add("sort-title");
    this.sortTitle.setAttribute("aria-label", "Trier le portfolio");
    this.sortTitle.textContent = "Trier par";
    this.sortTitle.setAttribute("id", "sort-by");
    this.currentBtn = document.createElement("button");
    this.currentBtn.classList.add("current-option");
    this.currentBtn.setAttribute("role", "button");
    this.currentBtn.setAttribute("aria-haspopup", "listbox");
    this.currentBtn.setAttribute("aria-expanded", "false");
    this.currentText = document.createElement("span");
    this.currentText.classList.add("current-title");
    this.currentText.textContent = "Popularité";
    this.currentBtn.appendChild(this.currentText);
    this.currentBtn.innerHTML += `<svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>`;
    this.listContainer = document.createElement("div");
    this.listContainer.classList.add("sort-option-list", "hide");
    this.listContainer.setAttribute("role", "listbox");
    this.listContainer.setAttribute("aria-activedescendant", "");
    this.btnPop = document.createElement("button");
    this.btnPop.classList.add("sort-option");
    this.btnPop.textContent = "Popularité";
    this.btnPop.setAttribute("id", "popularity");
    this.btnPop.setAttribute("role", "option");
    this.btnPop.setAttribute("aria-selected", "false");
    this.btnPop.setAttribute("aria-labelledby", `${this.sortTitle.id}`);
    this.btnPop.innerHTML += `<svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>`;
    this.btnDate = document.createElement("button");
    this.btnDate.classList.add("sort-option");
    this.btnDate.setAttribute("id", "date");
    this.btnDate.setAttribute("role", "option");
    this.btnDate.setAttribute("aria-selected", "false");
    this.btnDate.setAttribute("aria-labelledby", `${this.sortTitle.id}`);
    this.btnDate.textContent = "Date";
    this.btnTitle = document.createElement("button");
    this.btnTitle.classList.add("sort-option");
    this.btnTitle.setAttribute("id", "title");
    this.btnTitle.setAttribute("role", "option");
    this.btnTitle.setAttribute("aria-selected", "false");
    this.btnTitle.setAttribute("aria-labelledby", `${this.sortTitle.id}`);
    this.btnTitle.textContent = "Titre";
    this.btnOptions = [this.btnPop, this.btnDate, this.btnTitle];
    this.openDropdown();
    this.selectOption();
  }
  render() {
    const optionsWrapper = document.createElement("div");
    optionsWrapper.classList.add("options-wrapper");
    this.listContainer.appendChild(this.btnPop);
    this.listContainer.appendChild(this.btnDate);
    this.listContainer.appendChild(this.btnTitle);
    optionsWrapper.appendChild(this.currentBtn);
    optionsWrapper.appendChild(this.listContainer);
    this.compEl.appendChild(this.sortTitle);
    this.compEl.appendChild(optionsWrapper);
    return this.compEl;
  }

  openDropdown() {
    this.currentBtn.addEventListener("click", () => {
      this.listContainer.classList.remove("hide");
      this.currentBtn.classList.add("hide");
      this.currentBtn.setAttribute("aria-expanded", "true");
    });
  }

  selectOption() {
    this.btnOptions.forEach((button) => {
      button.addEventListener("click", () => {
        switch (button.textContent) {
          case "Popularité":
            this.portfolio.sort((a, b) => b.likes - a.likes);
            break;
          case "Date":
            this.portfolio.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
          case "Titre":
            this.portfolio.sort((a, b) => {
              if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;
            });
            break;
          default:
            break;
        }
        this.btnOptions.forEach((btn) => {
          btn.setAttribute("aria-selected", "false");
        });
        button.setAttribute("aria-selected", "true");
        this.listContainer.setAttribute(
          "aria-activedescendant",
          `${button.id}`
        );
        this.updateGrid(this.portfolio);
        this.currentText.textContent = button.textContent;
        this.currentBtn.replaceChild(
          this.currentText,
          this.currentBtn.firstChild
        );
        this.closeDropdown();
      });
    });
  }

  closeDropdown() {
    this.listContainer.classList.add("hide");
    this.currentBtn.classList.remove("hide");
    this.currentBtn.setAttribute("aria-expanded", "false");
  }
}

/*<div class="sort-btn">
  <span class="sort-title" aria-label="Sort by">Trier par</span>
  <div class="options-wrapper">
    <button class="current-option" role="button" aria-haspopup="listbox" aria-expanded="false">
      <span class="current-title">Popularité</span>
      <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
      </svg>
    </button>
    <div class="sort-option-list hide" role="listbox" aria-activedescendant="[ID_OF_SELECTED_OPTION]">
      <button class="sort-option" role="option" aria-selected="true" aria-labelledby="[ID_OF_INPUT_LABEL]">Popularité</button>
      <button class="sort-option" role="option" aria-selected="false" aria-labelledby="[ID_OF_INPUT_LABEL]">Date</button>
      <button class="sort-option" role="option" aria-selected="false" aria-labelledby="[ID_OF_INPUT_LABEL]">Titre</button>
    </div>
  </div>
</div> */
export default SortBtnDropdown;
