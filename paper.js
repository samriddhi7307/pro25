class paper
{
 constructor (x,y,radius)
 {
  
 var options={
    isStatic : false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2,
 }
 this.radius = radius
 this.body = Bodies.circle(x,y,radius,options)
 World.add(world,this.body);
 this.paper = loadImage("paper.png");
 }

 display()
 {
    var pos = this.body.position;
   fill("purple")
   image(this.paper,pos.x,pos.y,50,50);
   ellipseMode(RADIUS)
   ellipse(pos.x,pos.y,this.radius,this.radius);  
 }
};