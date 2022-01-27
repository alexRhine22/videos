const openVideoModalButtons =
  document.getElementsByClassName("modal-video__btn");
const closeVideoModaLButtons = document.getElementsByClassName(
  "modal-video__close-btn"
);

const openVideoModal = (e) => {
  const btnClicked = e.currentTarget;
  const modalIDtoOpen = btnClicked.getAttribute("aria-controls");
  const modalToOpen = document.getElementById(modalIDtoOpen);
  modalToOpen.classList.add("active");
};

const closeVideoModal = (e) => {
  const btnClicked = e.currentTarget;
  const modalIDtoOpen = btnClicked.getAttribute("aria-controls");
  const modalToOpen = document.getElementById(modalIDtoOpen);
  modalToOpen.classList.remove("active");
};

for (let i = 0; i < openVideoModalButtons.length; i++) {
  const openBtn = openVideoModalButtons[i];
  const closeBtn = closeVideoModaLButtons[i];
  openBtn.addEventListener("click", openVideoModal);
  closeBtn.addEventListener("click", closeVideoModal);
}
