const r = require("raylib");
const e = require("./exercises");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(800, 600, "Objects In Raylib");
  r.SetTargetFPS(60);
}

function update() {
  // change the state
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  // Exercise 1
  //   const window = e.coloredWindow();

  //   r.DrawRectangleRec(window.rec, window.color);
  //   r.DrawRectangleLines(
  //     window.rec.x,
  //     window.rec.y,
  //     window.rec.width,
  //     window.rec.height,
  //     window.lineColor,
  //   );

  // Exercise 2
  const button = e.button();

  r.DrawRectangleRounded(
    button.rec,
    button.roundness,
    button.segments,
    button.color,
  );

  r.DrawRectangleRoundedLines(
    button.rec,
    button.roundness,
    button.segments,
    button.lineThick,
    button.lineColor,
  );

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
