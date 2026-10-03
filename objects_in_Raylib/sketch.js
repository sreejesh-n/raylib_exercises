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
  //   const button = e.button();

  //   r.DrawRectangleRounded(
  //     button.rec,
  //     button.roundness,
  //     button.segments,
  //     button.color,
  //   );

  //   r.DrawRectangleRoundedLines(
  //     button.rec,
  //     button.roundness,
  //     button.segments,
  //     button.lineThick,
  //     button.lineColor,
  //   );

  // Exercise 3
  //   const p = e.twoPoints();

  //   r.DrawCircleV(p.leftPoint, 100, r.BLUE);
  //   r.DrawCircleV(p.rightPoint, 50, r.RED);

  //   r.DrawLineV(p.leftPoint, p.rightPoint, r.WHITE);

  // Exercise 4
  const t = e.target();

  r.DrawCircleV(t.position, t.largeCircle.radious, t.largeCircle.color);
  r.DrawCircleV(t.position, t.mediumCircle.radious, t.mediumCircle.color);
  r.DrawCircleV(t.position, t.smallCircle.radious, t.smallCircle.color);

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
