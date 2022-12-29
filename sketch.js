//const is used for constant and var can be changed later
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  g1 = new Ground (200, 390, 400, 20)
  g2 = new Ground (200, 10, 400, 20)
  g3 = new Ground (10, 200, 20, 400)
  g4 = new Ground (390, 200, 20, 400)
  s1 = new Sphere (200, 50, 20)
  
  b1 = createImg("push.png")
  b1.position(290, 30)
  b1.size(50, 50)
  b1.mouseClicked(function(){
    Matter.Body.applyForce(s1.body, {x:0, y:0}, {x:0.05, y:0.03})
  })
}

function draw() {
  background(51);
  Engine.update(engine);
  g1.display()
  g2.display()
  g3.display()
  g4.display()
  s1.display()
}

