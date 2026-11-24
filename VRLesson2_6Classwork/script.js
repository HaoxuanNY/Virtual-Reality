let scene, mechTemplate, mechs = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  mechTemplate = document.querySelector("#mech-1");

  for(let x = -30; x <= 30; x += 15){
    for(let z = -15; z >= -45; z -= 15){
      let mech = new Mech(x,13,z);
      mechs.push(mech);
    }
  }

  mechTemplate.setAttribute("visible",false);

  loop();
})

function loop(){
  for(let mech of mechs){
    mech.move();
  }

  window.requestAnimationFrame(loop);
}
