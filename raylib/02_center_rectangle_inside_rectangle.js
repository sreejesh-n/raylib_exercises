const r = require("raylib");

const windowHeight = 600;
const windowWidth = 800;
const heightOfRectangle1 = 400;
const widthOfRectangle1 = 500;
const heightOfRectangle2 = 200;
const widthOfRectangle2 = 250;

r.InitWindow(windowWidth, windowHeight, "Rectangle inside Rectangle");
r.SetTargetFPS(60);

function centerRectangle(windowHeight, windowWidth, height, width, color) {
  const posX = windowWidth / 2 - width / 2;
  const posY = windowHeight / 2 - height / 2;

  r.DrawRectangle(posX, posY, width, height, color);
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();

  r.ClearBackground(r.BLUE);
  centerRectangle(
    windowHeight,
    windowWidth,
    heightOfRectangle1,
    widthOfRectangle1,
    r.WHITE,
  );
  centerRectangle(
    windowHeight,
    windowWidth,
    heightOfRectangle2,
    widthOfRectangle2,
    r.RED,
  );
  r.EndDrawing();
}

r.CloseWindow();
