const sketch = require("./sketch");

const WIDTH = 1080;
const HEIGHT = 800;
const FPS = 60;

function loop() {
    while (sketch.running()) {
        sketch.draw(WIDTH, HEIGHT);
    }
}

function main() {
    sketch.setUp(WIDTH, HEIGHT, "Aircraft", FPS);
    loop();
    sketch.teardown();
}

main();