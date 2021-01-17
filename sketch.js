const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine,ground;

function setup() {
  createCanvas(400,400);
 

  engine=Engine.create();
  world=engine.world;
  
  var oboptions={
    isStatic : true
  }
ground=Bodies.rectangle(200,390,400,20,oboptions);
World.add(world,ground);


}

function draw() {
  background("black");
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}