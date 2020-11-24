
var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 40, 40);
  car.shapeColor="lavender";

  wall = createSprite(1500,200,20,height/2);
  wall.shapeColor=(80,80,80);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car.velocityX=speed;

}

function draw() {
  background("lightgreen"); 

  
  
  if(wall.x-car.x<wall.width/2 + car.width/2 ){
   car.velocityX=0;

    deformation =( 0.5*weight*speed*speed)/22500;
   if(deformation>180);
   {
     car.shapeColor=color(255,0,0);
   }
   if(deformation<180 && deformation>100);
   {
     car.shapeColor=color(230,230,0);
   }
   if(deformation<100);
   {
     car.shapeColor=color(0,255,0);
   }
  }

  drawSprites();
}