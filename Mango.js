class Mango{
    constructor(x,y,radius) {
      var options = {
          restitution:0,
          friction:1,
          isStatic:true
        
      }
    this.image=loadImage("Plucking mangoes/mango.png");
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      imageMode(CENTER);
      fill("pink");
    image(this.image,0,0,this.radius,this.radius);
    pop();
    }
  };