function firstRouteGateForward(gate) {
  if (gate === "Aurora") {
    return "Ember";
  }
  if (gate === "Ember") {
    return "Nebula";
  }
  if (gate === "Nebula") {
    return "Rift";
  }
  return "Aurora";
}

function secondRouteGateForward(gate) {
  if (gate === "Ember") {
    return "Nebula";
  }
  if (gate === "Nebula") {
    return "Rift";
  }
  if (gate === "Rift") {
    return "Obsidian";
  }
  if (gate === "Obsidian") {
    return "Eclipse";
  }
  return "Ember";
}

function meet(firstRouteGate, secondRouteGate) {
  if (firstRouteGate === secondRouteGate) {
    return 0;
  }

  return (
    meet(
      firstRouteGateForward(firstRouteGate),
      secondRouteGateForward(secondRouteGate),
    ) + 1
  );
}

const moves = meet("Aurora", "Eclipse");
console.log(moves);
