
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(1600, 800)
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
ball = new Ball(200,450,40)
box = new Box(1200,650)
ground = new Ground(width/2,670,width,20)
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  
ball.display();
box.display();
ground.display();
}
function keyPressed(){
if(keyCode == UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
}
}