let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i = 0; i < 30; i++){
    let dude = new Dude(rnd(-20,21),1,rnd(-40,0));
    dudes.push(dude);
  }

  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
   for(let dude of dudes){
    dude.jump();
  }

  window.requestAnimationFrame( loop );
}