const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");
const container = document.querySelector(".modal-container");

/////-----> One way to do this:
// modalBtn.addEventListener("click", () => {
//   overlay.style.visibility = "visible";
////// this only works if there is no z-index on this class in css
// });

// closeBtn.addEventListener("click", () => {
//   overlay.style.visibility = "hidden";
// });

/////-----> Second way to do this:
modalBtn.addEventListener("click", () => {
  overlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open-modal");
});
