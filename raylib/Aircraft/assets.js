const r = require("raylib");

function drawAircraft(bodyPosX, bodyPosY, rectWidth, rectHeight) {
    const radius = rectHeight / 2;

    const elipseRH = radius + radius * 0.4;
    const elipseRV = radius * 0.75;
    const elipseX = bodyPosX - (radius + radius * 0.15);
    const elipseY = bodyPosY + rectHeight - elipseRV;

    r.DrawRectangle(bodyPosX, bodyPosY, rectWidth, rectHeight, r.BLUE);
    r.DrawEllipse(elipseX, elipseY, elipseRH, elipseRV, r.BLUE);
    r.DrawCircle(bodyPosX - radius, bodyPosY + radius, radius, r.BLUE);
    r.DrawRectangle(bodyPosX - radius, bodyPosY, radius, rectHeight, r.BLUE);

    const v1 = { x: bodyPosX + rectWidth, y: bodyPosY };
    const v2 = { x: bodyPosX + rectWidth, y: bodyPosY + rectHeight };
    const v3 = { x: bodyPosX + rectWidth + radius * 2, y: (v1.y + v2.y) / 2 };

    r.DrawTriangle(
        v1,
        v2,
        v3,
        r.BLUE
    );
}

module.exports = {
    drawAircraft,
};