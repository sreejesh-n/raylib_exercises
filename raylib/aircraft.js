const r = require("raylib");
const sketch = require("./sketch");
const geometry = require("./geometry");

const WIDTH = 1080;
const HEIGHT = 800;
const FPS = 60;

function drawAircraft(bodyPosX, bodyPosY, rectWidth, rectHeight) {
    r.DrawRectangle(bodyPosX, bodyPosY, rectWidth, rectHeight, r.BLUE);

    const radious = rectHeight / 2;

    const elipseRH = radious + radious * 0.4;
    const elipseRV = radious * 0.75;
    const elipseX = bodyPosX - (radious + radious * 0.15);
    const elipseY = bodyPosY + rectHeight - elipseRV;

    r.DrawEllipse(elipseX, elipseY, elipseRH, elipseRV, r.BLUE);

    r.DrawCircle(bodyPosX - radious, bodyPosY + radious, radious, r.BLUE);

    r.DrawRectangle(bodyPosX - radious, bodyPosY, radious, rectHeight, r.BLUE);

    const v1 = { x: bodyPosX + rectWidth, y: bodyPosY };
    const v2 = { x: bodyPosX + rectWidth, y: bodyPosY + rectHeight };
    const v3 = { x: bodyPosX + rectWidth + radious * 2, y: (v1.y + v2.y) / 2 };

    r.DrawTriangle(
        v1,
        v2,
        v3,
        r.BLUE
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const planWidth = 240;
    const planHeight = 110;
    const PosX = geometry.calcOffset(WIDTH, 240);
    const PosY = geometry.calcOffset(HEIGHT, 110);

    drawAircraft(PosX, PosY, planWidth, planHeight);

    r.EndDrawing();
}

function update() {

}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    sketch.setUp(WIDTH, HEIGHT, "Aircraft", FPS);
    loop();
    r.CloseWindow();
}

main();