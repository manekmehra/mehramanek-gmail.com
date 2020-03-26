const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,ball1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var options={
    restitution:1.0
}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball = Bodies.circle(200,200,50)
    ball1 = Bodies.circle(190,200,50,options)
World.add(world,ball)
World.add(world,ball1)
    console.log(ground);
}

function draw(){
    
    background(0);

    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball.position.x,ball.position.y,10,10)
    ellipse(ball1.position.x,ball1.position.y,50,50)
    
}