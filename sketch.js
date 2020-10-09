var fixRect,movingRect
function setup() {
  createCanvas(800,400);
 fixRect= createSprite(400, 200, 70, 70);
 fixRect.shapeColor="blue";
 fixRect.debug = true;
 movingRect=createSprite(750,200,70,120);
 movingRect.shapeColor="blue";
 movingRect.debug = true;
}

function draw() {
  background(255,255,255);  

  movingRect.y=mouseY;
  movingRect.x=mouseX;


  if(movingRect.x - fixRect.x < movingRect.width/2 + fixRect.width/2 &&
   fixRect.x - movingRect.x <movingRect.width/2 + fixRect.width/2 &&
   movingRect.y -fixRect.y< movingRect.height/2 + fixRect.height/2 &&
   fixRect.y- movingRect.y < movingRect.height/2 + fixRect.height/2){
    fixRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else
  {
    fixRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  drawSprites();

}