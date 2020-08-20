class sling{
    constructor(bodyA,pointB){
      var options = {
            bodyA:bodyA,
            pointB:pointB,  
            stiffness : 0.004,
            length : 5
    
        }
        this.pointB = pointB;
        this.body = Matter.Constraint.create(options);
        World.add(world,this.body);
    }

    
    fly() {
        this.body.bodyA = null;
    }
    
    attach(body){
      this.body.bodyA = body;
    }
    }
