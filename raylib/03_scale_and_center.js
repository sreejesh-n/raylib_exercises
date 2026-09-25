const r = require("raylib");

const windowHeight = 600;
const windowWidth = 800;
const outerRectangleheight = 400;
const outerRectanglewidth = 600;
const innerRectangleHeightPercentage = 0.8;
const innerRectangleWidthPercentage = 0.8;

r.InitWindow(windowWidth, windowHeight, "Scale and Center");
r.SetTargetFPS(60);

function centerRectangle(windowWidth, windowHeight, width, height, color) {
  let posX = windowWidth / 2 - width / 2;
  let posY = windowHeight / 2 - height / 2;

  r.DrawRectangle(posX, posY, width, height, color);
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();

  r.ClearBackground(r.BLUE);
  centerRectangle(
    windowWidth,
    windowHeight,
    outerRectanglewidth,
    outerRectangleheight,
    r.WHITE,
  );

  const innerRectangleHeight =
    innerRectangleHeightPercentage * outerRectangleheight;
  const innerRectangleWidth =
    innerRectangleWidthPercentage * outerRectanglewidth;

  centerRectangle(
    windowWidth,
    windowHeight,
    innerRectangleWidth,
    innerRectangleHeight,
    r.RED,
  );

  r.EndDrawing();
}

r.CloseWindow();
