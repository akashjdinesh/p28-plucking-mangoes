class LaunchObject{
    constructor(body,pointB){
        var options ={
            bodyA: body,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
    this.bodyA=body;
    this.pointB = pointB;
    this.launchObject= Constraint.create(options);
    World.add(world, this.launchObject);
    }
    attach(body){
        this.launchObject.bodyA=body;
    }

    fly(){
       this.launchObject.bodyA=null;
    }

    display(){
     if(this.launchObject.bodyA){
         var pointA=this.bodyA.position
         var pointB=this.pointB
         strokeWeight(2)
         line(pointA.x,pointA.y,pointB.x,pointB.y)
     }
    }
}
