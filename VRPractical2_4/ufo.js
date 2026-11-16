class UFO {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(2, 8) / 100;
    this.angle = 0;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-sphere");
    body.setAttribute("radius", 1);
    body.setAttribute("scale", "1.4 0.25 1.4");
    body.setAttribute("color", "silver");
    this.obj.append(body);

    let dome = document.createElement("a-sphere");
    dome.setAttribute("radius", 0.65);
    dome.setAttribute("scale", "1 0.7 1");
    dome.setAttribute("position", "0 0.35 0");
    dome.setAttribute("color", "skyblue");
    dome.setAttribute("opacity", 0.85);
    this.obj.append(dome);

    let bottom = document.createElement("a-cylinder");
    bottom.setAttribute("radius", 0.65);
    bottom.setAttribute("height", 0.2);
    bottom.setAttribute("position", "0 -0.2 0");
    bottom.setAttribute("color", "gray");
    this.obj.append(bottom);

    let antenna = document.createElement("a-cylinder");
    antenna.setAttribute("radius", 0.04);
    antenna.setAttribute("height", 0.3);
    antenna.setAttribute("position", "0 0.9 0");
    antenna.setAttribute("color", "white");
    this.obj.append(antenna);

    let tip = document.createElement("a-sphere");
    tip.setAttribute("radius", 0.12);
    tip.setAttribute("position", "0 1.1 0");
    tip.setAttribute("color", "red");
    this.obj.append(tip);

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }

  invade() {
    if (this.y > 0.35) {
      this.y -= this.dy;
      this.angle += 0.3;

      if (this.y < 0.35) {
        this.y = 0.35;
      }

      this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

      this.obj.setAttribute("rotation", {x: 0, y: this.angle, z: 0});
    }
  }
}
