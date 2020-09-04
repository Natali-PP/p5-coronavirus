
let angle = 0
let img;
let cam;
function preload() {
  img=loadImage('./islamic.jpg')
}

function setup() {
  const canv =  createCanvas(500, 300, WEBGL);
  canv.style('display', 'block');
  //cam = createCapture(VIDEO)
  //cam.size(420,380);
  //cam.hide();
 
}

function draw() {
  background(175)
  noStroke()
  //normalMaterial()
  directionalLight(255, 255, 255, 0.5,  1, 1,-1 )

  /* rectMode(CENTER);
  noFill();
  rect(0, 0, 150, 150)
  rotateX(angle);

  angle += 0.01 */

  push()
  //texture(cam)
  rotateX(frameCount * 0.01);
  normalMaterial()
  rotateY(frameCount * 0.01);
  box(100)
  pop()

  ambientMaterial(255)
  translate(0,100)
  rotateX(HALF_PI)
  plane(400,400)


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
