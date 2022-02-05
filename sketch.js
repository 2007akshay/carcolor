var car1,car2,car3,car4, wall
var speed, weight



function setup() {
  createCanvas(800,400);
  //createSprite(790, 200, 10, 5000);
  speed=random(55,90)
  weight=random(400,1500)
  car1=createSprite(10,100,60,60)
  //car2=createSprite(10,120,30,30)
  //car3=createSprite(10,220,30,30)
  //car4=createSprite(10,320,30,30)
  wall=createSprite(600,200,100,800)
  car1.velocityX=speed;
  //car2.velocityX=speed;
 // car3.velocityX=speed;
  //car4.velocityX=speed;

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  
  if(wall.x-car1.x < (car1.width+wall.width)/2)
  {
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car1.shapeColor="blue";
    }
    if(deformation<180 && deformation>100)
    {
      car1.shapeColor="yellow"
    }
    if(deformation<100)
    {
      car1.shapeColor="green"
    }
  }
  
  
}