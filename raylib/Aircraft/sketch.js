const r = require("raylib");
const geometry = require("./geometry");
const assets = require("./assets");

function running() {
    return !r.WindowShouldClose();
}

// function update() {

// }

function setUp(windowWidth, windowHeight, title, FPS) {
    r.InitWindow(windowWidth, windowHeight, title);
    r.SetTargetFPS(FPS);
}

function draw(windowWidth, windowHeight) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const planWidth = 240;
    const planHeight = 110;
    const PosX = geometry.calcOffset(windowWidth, planWidth);
    const PosY = geometry.calcOffset(windowHeight, planHeight);

    assets.drawAircraft(PosX, PosY, planWidth, planHeight);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setUp,
    draw,
    teardown,
};