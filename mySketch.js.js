// by SamuelYAN
// more works //
// https://twitter.com/SamuelAnn0924
// https://www.instagram.com/samuel_yan_1990/
// Lissajous figure(Lissajous curve)

var seed = Math.random() * 1000;
var a = 2,
  b = 3;
var th = 0,
  seg = 0.01;
var r;
var mySize;
let colors1 = "808080BF-404040BF-45454cBF-505050BF-606060BF"
  .split("-")
  .map((a) => "#" + a);
let colors2 = "808080-404040-45454c-505050-606060"
  .split("-")
  .map((a) => "#" + a + "80"); // set opacity to 50%

function setup() {
  // frameRate(25);
  mySize = min(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  // pixelDensity(5);
  r = mySize / 2;
  background("#f8f9fb");
  let filter = new makeFilter();
}

function draw() {
  randomSeed(seed);
  // background(colorbg2);
  noFill();
  strokeCap(SQUARE);
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < 120; i += random(1)) {
    a = random(1);
    b = random(1);
    strokeWeight(random(50));
    rotate(random(TAU));
    stroke(random(colors1));
    ellipse(
      random(-i * 50,i*50) + r * cos(a * th),
      random(-i * 50,i*50) + r * sin(b * th),
      r*cos(a * (th + seg)),
      r*sin(b * (th + seg))
    );
  }
  pop();
  th += seg;
  image(overAllTexture, 0, 0);
}

function makeFilter() {
  randomSeed(seed);
  // noiseのフィルターをつくる
  colorMode(HSB, 360, 100, 100, 100);
  drawingContext.shadowColor = color(0, 0, 5, 10);
  overAllTexture = createGraphics(windowWidth, windowHeight);
  overAllTexture.loadPixels();
  for (var i = 0; i < width; i++) { // noprotect
    for (var j = 0; j < height; j++) {
      overAllTexture.set(
        i,
        j,
        color(50, 0, 0, noise(i / 3, j / 3, (i * j) / 50) * random(1, 15))
      );
    }
  }
  overAllTexture.updatePixels();
}

function keyTyped() {
  if (key === "s" || key === "S") {
    //noLoop();
    saveCanvas("DancingShapes_Tubes", "png");
  }
}
