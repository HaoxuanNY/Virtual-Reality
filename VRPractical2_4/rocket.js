class Rocket {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(4, 12) / 100;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("radius", 0.25);
    body.setAttribute("height", 1.2);
    body.setAttribute("color", "white");
    this.obj.append(body);

    let nose = document.createElement("a-cone");
    nose.setAttribute("radius-bottom", 0.25);
    nose.setAttribute("radius-top", 0);
    nose.setAttribute("height", 0.5);
    nose.setAttribute("position", "0 0.85 0");
    nose.setAttribute("color", "red");
    this.obj.append(nose);

    let windowSphere = document.createElement("a-sphere");
    windowSphere.setAttribute("radius", 0.14);
    windowSphere.setAttribute("position", "0 0.2 0.25");
    windowSphere.setAttribute("color", "skyblue");
    this.obj.append(windowSphere);

    for (let i = -1; i <= 1; i++) {
      let fin = document.createElement("a-box");
      fin.setAttribute("position", {x:i * 0.35, y:-0.4, z:0});
      fin.setAttribute("width", 0.4);
      fin.setAttribute("height", 0.5);
      fin.setAttribute("depth", 0.1);
      fin.setAttribute("color", "red");
      this.obj.append(fin);
    }

    let flame = document.createElement("a-cone");
    flame.setAttribute("radius-bottom", 0);
    flame.setAttribute("radius-top", 0.2);
    flame.setAttribute("height", 0.6);
    flame.setAttribute("position", "0 -0.9 0");
    flame.setAttribute("color", "orange");
    this.obj.append(flame);

    this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
    scene.append(this.obj);
  }

  launch() {
    this.y += this.dy;
    this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
    if (this.y > 45) {
      this.y = rnd(-7, -2);
      this.dy = rnd(4, 12) / 100;
    }
  }
}
