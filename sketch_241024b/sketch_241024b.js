function setup() {
  createCanvas(480, 480);
}

 let r = 24;
 let g = 45;
 let b = 55;

function draw() {
  
  if (frameCount % 240 == 0){
   r = random(1,256);
   g = random(1, 256)
   b = random(1, 256);
  }
  console.log(r);
  background(r, g, b);
  //text(mouseX + " " + mouseY, 50, 50);
  fill(0, 255, 0);
  triangle(159, 260, 182, 278,156, 294);
  triangle(186, 273, 219, 287, 164, 310);
  fill(100, 27, 48);
  triangle(315, 258, 290, 272, 319, 290);
  triangle(300, 274, 260, 287, 302, 302);
  
  fill(255);
  fill(229, 194, 152);
  rect(214, 290, 50, 60);
  arc(480/2, 480/4, 300, 350, 0, PI);
  fill(0);
  strokeWeight(5);
  line(122, 135, 170, 135);
  line(302, 135, 343, 135);
  ellipse(150, 175, 50);
  ellipse(325, 175, 50);
  triangle(210, 220, 270, 220, 240, 270);
  fill(255);
  quad(210, 220, 270, 220, 258, 239, 220, 239);
  fill(255, 0, 0)
  ellipse(150, 177, 10);
  ellipse(325, 177, 10);
  fill(100, 27, 48);
  rect(334, 110, 60, 200);
  arc(480/2, 480/4, 310, 200, 3*PI/2, 0);
  fill(0, 255, 0);
  rect(81, 110, 60, 200);
  arc(480/2, 480/4, 320, 200, PI, 3*PI/2);
  fill(0)
  quad(174, 350, 307, 350, 330, 480, 142, 480);
  
}
