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

class Square
{
  constructor(side)
  {
    this.side = side;
  }
}

function area(rectangle)
{
  return rectangle._width * rectangle._height;
}


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

