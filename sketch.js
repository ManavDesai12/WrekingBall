
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var grounds, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box14, box13;
var wreckingBall;
var line1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	grounds = new Ground(400, 680, 800, 40);
	box1 = new Box(600, 480)
	box2 = new Box(600, 630)
	box3 = new Box(600, 580)
	box4 = new Box(600, 530)
	box5 = new Box(650, 480)
	box6 = new Box(650, 630)
	box7 = new Box(650, 580)
	box8 = new Box(650, 530)
	box9 = new Box(600, 430)
	box10 = new Box(600, 380)
	box11 = new Box(600, 330)
	box12 = new Box(600, 280)
	box13 = new Box(600, 230)
	box14 = new Box(600, 180)
wreckingBall = new Ball(400, 400);
line1 = new Rope(wreckingBall.body, {x:400, y:100})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  grounds.display();
  drawSprites();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
wreckingBall.display();
 box14.display();
line1.display();

}

function mouseDragged(){
	Matter.Body.setPosition(wreckingBall.body , {x: mouseX, y:mouseY});
}

