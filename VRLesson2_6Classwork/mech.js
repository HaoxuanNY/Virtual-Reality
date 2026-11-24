class Mech{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.dy = 0.03;

    this.obj = mechTemplate.cloneNode(true);
    this.obj.removeAttribute("id");

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    scene.append(this.obj);
  }

  move(){
    this.y += this.dy;

    if(this.y > 14 || this.y < 13){
      this.dy = -this.dy;
    }

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
}
