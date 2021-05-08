class LaunchObject{
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
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

    }
}