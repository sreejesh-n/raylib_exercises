const r = require("raylib");

const windowWidth = 1080;
const windowHeight = 800;
const heightOfRectangle1 = 250;
const widthOfRectangle1 = 250;
const heightOfRectangle2 = 150;
const widthOfRectangle2 = 150;
let outerRectPosX = 0;
let outerRectPosY = (windowHeight - heightOfRectangle1) / 2;
let increament = 2;

r.InitWindow(windowWidth, windowHeight, "Rectangle inside Rectangle");
r.SetTargetFPS(60);

function center(outerRectangleSize, innerRectangleSize, position) {
  return (outerRectangleSize - innerRectangleSize) / 2 + position;
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  r.DrawRectangle(
    outerRectPosX,
    outerRectPosY,
    widthOfRectangle1,
    heightOfRectangle1,
    r.WHITE,
  );

  const innerRectPosX = center(
    widthOfRectangle1,
    widthOfRectangle2,
    outerRectPosX,
  );
  const innerRectPosY = center(
    heightOfRectangle1,
    heightOfRectangle2,
    outerRectPosY,
  );
  r.DrawRectangle(
    innerRectPosX,
    innerRectPosY,
    widthOfRectangle2,
    heightOfRectangle2,
    r.RED,
  );

  if (outerRectPosX === windowWidth - widthOfRectangle1) {
    increament *= -1;
  }

  if (outerRectPosX === 0) {
    increament = 2;
  }

  outerRectPosX += increament;

  r.EndDrawing();
}

r.CloseWindow();
