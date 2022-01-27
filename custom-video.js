const playVideoButtons = document.getElementsByClassName("custom-video__btn");

const handleCustomVideoButtonClick = (e) => {
  const btnClicked = e.currentTarget;
  const videoToPlayID = btnClicked.getAttribute("aria-controls");
  const videoToPlay = document.getElementById(videoToPlayID);

  if (typeof videoToPlay === "undefined" || videoToPlay === null) return;

  if (videoToPlay.hasAttribute("controls")) {
    videoToPlay.removeAttribute("controls");
  } else {
    videoToPlay.setAttribute("controls", "controls");
  }

  videoToPlay.play();
  btnClicked.classList.add("hidden");
};

for (let i = 0; i < playVideoButtons.length; i++) {
  const btn = playVideoButtons[i];
  btn.addEventListener("click", handleCustomVideoButtonClick);
}
