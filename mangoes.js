class mangoes{
    constructor(x,y,radius,size){
        var options = {
            isStatic:true,
            friction : 1,
            density : 1.2,
            restitution : 0.4
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.size=size;
        this.radius = radius;
        this.image = loadImage("mango.png");
        
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