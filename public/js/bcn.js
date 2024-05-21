const terimaButton = document.getElementById("terimaButton");
const tolakButton = document.getElementById("tolakButton");
const popUp = document.getElementById("popUp");
const closePopUp = document.getElementById("closePopUp");

terimaButton.addEventListener("click", () => {
  popUp.style.display = "flex";
});

tolakButton.addEventListener("click", () => {
  const randomX = Math.floor(Math.random() * window.innerWidth - 40); // Adjust 100 according to your button width
  const randomY = Math.floor(Math.random() * window.innerHeight - 30); // Adjust 50 according to your button height

  tolakButton.style.position = "absolute";
  tolakButton.style.left = `${randomX}px`;
  tolakButton.style.top = `${randomY}px`;
});

closePopUp.addEventListener("click", () => {
  popUp.style.display = "none";
});
