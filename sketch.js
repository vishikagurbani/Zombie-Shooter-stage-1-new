var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var bullet, bulletImg;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombieImg = loadImage("assets/zombie.png")
  bulletImg = loadImage("assets/bullet.png");


  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
  
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  
    bullet = createSprite(displayWidth-1150,player.y-30,20,10)
    bullet.addImage(bulletImg);
    bullet.scale = 0.2
    bullet.velocityX = 20
    player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

//calling the function to spawn zombies
enemy();

drawSprites();

}



//creating function to spawn zombies
function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    zombie = createSprite(random(500,1100),random(100,500),40,40)

    zombie.addImage(zombieImg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    
    zombie.setCollider("rectangle",0,0,400,400)
   
    zombie.lifetime = 400
   
  }

}
