// Adapter Coding Exercise

// You are given a class called Square
//  and a function calculateArea() which
//   calculates the area of a given rectangle.

// In order to use Square in calculate_area, 
// instead of augmenting it with width/height
//  members, please implement the 
//  SquareToRectangleAdapter class. 
 
//  This adapter takes a square and adapts
//   it in such a way that it can be used as
//    an argument to calculateArea().

// class Square
// {
//   constructor(side)
//   {
//     this.side = side;
//   }
// }

// function area(rectangle)
// {
//   return rectangle._width * rectangle._height;
// }


// build an adapter called SquareToRectangleAdapter
// s.t. we could call
//
// let sq = new Square(123);
// area(new SquareToRectangleAdapter(sq));

// ok how do I do this? Let's pseudo code it first, 

// What is the problem we have to solve here? 

// We need to implement a Square to Rect class that 
// utilizes the adapter pattern, this will adapt 
// a square object to be used as an argument 
// in the calculate area function

// What is the existing exercise code, what is it 
// doing?

// We have a class of Square that constructs an 
// object and takes in a side length, and we have 
// a function to calculate the area of a rectangle

// What's the end goal? 

// We need to adapt this square class, so it can 
// take in a Square object as an input, and 
// adapt it to behave like a rectangle so it 
// be used in area(), the adapter will need 
// width and height properties 

// class SquareToRectangleAdapter extends Square{
//     // we need to adapt Square in here, to 
//     // adapt a Sqaure object to behave like 
//     constructor(square) {
//         super(square.side); 
//         // Call the parent class
//         // constructor with the side 
//         //length of the square
    
//         // Add the necessary properties to simulate a rectangle
//         this._width = square.side;
//         this._height = square.side;
//       }
// }

// class Square {
//          constructor(side) {
//             this.side = side;
//           }
//     }
  
  
//     class SquareToRectangleAdapter extends Square {
//         constructor(square) {
//           super(square.side);
//           this._width = square.side;
//           this._height = square.side * 2; // Assuming a rectangle with double the height of the square
//         }
//       }
      
// // So now I need to actually create a new instance 
// // object of it 

// const sqRect = new SquareToRectangleAdapter(123);

// console.log(sqRect)

// function area(rectangle)
// {
//   return rectangle._width * rectangle._height;
// }

// area(sqRect)

class Square {
    side: number;

    // This class Square represents
    //  a square shape.

    // It has a single property side of type number.
    // The constructor takes a side
    //  parameter and assigns it to the
    //   side property of the class instance.
    constructor(side: number) {
      this.side = side;
    }
  }
  
    // This class SquareToRectangleAdapter adapts
    //  a Square object to behave like a rectangle.

  class SquareToRectangleAdapter {
    private square: Square;
    // It has a private property square of type
    //  Square to store the adapted square.
  
    constructor(square: Square) {
      this.square = square;
    //   The constructor takes a Square object 
    //   as a parameter and assigns 
    //   it to the square property.
    }
  
    get _width() {
      return this.square.side;
    //   The get _width() method returns
    //    the width of the adapted rectangle,
    //    which is equal to the side 
    //    length of the square.
    }
  
    get _height() {
      return this.square.side * 2;
    //   The get _height() method returns
    //    the height of the adapted rectangle,
    //    which is twice the side length of the square.
    }
  }
  
  const square = new Square(123);
  // we then create new instances of square 
  // and sqToRect with the 'new' keyword
const sqRect = new SquareToRectangleAdapter(square);

// now we can also access the values of the 
// adapted width and height properties

console.log(sqRect._width, sqRect._height);  // Output: 123 246
