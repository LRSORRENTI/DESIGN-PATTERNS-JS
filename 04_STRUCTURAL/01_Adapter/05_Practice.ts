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

// What is the existing exercise code, what is it 
// doing?

// What's the end goal? 

