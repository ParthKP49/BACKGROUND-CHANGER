var rect;

function setup(){
createCanvas(1200,800);
rect = createSprite(400,100,30,30);
rect.shapeColor="white";
}


function draw(){
background("green");
rect.x=World.mouseX;
rect.y=World.mouseY;

if(rect.x< 600 && rect.y< 800){
  background("blue");

}else {
  background("green");
}

drawSprites();
 
}