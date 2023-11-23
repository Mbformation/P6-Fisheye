function createModal() {
  function displayModal(btnSelector, modalSelector) {
    btnSelector.addEventListener("click", () => {
      modalSelector.style.display = "block";
    });
  }

  function closeModal(btnSelector, modalSelector) {
    btnSelector.addEventListener("click", () => {
      modalSelector.style.display = "none";
    });
  }
}
export default createModal;
