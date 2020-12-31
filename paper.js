class Paper{
    constructor(x,y){
 var options ={
    isStatic:false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
}
   this.body=Bodies.circle(x,y,2,options);
   this.radius=2
   //this.velocityX=3;
   //this.body.velocityX=3;
   World.add(world, this.body);
    }

display(){
    var pos=this.body.position;
fill("black")
circle(pos.x,pos.y,20)
}
};