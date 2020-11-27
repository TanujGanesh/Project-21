var wall,bullet;
var tikns,spd,wgt;

function setup() {
  createCanvas(1600,400);
  
  tikns=Math.round(random(22,83));

  wall=createSprite(1400,200,tikns,height/2);
  wall.shapeColor=color(80,80,80);
 
  bullet=createSprite(50, 200, 75, 20);
  bullet.shapeColor=color(175,155,96)
 
  
  spd=Math.round(random(223,321));
  wgt=Math.round(random(30,52));
}

function draw() {
  background(0,0,0);  
  bullet.velocityX=spd;
 
  if(hit(bullet,wall)){
    bullet.velocityX = 0;
    bullet.x=wall.x-(bullet.width+wall.width)/2;
    var dam=(0.5*wgt*spd*spd)/(tikns*tikns*tikns);
    if(dam>10){
      wall.shapeColor="red";
     }
     if(dam<10){
      wall.shapeColor="green";
     }
  }
  drawSprites();
}

function hit(iblt,iwa){
  bre=iblt.x+iblt.width;
  wle=iwa.x;
  if(bre>=wle){
    return true;
  }
  return false;
}