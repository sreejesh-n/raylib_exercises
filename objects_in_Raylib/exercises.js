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

  return { rec, color };
}

module.exports = {
  coloredWindow,
};
