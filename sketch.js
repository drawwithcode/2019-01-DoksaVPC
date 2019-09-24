toggle = false;
let x = 0;
let y = 0;


function setup() {
createCanvas(windowWidth, windowHeight);
angleMode(DEGREES);
background(0,115,115);
frameRate(60);

}

function draw() {



if(toggle==false){
  x = mouseX;
  y = mouseY;
  var dr = windowWidth/250;
  var ds = windowWidth/80;
  var r = 150 + x / dr;
  var s = 200 - x / ds;
  var dnc = windowHeight/8;
  var dns = windowHeight/3;
  var nc = round(y/dnc);
  var ns = round(y/dns);

  background(0,115,115);

  push();
      textSize(20);
      textAlign(CENTER);
      textFont('sans-serif');
      fill(255);
      text('Move the cursor to change settings, then CLICK to generate your artwork', width/2, height/2);
    pop();

  push();
 translate(windowWidth/2,windowHeight/2);
 strokeWeight(1);
 stroke(color("Orange"));
 line(cos(frameCount)*r,sin(frameCount)*r,cos(frameCount*(2 + nc))*r,sin(frameCount*(2 + nc))*r);
pop();

push();

  translate(width/2, height/2);
  rotate(frameCount*(ns+1)*5);
  translate((s-120)/1.3 , (s-120)/1.3 );
  noFill();
  strokeWeight(2);
  stroke(color("LightSkyBlue"));
  square(0,0,s,0,s/5,0,s/5);

pop();
}

else{

  var dr = windowWidth/250;
  var ds = windowWidth/80;
  var r = 150 + x / dr;
  var s = 200 - x / ds;
  var dnc = windowHeight/8;
  var dns = windowHeight/3;
  var nc = round(y/dnc);
  var ns = round(y/dns);

  push();
 translate(windowWidth/2,windowHeight/2);
 strokeWeight(1);
 stroke(lerpColor(color("Coral"),color("Orange"),frameCount/360));
 line(cos(frameCount)*r,sin(frameCount)*r,cos(frameCount*(2 + nc))*r,sin(frameCount*(2 + nc))*r);
pop();

push();

  translate(width/2, height/2);
  rotate(frameCount*(ns+1)*5);
  translate((s-120)/1.3 , (s-120)/1.3 );
  noFill();
  strokeWeight(2);
  stroke(color("LightSkyBlue"));
  square(0,0,s,0,s/5,0,s/5);

pop();

if (frameCount == 360) {
  noLoop();
}
}
}

function mousePressed(){
  if(toggle==false){
    if (!toggle){
      frameCount = 0;
    }
    toggle = true;
    background(0,115,115);
    x = mouseX;
    y = mouseY;
  }
}
