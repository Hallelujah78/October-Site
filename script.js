const hidden = document.querySelector("#hidden");
const hiddenButton = document.querySelector("#hidden-button");
const invisible = document.querySelector("#invisible");
const invisibleButton = document.querySelector("#invisible-button");

console.log(hidden);

const toggleHidden = () => {
  if (hidden.classList.contains("hidden")) {
    hidden.classList.remove("hidden");
  } else {
    hidden.classList.add("hidden");
  }
};

const toggleVisible = () => {
  if (invisible.classList.contains("invisible")) {
    invisible.classList.remove("invisible");
  } else {
    invisible.classList.add("invisible");
  }
};

hiddenButton.addEventListener("click", toggleHidden);
invisibleButton.addEventListener("click", toggleVisible);
