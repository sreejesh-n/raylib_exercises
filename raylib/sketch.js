const r = require("raylib");

function setUp(windowWidth, windowHeight, title, FPS) {
    r.InitWindow(windowWidth, windowHeight, title);
    r.SetTargetFPS(FPS);
}

module.exports = {
    setUp,
};