class Box {
    constructor(x, y) {
      var options = {
        isStatic : true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 30, options);
      this.width = 50;
      this.height = 25;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      
      strokeWeight(4);
      fill(0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  