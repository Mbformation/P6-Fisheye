import filterPortfolio from "../utils/filters.js";

function listenToSortBtn() {
  const currentBtn = document.querySelector(".current_sort_option");
  const sortList = document.querySelector(".sort_option_list");
  const btnOption = document.querySelectorAll(".sort_option");

  currentBtn.addEventListener("click", () => {
    sortList.classList.remove("hide");
    currentBtn.classList.add("hide");
  });

  btnOption.forEach((button) => {
    button.addEventListener("click", () => {
      const needle = button.getAttribute("data-id");
      const text = button.innerText;
      sortList.classList.add("hide");
      currentBtn.classList.remove("hide");
      currentBtn.querySelector(".current-text").innerText = text;
      filterPortfolio(needle);
    });
  });
}

export default listenToSortBtn;
