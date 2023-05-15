/* 
=================
Substitutability
=================

In OOP, it's said that: 

If S is a subtype of T,
then objects of type T,
are interchangeable with
objects of type S

This means that if a program is written
 to work with objects of type T, 
 it should be able to work just as 
 well with objects of type S, 
 as long as S is a subtype of T. 
 
 In other words, objects of type S 
 should be able to seamlessly substitute
  for objects of type T in any part of 
  the program without causing any errors
   or unexpected behavior.

By following the Liskov Substitution 
Principle, we can create more flexible
 and extensible code that is easier 
 to maintain and modify over time. 
 
 It allows us to write code that can
  be easily extended or modified by 
  adding new subtypes, without having 
  to rewrite large portions of the 
  existing code.
*/



// class Rectangle {
//     // Our main class of Rectangle,
//     // below is a constructor func 
//     // to set the width and height 
//     // of each instance of Rectangle 
//     // when it's created
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

// // Method to set the width property
// // of a Rectangle object
// setWidth(width){
//     this.width = width;
// }

// // Method to set the height property 
// //of a Rectangle object

// setHeight(height){
//     this.height = height;
// }

//     // Method to calculate the area of a Rectangle object
// area(){
//     return this.width * this.height
// }

// }

// class Square extends Rectangle {
//     // Our Square class extends our Rectangle class
//     // so it inherits its properties and methods
//     setWidth(width){
//         // This method sets the width of a square object
//         // but also updates the height property to be the same
//         this.width = width;
//         this.height = height;
//     }
  
//     setHeight(height){
//         // This method sets the height of a square object
//         // but also updates the width property to be the same
//         this.height = height;
//         this.width = width;
//         // Every square must have equal height and width
//         // otherwise it's not a true sqaure
//     }
// }


// function increaseRectWidth(rect){
//     // This function takes a Rectangle object 
//     //as an argument and increases its
//     // width by 1 using the setWidth method
//     rect.setWidth(rect.width + 1);
// }

// const rect1 = new Rectangle(10, 2);
// const square1 = new Square(5, 5);

// console.log(rect1.area());// 20
// console.log(square1.area()); // 25



// increaseRectWidth(rect1)
// increaseRectWidth(square1)

// console.log(rect1, square1) 
// As of right now, we're failing the liskov 
// principle, a sqaure can't be in place of a rectangle

// One way is to change what we're inheriting from

// Let's create a new class called shape

class Shape {
    // and this shape class will have the 
    // area function from below
    area(){

    }
}

// So now both class of Rectangle and 
// Square are extended from Shape, 
// instead of extending from Rectangle

// In essence, with Liskov, we need to have 
// a top-level class, which sub-classes can 
// extend from, and be interchangeable with

// Every shape, doesn't matter if it's a rectangle
// square, dodecahedron, doesn't matter, if it's 
// something we can implement logic to calculate the 
// area, we can extend the class of shape to it

class Dodecahedron extends Shape {
    area(edgeLength) {
        const faceArea = Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(edgeLength, 2);
        const totalArea = faceArea * 12;
        return totalArea;
      }
      
}



class Rectangle extends Shape {
    // Our main class of Rectangle,
    // below is a constructor func 
    // to set the width and height 
    // of each instance of Rectangle 
    // when it's created
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

// Method to set the width property
// of a Rectangle object
setWidth(width){
    this.width = width;
}

// Method to set the height property 
//of a Rectangle object

setHeight(height){
    this.height = height;
}

    // Method to calculate the area of a Rectangle object
area(){
    return this.width * this.height
}

}

class Square extends Shape {
    // Our Square class extends our Rectangle class
    // so it inherits its properties and methods
    setWidth(width){
        // This method sets the width of a square object
        // but also updates the height property to be the same
        this.width = width;
        this.height = height;
    }
  
    setHeight(height){
        // This method sets the height of a square object
        // but also updates the width property to be the same
        this.height = height;
        this.width = width;
        // Every square must have equal height and width
        // otherwise it's not a true sqaure
    }
}


function increaseRectWidth(rect){
    // This function takes a Rectangle object 
    //as an argument and increases its
    // width by 1 using the setWidth method
    rect.setWidth(rect.width + 1);
}

const rect1 = new Rectangle(10, 2);
const square1 = new Square(5, 5);

console.log(rect1.area());// 20
console.log(square1.area()); // 25



increaseRectWidth(rect1)
increaseRectWidth(square1)

console.log(rect1, square1) 