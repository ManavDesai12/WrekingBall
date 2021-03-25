class Box{
    constructor(x, y){
        var options={
            resitution:0.04,
            density:0.1,
            friction:0.14
        }
this.body = Bodies.rectangle(x, y, 50, 50, options);
this.width = 50;
this.height = 50;
World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("brown");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
