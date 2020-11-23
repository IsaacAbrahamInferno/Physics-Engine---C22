const Engine = Matter.Engine; //universe //Namespace
const World= Matter.World; //earth
const Bodies = Matter.Bodies; //humans

var ball;

var universe,earth,ground;

function setup(){

  createCanvas(400,400);

  universe = Engine.create();
  earth = universe.world;

var ground_options ={
  isStatic : true
}
var ball_options={
  restitution:1
}

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(earth,ground);

  ball = Bodies.circle(220,220,20,ball_options);
  World.add(earth,ball);
  //console.log(humans.position.x);
  //console.log(humans.position.y);
}

function draw(){
  background("blue");

  Engine.update(universe);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(CENTER);
  circle(ball.position.x,ball.position.y,20);

}