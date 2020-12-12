const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var log1,log2,log3;
var ball, dustbinImg;

function preload()
{
  dustbinImg = loadImage("dustbingreen.png");
}

function setup()
 {
	createCanvas(800, 400);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

  ground = Bodies.rectangle(400,390,200,20, {isStatic:true} );
 	World.add(world, ground);
   
	log1 = new Log(675,365,150,20,PI/2-1.5);
  log2 = new Log(600,345,20,60,PI/1-1.5);
  log3 = new Log(750,345,20,60,PI/1-1.5);

  ball = new Paper(150,350,20);
  	
}
	
function draw()
 {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  
  rect(ground.position.x,ground.position.y,800,40);
    
  log1.display(); 
  log2.display(); 
  log3.display(); 
  ball.display();
  
  imageMode(CENTER);
  image(dustbinImg,675,345,180,60);
  
  drawSprites();

}

function keyPressed() 
{
 if (keyCode === UP_ARROW)
  {
    Matter.Body.setStatic(ball.body, false);
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-50}); 
  }
}