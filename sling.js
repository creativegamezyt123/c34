class Sling{
    constructor(bodyA,pointB){
        var options =   {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            angularStiffness : 1,
            length : 220
        };
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y - 250;
        this.sling = Constraint.create(options);
        World.add(worl,this.sling);
    }
    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWieght(3.5);
            stroke("#fff");
            line(pointA.x,pointB.y,pointA.y,pointB.y);
            pop();
        }
    }
}