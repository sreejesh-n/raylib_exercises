const r = require("raylib");

const WIDTH = 1080;
const HEIGHT = 1080;
const FPS = 60;

let start = -1000;

function setUp() {
    r.InitWindow(WIDTH, HEIGHT, "Aircraft");
    r.SetTargetFPS(FPS);
}

function update() {
    start += 5;
    if (start >= WIDTH * 2) {
        start = -1000;
    }
}

function drawCloud(x, y) {
    const color = r.WHITE;

    const cloudWidth = 148;
    const cloudHeight = 64;

    r.DrawRectangle(x, y, cloudWidth, cloudHeight, color);

    const circleRadious = 40;

    r.DrawCircle(x, y, circleRadious, color);
    r.DrawCircle(x + (circleRadious + 14) * 1, y - 10, circleRadious, color);
    r.DrawCircle(x + (circleRadious + 14) * 2, y - 10, circleRadious, color);
    r.DrawCircle(x + (circleRadious + 14) * 3, y, circleRadious, color);

    r.DrawCircle(x - 25, y + cloudHeight / 2 - 10, circleRadious, color);
    r.DrawCircle(x + cloudWidth + 40, y + cloudHeight / 2 - 10, circleRadious, color);

    r.DrawCircle(x, y + circleRadious, circleRadious, color);
    r.DrawCircle(x + (circleRadious + 14) * 1, y + circleRadious + 10, circleRadious, color);
    r.DrawCircle(x + (circleRadious + 14) * 2, y + circleRadious + 10, circleRadious, color);
    r.DrawCircle(x + (circleRadious + 14) * 3, y + circleRadious, circleRadious, color);

    // r.DrawLine(X, Y, X + cloudWidth, Y, r.BLACK);
    // r.DrawLine(X, Y, X, Y + cloudHeight, r.BLACK);
    // r.DrawLine(X, Y + cloudHeight, X + cloudWidth, Y + cloudHeight, r.BLACK);
    // r.DrawLine(X + cloudWidth, Y + cloudHeight, X + cloudWidth, Y, r.BLACK);
    return y;
}


function draw(x) {
    r.BeginDrawing()
    r.ClearBackground(r.SKYBLUE);

    drawCloud(x + 150, 150);
    drawCloud(x - 550, 250)
    drawCloud(x + 750, 400);
    drawCloud(x - 100, 550)
    drawCloud(x + 450, 650);
    drawCloud(x, 900);
    // drawCloud(450, 400);
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw(start);
        update();
    }
}

function main() {
    setUp();
    loop();
    r.CloseWindow;
}

main()