class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB: {x:this.offsetX,y:this.offsetY}
        }
        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        var line1 = point1.x
        var line2 = point1.x

        var line3 = point2.x + this.offsetX;
        var line4 = pint2.y + this.offsetY;

        line (line1,line2,line3,line4)
    }
}