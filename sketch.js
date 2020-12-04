
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	canvas = createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse : canvasmouse
	};
	msConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
	roof1 = new roof(10,100,500,10);
	p1 = new Pendulum (10,300,20,20);
	p2 = new Pendulum (30,300,20,20);
	p3 = new Pendulum (50,300,20,20);
	p4 = new Pendulum (70,300,20,20);
	p5 = new Pendulum (90,300,20,20);

	rope1 = new rope(p1.body,roof1.body,-pendulumDiameter*2,0);
	rope2 = new rope(p2.body,roof1.body,-pendulumDiameter*2,0);
	rope3 = new rope(p3.body,roof1.body,-pendulumDiameter*2,0);
	rope4 = new rope(p4.body,roof1.body,-pendulumDiameter*2,0);
	rope5 = new rope(p5.body,roof1.body,-pendulumDiameter*2,0);

	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function MouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x:mouseX , y: mouseY});
	}

