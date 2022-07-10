var stars = [];


function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');

  
  
  for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
	}
  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }



function draw() {
  background(0);
   
   /*
  
  //BORDER linework
  strokeWeight(1.5)
  stroke(255)
  line(10,10,10,290) //left
  line(10,335,10,390) //left
  line(10,390,260,390) //bottom
  line(10,10,390,10)//top
  line(390,10,390,348)
  
    /*
  
  // TRIANGLES
  
  strokeWeight(8)
  stroke(0)
  noFill(0)
  triangle(200,80,310,265,90,265);
    
  //white triangles
  noStroke();
  fill(255,255,255,0);
  triangle(200,80,310,265,90,265);
  fill(255,255,255,0)
  triangle(200,365,350,120,50,120);
  
  //triangle outlines
  strokeWeight(2)
  stroke(255,0,200)
  noFill(0)
  triangle(200,60,330,275,70,275);
    
  strokeWeight(23)
  stroke(0);
  noFill();
  triangle(200,385,370,110,30,110);
  
  strokeWeight(2)
  stroke(0,250,240);
  noFill();
  triangle(200,385,370,110,30,110);
  
  //smaller triangles
  strokeWeight(2)
  stroke(230,255,0);
  noFill();
  triangle(200,365,370,110,30,110);
  
  strokeWeight(2)
  stroke(0,250,240);
  noFill();
  triangle(200,385,355,118,30,110);
  
  strokeWeight(2)
  stroke(0,250,240);
  noFill();
  triangle(200,385,370,110,45,118);
  
  //middle cmyk circles
  noStroke()
  fill(200);
  circle(200,170,70);
      
  fill(200);
  circle(170,220,70);
  
  fill(200);
  circle(230,220,70);
  
  noStroke()
  fill(255,230,80,190);
  ellipse(200,170,80,80);
      
  fill(255,80,180,190);
  ellipse(170,220,80,80);
  
  fill(65,200,240,190);
  ellipse(230,220,80,80);
  

  /*
  
  //mini-er circles
  fill(255,0,180);
  circle(200,170,40);
      
  fill(0,250,240);
  circle(170,220,40);
  
  fill(235,250,0);
  circle(230,220,40);
  */
  
  
  //stars
  for (var i = 0; i < stars.length; i++) {
        fill(255)
		stars[i].draw();
	}
   
  
  //mini rotating circles
  rectMode(CENTER);
  translate(0,165);
  translate(p5.Vector.fromAngle(millis() / -800, 60));
  fill(255);
  circle(200,40,3);
  
  rectMode(CENTER);
  translate(0,0);
  translate(p5.Vector.fromAngle(millis() / 2000, 60));
  fill(255);
  circle(200,40,8);
  
  rectMode(CENTER);
  translate(0,0);
  translate(p5.Vector.fromAngle(millis() / -720, 60));
  fill(255);
  circle(200,40,2);
  
  rectMode(CENTER);
  translate(0,0);
  translate(p5.Vector.fromAngle(millis() / -500, 50));
  fill(255);
  circle(200,40,6);
  
  rectMode(CENTER);
  translate(0,0);
  translate(p5.Vector.fromAngle(millis() / -300, -70));
  fill(255);
  circle(200,40,4);
  
  
  //other direction
   rectMode(CENTER);
  translate(0,165);
  translate(p5.Vector.fromAngle(millis() / 2000, 160));
  fill(255);
  circle(0,0,5);
  
  rectMode(CENTER);
  translate(0,0);
  translate(p5.Vector.fromAngle(millis() / -1200, 160));
  fill(255);
  circle(0,0,10);
  
  rectMode(CENTER);
  translate(0,0);
  translate(p5.Vector.fromAngle(millis() / 520, 160));
  fill(255);
  circle(0,0,5);
  
  rectMode(CENTER);
  translate(0,0);
  translate(p5.Vector.fromAngle(millis() / -900, 150));
  fill(255);
  circle(0,0,8);
  
  rectMode(CENTER);
  translate(0,0);
  translate(p5.Vector.fromAngle(millis() / 400, 170));
  fill(255);
  circle(0,0,2);
     
}

// star class //
class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}
