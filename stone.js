class stone{
    constructor(x,y,radius,size){
        var options = {
            //isStatic:true,
            friction : 1,
            density : 1.2,
            restitution : 0
        }
        this.body = Bodies.circle(x,y,radius,options,size);
        this.size = size;
        this.radius = radius;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

         push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.size,this.size);
        pop();
    }
}