class Rectangle{
    constructor(breadth, length){
        this.breadth = breadth;
        this.length= length;
    }
    get width(){
        return this.breadth;
    }

    get height(){
        return this.length;
    }

    getArea(){
        return this.breadth*this.length;
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side, side);
        this.side = side;
    }
    getPerimeter(){
        return 4*this.side;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
