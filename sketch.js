
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin1,dustbin2,dustbin3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper=new Paper(150,570)
  
  ground=new Ground(400,600,800,30)
  dustbin1=new Dustbin(550,570,220,20);
  
  dustbin2=new Dustbin(450,515,20,100);
  
  dustbin3=new Dustbin(650,515,20,100);
	Engine.run(engine);
  
}


function draw() {
	background("blue");
  rectMode(CENTER);
  ground.display()
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  ellipseMode(RADIUS);
 paper.display();
  drawSprites();
  keypressed();
}
 function keypressed(){
	 if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper,paper.Body.possition,{x:85,y:-85})

	 }
 }


