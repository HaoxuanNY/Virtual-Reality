let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded", function() {
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0, z);
  }

  for(let i = 0; i < 5; i++){
    let x = rnd(-20,20);
    let y = rnd(8,15);
    let z = rnd(-20,20);
    let cloud = new Cloud(x, y, z);
  }

  let house1 = new House(-10,-10);
  let house2 = new House(10,-10);
  let house3 = new House(-10,10);
  let house4 = new House(10,10);
});
