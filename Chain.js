class Chain {

    constructor (BodyX,BodyY){

        var options = {

            bodyA : BodyX,
            bodyB : BodyY,
            stiffness : 0.02,
            length : 10
        }

        this.chain=Constraint.create(options);

        World.add(myWorld,this.chain);

    }

    display(){

        var pointA, pointB;

        pointA=this.chain.bodyA.position;
        pointB=this.chain.bodyB.position;

        line (pointA.x, pointA.y, pointB.x, pointB.y);



    }


}