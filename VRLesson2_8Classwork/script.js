let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 0;
  target.da = -0.02;

  loop();
})

function loop(){
  target.a += target.da;

  if(target.a <= -Math.PI / 2){
    target.a = -Math.PI / 2;
    target.da = 0;
  }

  target.object3D.rotation.x = target.a;

  window.requestAnimationFrame(loop);
}
