const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let positionX = 0,
  positionY = 0;
const gridSize = 20,
  tileCount = 20;
function keyPush(evt) {
  switch (evt.keyCode) {
    case 37:
      positionX += -1;
      positionY += 0;
      break;
    case 38:
      positionX += 0;
      positionY += -1;
      break;
    case 39:
      positionX += 1;
      positionY += 0;
      break;
    case 40:
      positionX += 0;
      positionY += 1;
      break;
  }
}

function game() {
  // 배경
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 뱀
  ctx.fillStyle = "lime";
  ctx.fillRect(
    positionX * gridSize,
    positionY * gridSize,
    gridSize - 2,
    gridSize - 2
  );

  if (positionX < 0) {
    positionX = tileCount - 1;
  }
  if (positionX > tileCount - 1) {
    positionX = 0;
  }
  if (positionY < 0) {
    positionY = tileCount - 1;
  }
  if (positionY > tileCount - 1) {
    positionY = 0;
  }
}

window.onload = () => {
  document.addEventListener("keydown", keyPush);

  setInterval(game, 1000 / 15);
};
