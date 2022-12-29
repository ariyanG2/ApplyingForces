class Sphere{
    constructor(x, y, r){
        var prop = {
            isStatic: false,
            //restitution (bounciness, or bounce)
            restitution: 0.9
        }
        this.body=Bodies.circle(x, y, r, prop)
        World.add(world,this.body)
        this.r = r
    }
    display (){
        ellipseMode(RADIUS)
        fill ("red")
        noStroke();
        ellipse(this.body.position.x, this.body.position.y, this.r)
    }
}


