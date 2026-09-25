const r = require("raylib");

const windowWidth = 1080;
const windowHeight = 800;
const sourceCenterX = 100;
const sourceCenterY = 100;
const target1CenterX = 500;
const target1CenterY = 400;
const target2CenterX = 700;
const target2CenterY = 100;

r.InitWindow(windowWidth, windowHeight, "Closer Target");
r.SetTargetFPS(60);

function createPoint(centerX, centerY, color) {
  const radious = 25;
  r.DrawCircle(centerX, centerY, radious, color);
}

function absolute(pos1, pos2) {
  return pos1 > pos2 ? pos1 - pos2 : pos2 - pos1;
}

function findCloser(
  sourceCenterX,
  sourceCenterY,
  target1CenterX,
  target1CenterY,
  target2CenterX,
  target2CenterY,
) {
  const differenceOftarget1X = absolute(sourceCenterX, target1CenterX);
  const differenceOftarget1Y = absolute(sourceCenterY, target1CenterY);
  const differenceOftarget2X = absolute(sourceCenterX, target2CenterX);
  const differenceOftarget2Y = absolute(sourceCenterY, target2CenterY);

  if (differenceOftarget1X < differenceOftarget2X) {
    if (differenceOftarget2Y < differenceOftarget1Y) return 2;

    return 1;
  } else {
    if (differenceOftarget1Y < differenceOftarget2Y) return 1;

    return 2;
  }
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  createPoint(sourceCenterX, sourceCenterY, r.BLUE);
  createPoint(target1CenterX, target1CenterY, r.RED);
  createPoint(target2CenterX, target2CenterY, r.GREEN);

  const target = findCloser(
    sourceCenterX,
    sourceCenterY,
    target1CenterX,
    target1CenterY,
    target2CenterX,
    target2CenterY,
  );

  const endPosX = target === 1 ? target1CenterX : target2CenterX;
  const endPosY = target === 1 ? target1CenterY : target2CenterY;

  r.DrawLine(sourceCenterX, sourceCenterY, endPosX, endPosY, r.BLACK);

  r.EndDrawing();
}

r.CloseWindow();
