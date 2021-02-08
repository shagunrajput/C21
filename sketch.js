var fixedRect,movingRect;
var object1,object2;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(800,200,40,40);
  fixedRect.shapeColor="yellow";

  object1 = createSprite(400,100,40,50);
  object1.shapeColor="purple";

  
  object2 = createSprite(500,200,40,50);
  object2.shapeColor="purple";

  object1.velocityX=2;
  object1.velocityY=2;

  object2.velocityX=-2;
  object2.velocityY=-2;
 // movingRect.velocityX=-2;
 // fixedRect.velocityX=2;
 // movingRect.velocityY=0;
 // fixedRect.velocityY=0;
}

function draw() {
  background("red");
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

fill ("blue");
text ("mr.x - fr.x"+(movingRect.x-fixedRect.x),100,100);
text ("fr.x - mr.x"+(fixedRect.x-movingRect.x),100,150);
text ("mr.y - fr.y"+(movingRect.y-fixedRect.y),100,200);
text ("fr.y - mr.y"+(fixedRect.y-movingRect.y),100,250);

if(isTouching(fixedRect,movingRect)){
  fixedRect.shapeColor="blue";
}else{
  fixedRect.shapeColor="yellow";
}

bounceoff(object1,object2);

/*
if(movingRect.x-fixedRect.x <= (movingRect.width+fixedRect.width)/2
 && fixedRect.x-movingRect.x <= (movingRect.width+fixedRect.width)/2
 && movingRect.y-fixedRect.y <= (movingRect.height+fixedRect.height)/2
 && fixedRect.y-movingRect.y <= (movingRect.height+fixedRect.height)/2)
 {
   movingRect.velocityX = movingRect.velocityX*-1;
   fixedRect.velocityX =  fixedRect.velocityX*-1;
 }  */
  drawSprites();
}
