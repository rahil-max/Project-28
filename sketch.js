
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone1,sling1;
var boy;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var gamestate = "static";


function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new stone(80,580,20,40);

	sling1 = new sling(stone1.body,{x:80,y:580});
	
	mango1 = new mangoes(750,260,20,40);
	mango2 = new mangoes(680,320,20,50);
	mango3 = new mangoes(830,310,20,60);
	mango4 = new mangoes(660,380,20,70);
	mango5 = new mangoes(900,340,20,40);
	mango6 = new mangoes(760,400,20,50);
	mango7 = new mangoes(750,340,20,60);
	mango8 = new mangoes(860,380,20,70);
	mango9 = new mangoes(580,390,20,40);
	mango10 = new mangoes(950,400,20,60);

	fill("brown");
	ground = Bodies.rectangle(width/2, height, width, 40 , {isStatic:true,friction:1} );
	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  rect(width/2,height,width,40);

  image(boy,50,530,200,200);

  imageMode(CENTER);
  image(tree,750,450,500,500);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

 stone1.display();

isTouching(stone1,mango1);
isTouching(stone1,mango2);
isTouching(stone1,mango3);
isTouching(stone1,mango4);
isTouching(stone1,mango5);
isTouching(stone1,mango6);
isTouching(stone1,mango7);
isTouching(stone1,mango8);
isTouching(stone1,mango9);
isTouching(stone1,mango10);


  drawSprites();
 
}

function isTouching(body1,body2){
	var pos1 = body1.body.position;
	var pos2 = body2.body.position;

	var distance = dist(pos1.x,pos1.y,pos2.x,pos2.y)
	
	var sum = body1.radius + body2.radius;
	if(distance<=sum){
		Matter.Body.setStatic(body2.body,false);
	}
	 }
	

	function mouseDragged (){
    if(gamestate==="static"){
		 Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
		 
	 }
	}

	 function mouseReleased(){
		 sling1.fly();
		 gamestate = "launched";
	 }
 
	 function keyPressed(){
		 if(keyCode===32){
			 Body.setPosition(stone1.body,{x:80,y:580});
			 sling1.attach(stone1.body);
			 gamestate = "static";
		 }
	 }

