var wall1;
var player


function preload(){
  boyImg = loadImage("runN.png");
  treasureImg = loadImage("treasure.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  

//creating the player sprite

player = createSprite(50, 50, 50, 20);
player.addImage("boy", boyImg)
player.scale = 0.2
//player.debug = true;


wall1 = createSprite(450, 100, 50, 250);
  //wall1.addImage("brick1", wallImg1)
  wall1.scale = 0.7;
  wall1.shapeColor = "red"

  wall2 = createSprite(550, 350, 250, 25);
  //wall2.addImage("brick", wallImg)
  wall2.scale = 0.7
  wall2.shapeColor = "red"
  
  wall3 = createSprite(200, 330, 200, 30);
  //wall3.addImage("brick1", wallImg1)
  wall3.shapeColor = "red"

  wall4 = createSprite(500, 600, 30, 170)
  wall4.shapeColor = "red"

  wall5 = createSprite(200, 600, 200, 30)
  wall5.shapeColor = "red"

  wall6 = createSprite(800, 500, 50, 50)
  wall6.shapeColor = "red"

  wall7 = createSprite(750, 650, 200, 40)
  wall7.shapeColor = "red"

  wall8 = createSprite(800, 200, 200, 80)
  wall8.shapeColor = "red"

  wall9 = createSprite(800, 80, 50, 80)
  wall9.shapeColor = "red"

  wall10 = createSprite(1000, 580, 50, 200)
  wall10.shapeColor = "red"

  wall11 = createSprite(1030, 150, 50, 180)
  wall11.shapeColor = "red"

  wall12 = createSprite(1150, 550, 60, 40)
  wall12.shapeColor = "red"

  wall13 = createSprite(1250, 440, 50, 200)
  wall13.shapeColor = "red"

  wall14 = createSprite(1300, 100, 40, 40)
  wall14.shapeColor = "red"

  top1 = createSprite(windowHeight/2, 1, 4000, 10)
  top1.shapeColor = "blue"

  bottom = createSprite(windowHeight/2, 865, 4000, 10)
  bottom.shapeColor = "blue"

  left = createSprite(1, windowWidth/2, 10, 54654)
  left.shapeColor = "blue"

  right = createSprite(windowWidth-1, windowWidth/2, 10, 256490)
  right.shapeColor = "blue"

  wall15 = createSprite(200, 800, 200, 50)
  wall15.shapeColor = "red"

  wall16 = createSprite(800, 800, 200, 50)
  wall16.shapeColor = "red"

  wall17 = createSprite(1300, 700, 200, 50)
  wall17.shapeColor = "red"

  wall18 = createSprite(1400, 400, 50, 50)
  wall18.shapeColor = "red"
  

  treasure = createSprite(windowWidth - 60, windowHeight - 60, 50, 50)
  treasure.addImage("treasure", treasureImg)
  treasure.scale = 0.3

}

function draw() {
  background("yellow");

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")){
 player.y = player.y+30
}

if(keyDown("LEFT_ARROW")){
  player.x = player.x-30
 }

 if(keyDown("RIGHT_ARROW")){
  player.x = player.x+30
 }

 if(player.isTouching(wall1) || player.isTouching(wall2) || player.isTouching(wall3) || player.isTouching(wall4)
  || player.isTouching(wall5) || player.isTouching(wall6) || player.isTouching(wall7) || player.isTouching(wall8)
  || player.isTouching(wall9) || player.isTouching(wall10) || player.isTouching(wall11) || player.isTouching(wall12)
  || player.isTouching(wall13) || player.isTouching(wall14) || player.isTouching(wall15) || player.isTouching(wall16)
  || player.isTouching(wall17) || player.isTouching(wall18) || player.isTouching(top1) || player.isTouching(bottom)
  || player.isTouching(left) || player.isTouching(right))
  {
    player.x = 50;
    player.y = 50;
 }

 if(player.isTouching(treasure)){
  
  textSize(100)
  text("Well Done!!", windowWidth/2, windowHeight/2)
  
  
 }
  
drawSprites();

}
