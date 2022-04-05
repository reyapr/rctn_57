class Shape {
    area() {
      return 0;
    }
    perimeter() {
      return 0;
    }
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Circle extends Shape {
    constructor(r) {
      super();
      this.radius = r;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  
    perimeter() {
      return Math.PI * this.radius * 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(w, h) {
      super();
      this.width = w;
      this.height = h;
    }
  
    area() {
      return this.width * this.height;
    }
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const shapes = [new Circle(3), new Rectangle(2, 3)];
  
  console.log(shapes[0] instanceof Shape, `<===================  ==================`);
  console.log(shapes[1], `<===================  ==================`);