
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobDiameter=60;

	engine = Engine.create();
	world = engine.world;

	//Center ball
	ball1 = new Bob(400,550)
	//Right-sided balls
	ball2 = new Bob(460,550)
	ball3 = new Bob(520,550)
	//Left-sided balls
	ball4 = new Bob(340,550)
	ball5 = new Bob(280,550)

	roof1 = new Roof(400,200,450,60)

	//Center rope
	rope1 = new Rope(ball1.body,roof1.body,0,0)
	//Left-sided ropes
	rope2 = new Rope(ball2.body,roof1.body,bobDiameter,0)
	rope3 = new Rope(ball3.body,roof1.body,bobDiameter*2,0)
	//Right-sided ropes
	rope4 = new Rope(ball4.body,roof1.body,-bobDiameter,0)
	rope5 = new Rope(ball5.body,roof1.body,-bobDiameter*2,0)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof1.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.setStatic(ball5.body,false)
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-100,y:-60})
	}
}

