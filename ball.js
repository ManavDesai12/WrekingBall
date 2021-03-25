class Ball{
    constructor(x, y){
        var options={
            resitution:0.04,
            density:10,
            friction:0.14
        }
this.body = Bodies.circle(x, y, 50, options);
this.radius = 80;
World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("gray");
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();
    }
}
