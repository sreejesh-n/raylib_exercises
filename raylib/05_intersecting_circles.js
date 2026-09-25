const r = require("raylib");

const screenWidth = 1080;
const screenHeight = 800;
const FPS = 60;

const c1X = 600;
const c1Y = 500;
const c1R = 70;

const c2X = 770;
const c2Y = 500;
const c2R = 100;

function setUp() {
    r.InitWindow(screenWidth, screenHeight, "Intersecting Circles");
    r.SetTargetFPS(FPS);
}

function findDistance(x1, y1, x2, y2) {
    const dx = (x2 - x1) ** 2;
    const dy = (y2 - y1) ** 2;
    return (dx + dy) ** 0.5;
}

function isIntersecting(c1X, c1Y, c1R, c2X, c2Y, c2R) {
    const distance = findDistance(c1X, c1Y, c2X, c2Y);
    return distance <= c1R + c2R;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const isOverlapping = isIntersecting(c1X, c1Y, c1R, c2X, c2Y, c2R);
    const color = isOverlapping ? r.RED : r.BLACK;
    r.DrawCircle(c1X, c1Y, c1R, color);
    r.DrawCircle(c2X, c2Y, c2R, color);

    r.EndDrawing();
}

function update() { }

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setUp();
    loop();
    r.CloseWindow();
}

main();