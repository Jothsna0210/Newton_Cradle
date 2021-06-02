class Bob{
    constructor(x,y)
    {
        var options=
        {
            'friction':1,
            'isStatic':false,
            'restitution':1.1,
            'density':1
        } 
    this.body=Bodies.circle(x,y,30,options)
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(1);
        stroke("black");
        fill("teal");
        ellipse(0,0,60);
        pop();
    }
}