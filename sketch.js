
var monkey , monkey_running,ground,groundImg;
var banana ,bananaImg, obstacle, obstacleImg;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
 groundImg=loadImage("farm_land.png");
gameOverImg=loadImage("download.png");
  
}
function setup() {
  createCanvas(600,400);
  monkey=createSprite(80,300);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(372,200,754,400);
  ground.addImage(groundImg);
  ground.scale=2;
  
  monkey.depth=ground.depth+1;
  score=0;
  
  obstacleGroup=createGroup();
  FoodGroup=createGroup();
  invisibleGround = createSprite(200,315,400,10);
  invisibleGround.visible = false;
  
  gameover=createSprite(300,200);
  gameover.addImage(gameOverImg);
  gameover.scale=2.5;
  gameover.visible=false;
  
  monkey.setCollider("rectangle",0,0,400,monkey.height);
  score=0;
}
function draw() {
background("skyblue");

  ground.velocityX=-3;
  if(ground.x<200){
    ground.x=352;
    }
  
    obstacles();
    food();
    
   if(keyDown("space")&&monkey.y>=100){
      monkey.velocityY=-23;
         }

  monkey.velocityY=monkey.velocityY+2;
   monkey.collide(invisibleGround);
  score=score++;
    
  if(monkey.isTouching(obstacleGroup)){
    gameover.addImage(gameOverImg);
    gameover.visible=true;
     }
  drawSprites();
  text("Survival Time:"+ score, 500,50);
}
function obstacles() {

  if (frameCount % 100 === 0) {
    var obstacle = createSprite(600,300);
 
    obstacle.addImage(obstacleImg);
    obstacle.scale = 0.2;
    obstacle.velocityX = -15;
    obstacle.lifetime = 200;
   obstacleGroup.add(obstacle);
  }
  }
function food(){
  if(frameCount%150===0){
    var banana=createSprite(600,250);
    banana.addImage(bananaImg);
    banana.scale=0.1;
    banana.velocityX = -20;
    banana.lifetime=200;
    FoodGroup.add(banana);
  }
}
