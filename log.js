class Log 
{
    constructor(x, y, width, height,angle)
     {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic': true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      
      rectMode(CENTER);
     
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }