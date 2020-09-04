
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Constraint=Matter.Constraint;
var ground;
var tree;
var boy;
var rock;
var mango1,mango2,mango3,mango4,mango5;
var rope;



function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    ground = new Ground(width/2,580,1300,20);
	tree=new Tree(1050,340,400,500);
	boy=new Boy(400,500,300,300);
	rock=new Rock(400,480,50,50);
	mango1=new Mango(960,270,50);
	mango2=new Mango(1040,180,50);
	mango3=new Mango(1050,270,50);
	mango4=new Mango(1130,230,50);
	mango5=new Mango(1180,280,50);
	rope=new Rope(rock.body,{x:300, y:440});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();
 ground.display();
 tree.display();
boy.display();
 rock.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}



