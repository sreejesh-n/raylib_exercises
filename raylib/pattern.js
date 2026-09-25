const r = require("raylib");

const screenWidth = 1080;
const screenHeight = 800;
const FPS = 60;

let rectWidth = 200;
let rectHeight = 200;

function setup() {
    r.InitWindow(screenHeight, screenWidth, "Pattern");
    r.SetTargetFPS(FPS);
}

function update() {
    rectWidth++;
    rectHeight--;
}

function calcOffset(x1, x2) {
    return (x1 - x2) / 2;
}

function draw() {
    const rectX = calcOffset(screenWidth, rectWidth);
    const rectY = calcOffset(screenHeight, rectHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(rectX, rectY, rectWidth, rectHeight, r.WHITE);
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
