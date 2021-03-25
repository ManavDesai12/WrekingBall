class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:400,
            stiffness:0.04
        }
        this.pointB = pointB
this.rope = Constraint.create(options);
World.add(world, this.rope);
    }
    display(){
        
        push();
        stroke("yellow");
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y, this.pointB.x, this.pointB.y);
        pop();
    }
}
