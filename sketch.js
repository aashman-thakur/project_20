var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,50);
	groundSprite.shapeColor=color('green')


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , helicopterSprite.y , 50 , 50);
	World.add(world, packageBody);
	w1= Bodies.rectangle(width/2,450,200,20 , {isStatic:true} );
	 World.add(world,w1);
	 w2 = Bodies.rectangle(300,365,20,100 , {isStatic:true} );
	 World.add(world,w2);
	 w3 = Bodies.rectangle(510,365,20,100 , {isStatic:true} );
	 World.add(world,w3);
	w1s=createSprite(width/2,450,200,20);
	w1s.shapeColor=color('red')
	w2s=createSprite(310,400,20,100);
	w2s.shapeColor=color('red')
	w3s=createSprite(490,400,20,100);
	w3s.shapeColor=color('red')

	//Create a Ground
	ground = Bodies.rectangle(width/2, 475, width,60 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	
}


function draw() {
	Engine.update(engine)
	
  rectMode(CENTER);
  background(rgb(105,206,235));
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}





