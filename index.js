const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.addEventListener("keydown", keyPush);

  setInterval(game, 1000 / 15);
};
