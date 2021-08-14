
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeObj,stoneObj,groundObj,launcherObject
var mango1,mango2,mango3,mango4,mango5
var stone;
var elastic;
var world,boy;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1000,100,30);
	mango3 = new Mango(1000,200,30);
    mango4 = new Mango(1200,130,30);
	mango5 = new Mango(1100,200,30);

	//Create the Bodies Here.
     
	treeObj = new treeObj(1050,580);
	groundObject = new groundObj(width/2,600,width20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


  drawSprites();
 
}

function detectollision(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var ditance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance <= mango.r+stone.r)
	{
		Matter.Body.setStatic(mango.body,false);
	}
}

function keypressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})

		launcherObject.attach(stoneObj.body);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
     Mango.fly();
}

