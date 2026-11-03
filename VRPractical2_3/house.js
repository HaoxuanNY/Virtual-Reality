class House {
  constructor(x, z) {
    this.obj = document.createElement("a-entity");

    let base = document.createElement("a-box");
    base.setAttribute("color", "#d4a262");
    base.setAttribute("position", "0 1.5 0");
    base.setAttribute("width", "4");
    base.setAttribute("height", "3");
    base.setAttribute("depth", "4");
    this.obj.append(base);

    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color", "#51aac3");
    roof.setAttribute("position", "0 4 0");
    roof.setAttribute("radius", "3");
    roof.setAttribute("height", "7");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("rotation", "-90 0 0");
    roof.setAttribute("scale", "1 0.6 1");
    this.obj.append(roof);

    let door = document.createElement("a-box");
    door.setAttribute("color", "brown");
    door.setAttribute("position", "0 0.9 2.05");
    door.setAttribute("width", "1");
    door.setAttribute("height", "1.8");
    door.setAttribute("depth", "0.1");
    this.obj.append(door);

    this.obj.setAttribute("position", {x:x, y:0, z:z});
    scene.append(this.obj);
  }
}
