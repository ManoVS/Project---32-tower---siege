class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':1.2,
            'density':1.0
        }

        this.visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
      }

      score(){
        if(this.visiblity < 0 && this.visiblity >-105){
          score = score + 1;
        }
      }

      display(){
        if(this.body.speed < 7){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(CENTER);
        fill(this.color)
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
          push();
          this.visiblity = this.visiblity - 1;
          tint(100);
          World.remove(world,this.body);
          pop();
        }


      }
}