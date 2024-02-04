let cymbal, kick, snare, tom1, tom2, tom3
function preload() {
  cymbal = loadSound("cymbal.mp3");
  kick = loadSound("kick.mp3");
  snare = loadSound("Project.mp3");
  tom1 = loadSound("tom1.mp3");
  tom2 = loadSound("tom2.mp3");
  tom3 = loadSound("tom3.mp3");
}

//kick//
let kick1 = Array.from({ length: 16 }, () =>
Math.floor(Math.round(Math.random(1)))
);
//toms//
let tom = Array.from({ length: 16 }, () =>
Math.round(Math.random() * (3 - 0) + 0)
);
//
//
//
//  // Tweakable Internal variables!//
//
let bpm = 900;
//
//let kick1=[1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1];
//
let snr = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0];
//
//let tom = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
//
//
function setup() {
  setInterval(tick1, 60000 / bpm);
  setInterval(tick2, 15000 / bpm);
  //
  cymbal.setVolume(0.1);
  kick.setVolume(0.3);
  snare.setVolume(0.5);
  //
  console.log(kick1);
  console.log(tom);
}
//
// tick update // 125
let tik2 = 0;
let count = 0
function tick2() {
  tik2++;
  if (tik2 == 68) {
    tik2 = 4;

    //tom = Array.from({ length: 16 }, () =>
     // Math.round(Math.random() * (3 - 0) + 0)
    //);
  }

  if (tom[tik2 - 52] == 0) {
    tom1.play();
    console.log("0");
  }
  //
  if (tom[tik2 - 52] == 1) {
    tom2.play();
    console.log("1");
  }
  //
  if (tom[tik2 - 52] == 2) {
    tom3.play();
    console.log("2");
  }
    if (tom[tik2 - 52] == 3) {
    snare.play();
    console.log("3");
  }
}
//
let tick = 0;
function tick1() {
  //
  //cymbal
  if (tick >= 0 && tick < 12) {
    cymbal.play();
  }
  if (tick == 16) {
    tick = 0;
  }
  if (tick == 0) {
    cymbal.play();
  }
  if (kick1[tick] == 1) {
    kick.play();
  }
  if (snr[tick]== 1){
  snare.play()
}
  tick++;
}