function coloredWindow() {
  const rec = {
    x: 250,
    y: 150,
    width: 200,
    height: 200,
  };

  const color = {
    r: 230,
    g: 89,
    b: 173,
    a: 150,
  };

  const lineColor = {
    r: 255,
    g: 255,
    b: 255,
    a: 255,
  };

  return { rec, color, lineColor };
}

function button() {
  const rec = {
    x: 200,
    y: 300,
    width: 180,
    height: 60,
  };

  const roundness = 1;
  const segments = 7;
  const lineThick = 5;

  const color = {
    r: 130,
    g: 219,
    b: 188,
    a: 255,
  };

  const lineColor = {
    r: 255,
    g: 255,
    b: 255,
    a: 255,
  };

  return { rec, roundness, segments, lineThick, color, lineColor };
}

function twoPoints() {
  const leftPoint = {
    x: 150,
    y: 200,
  };

  const rightPoint = {
    x: 500,
    y: 400,
  };

  return { leftPoint, rightPoint };
}

module.exports = {
  coloredWindow,
  button,
  twoPoints,
};
