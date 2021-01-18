
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,roof1,box1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(240,500,70)
	bob2 = new Bob(310,500,70)
	bob3 = new Bob(380,500,70)
	bob4 = new Bob(450,500,70)
	bob5 = new Bob(520,500,70)

	box1= new Box(240,150)
	box2= new Box(310,150)
	box3= new Box(380,150)
	box4= new Box(450,150)
	box5= new Box(520,150)

	roof1 = new Roof(380,150,490,30)
	var options = {
        bodyA: bob1.body,
        bodyB: box1.body,
        length: 350,
		stiffness: 0.5,
    
    }

    var rope1 = Constraint.create(options);
	World.add(world, rope1);

	var options = {
        bodyA: bob2.body,
        bodyB: box2.body,
        length: 350,
        stiffness: 0.5
    }

    var rope2 = Constraint.create(options);
	World.add(world, rope2);
	
	var options = {
        bodyA: bob3.body,
        bodyB: box3.body,
        length: 350,
        stiffness: 0.5
    }

    var rope3 = Constraint.create(options);
	World.add(world, rope3);
	
	var options = {
        bodyA: bob4.body,
        bodyB: box4.body,
        length: 350,
        stiffness: 0.5
    }

    var rope4 = Constraint.create(options);
	World.add(world, rope4);

	var options = {
        bodyA: bob5.body,
        bodyB: box5.body,
        length: 350,
        stiffness: 0.5
    }

    var rope5 = Constraint.create(options);
	World.add(world, rope5);

	

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);
  
    


  drawSprites();

  bob1.display();
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  

  line(bob1.body.position.x, bob1.body.position.y, box1.body.position.x, box1.body.position.y)
  line(bob2.body.position.x, bob2.body.position.y, box2.body.position.x, box2.body.position.y)
  line(bob3.body.position.x, bob3.body.position.y, box3.body.position.x, box3.body.position.y)
  line(bob4.body.position.x, bob4.body.position.y, box4.body.position.x, box4.body.position.y)
  line(bob5.body.position.x, bob5.body.position.y, box5.body.position.x, box5.body.position.y)
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-45})
    }
    

}

	