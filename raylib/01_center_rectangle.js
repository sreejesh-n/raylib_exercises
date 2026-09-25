const r = require("raylib");

const windowHeight = 600;
const windowWidth = 800;
const height = 350;
const width = 300;

r.InitWindow(windowWidth, windowHeight, "Center Rectangle");
r.SetTargetFPS(60);

function centerRectangle(windowWidth, windowHeight, height, width, color) {
  let posX = windowWidth / 2 - width / 2;
  let posY = windowHeight / 2 - height / 2;

  r.DrawRectangle(posX, posY, width, height, color);
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();

  r.ClearBackground(r.BLUE);
  centerRectangle(windowWidth, windowHeight, height, width, r.WHITE);

  r.EndDrawing();
}

r.CloseWindow();
