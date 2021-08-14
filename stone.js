class Stone{
    constructor(x,y,r){
       
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }

        this.x=x
        this.image = loadImage("stone.png")
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);
    }
}