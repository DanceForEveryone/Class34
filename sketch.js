const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var ball, slingshot;

function preload() {
    backgroundImg = loadImage("bg1.jpg");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height,width,50);
    

    box1 = new Box(width/2,320,100,100);
    box2 = new Box(width/2+220,320,100,100);
    box3 = new Box(width/2,240,100,100);
    box4 = new Box(width/2+220,240,100,100);
    
    box5 = new Box(width/2,320,100,100);
    box6 = new Box(width/2+220,320,100,100);
    box7 = new Box(width/2,240,100,100);
    box8 = new Box(width/2+220,240,100,100);

    box9 = new Box(width/2,320,100,100);
    box10 = new Box(width/2+220,320,100,100);
    box11 = new Box(width/2,240,100,100);
    box12 = new Box(width/2+220,240,100,100);
    
    box13 = new Box(width/2,320,100,100);
    box14 = new Box(width/2+220,320,100,100);
    box15 = new Box(width/2,240,100,100);
    box16 = new Box(width/2+220,240,100,100);

    box17 = new Box(width/2,320,100,100);
    box18 = new Box(width/2+220,320,100,100);
    box19 = new Box(width/2,240,100,100);
    box20 = new Box(width/2+220,240,100,100);
    


    ball = new Ball(100,200,80);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(ball.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
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
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    
    

    ball.display();
    slingshot.display();    
}

function mouseDragged() {
console.log("mouseDragged")
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


