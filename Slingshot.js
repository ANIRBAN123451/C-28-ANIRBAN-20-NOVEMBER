class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB= pointB;
        World.add(world, this.chain);
    }
    fly(){

        this.chain.bodyA= null;
    }

    display(){
        if(this.chain.bodyA){
        var posA = this.chain.bodyA.position;
        var posB = this.pointB;
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y);
        }
    }

 
}