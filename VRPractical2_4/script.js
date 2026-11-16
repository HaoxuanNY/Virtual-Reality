let rnd = (l, u) => Math.floor(Math.random() * (u - l) + l);
let scene, rockets = [], ufos = [];

window.addEventListener("DOMContentLoaded", async function() {
  scene = document.querySelector("a-scene");

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      let x = -36 + col * 8 + rnd(-2, 3);
      let z = -36 + row * 8 + rnd(-2, 3);
      let y = rnd(-7, -2);

      let rocket = new Rocket(x, y, z);
      rockets.push(rocket);
    }
  }


  for (let i = 0; i < 24; i++) {
    let x = rnd(-35, 36);
    let y = rnd(11, 30);
    let z = rnd(-35, 36);

    let ufo = new UFO(x, y, z);
    ufos.push(ufo);
  }

  loop();
});

function loop() {
  for (let rocket of rockets) {
    rocket.launch();
  }
  for (let ufo of ufos) {
    ufo.invade();
  }

  window.requestAnimationFrame(loop);
}
