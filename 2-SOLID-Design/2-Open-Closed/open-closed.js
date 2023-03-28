// MEANING :
// OPEN FOR EXTENSION
// CLOSED FOR MODIFICATION 
// THE OPEN / CLOSED PRINCIPLE



// Let's have a website where users can 
// search for different products based on 
// certain criteria

// Now JS doesn't have enumerations, so we'll 
// use Object.freeze()

// Object.freeze() is a built-
//in method in JavaScript that allows 
// you to freeze an object, making it 
// immutable. Once an object is frozen,
//  its properties cannot be added,
//   deleted, or changed. This method 
//   is useful in situations where 
//   you want to make sure that an object
//    remains in a certain state and cannot
//     be modified accidentally or intentionally.

// // Some common use cases for Object.freeze() 
// in JavaScript include:

// // Preventing modification 
// of constant values: If you 
// have certain values in your
//  code that should not be changed,
//   you can freeze them using
//    Object.freeze(). This ensures
//     that the values remain constant 
//     throughout the execution of your code.

// // Enforcing immutability in
// functional programming: In functional 
// programming, it's common to use immutable
//  data structures to avoid side effects 
//  and make the code more predictable.
 
//  Object.freeze() can be used to enforce
//   immutability in JavaScript objects.

// // Preventing accidental 
// modification of shared objects: 
// If you have multiple parts of 
// your code that share an object, 
// you may want to freeze the object
//  to prevent accidental modifications 
//  by one part of the code from affecting
//   the other parts.

// // Overall, Object.freeze() is a 
// powerful tool for ensuring the
//  integrity of your data and preventing
//   unintended modifications.

let Color = Object.freeze({
    red: 'red',
    blue: 'blue',
    green: 'green'

});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
})

class Product {
    constructor(name, color, size ){
        this.name = name;
        this.color = color;
        this.size = size;
    }
}
// In order to filter products we should 
// create a filter 

class ProductFilter {
    filterByColor(products, color){
        return products.filter(p => 
            p.color === color);
    }
    filterBySize(products, size){
        return products.filter(p => 
         p.size === size)
    }
   filterBySizeAndColor(products, size, color ){
    return products.filter( p =>
        p.size === size && p.color === color)
   }
}

let apple = new Product('Apple', Color.green, Size.small);

let tree = new Product('Tree', Color.green, Size.large);

let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

// So now that we have instances of our Pruduct 
// class saved to three variables, and also saved 
// all three to an array called products, let's 
// filter them 

let prodFilter = new ProductFilter();
console.log(`Green products (old):`)
for(let p of prodFilter.filterByColor(products, Color.green)){
    console.log(` * ${p.name} is green`)
}

// Green products (old):
//  * Apple is green
//  * Tree is green

// We can also filter by size, so if we go back to 
// ProuctFilter and add a method to filter by size

/// ====================================
// So back to the open-closed principle, 
// essentially, this dictates that objects 
// are open for extension but closed for modification

// So if we add methods to class ProductFilter, 
// that's modification, a class that might 
// already have been tested, might have already 
// been deployed, and it's now had changes made to 
// it

// And by extension we mean inheritance, So we 
// already violated the OCP since we added the 
// filter by size method after the 
// filter by color method in ProductFilter

// And if we keep adding methods, we'll have 
// what's known as a 'state space explosion'

// In computer science, 
// a "state space" refers
//  to the set of all possible
//   configurations or states that
//    a system can be in. When 
//    designing a program, it's 
//    often necessary to consider 
//    all the possible states that 
//    the program could be in 
//    and how it should behave in each state.

// The problem with state spaces 
// is that they can become very 
// large very quickly, especially 
// in complex systems. For example,
//  consider a program that has 
//  just two Boolean variables. 
 
//  Each variable can be in one 
//  of two states (true or false). 
//  This means that there are a 
//  total of 2x2 = 4 possible 
//  states that the program can be in.
 
//  If the program had three Boolean 
//  variables, there would be 2x2x2 = 8 
//  possible states. As you can see,
//   the number of possible states
//    increases exponentially as
//     the number of variables in 
//     the program grows.

// State space explosion occurs
//  when the number of possible 
//  states in a program becomes 
//  so large that it becomes impractical
//   or impossible to consider 
//   all of them. 
  
//   This can happen when
//    dealing with complex 
//    systems or large datasets. 
//    In some cases, it may be
//     necessary to use 
//     approximation or
//      simplification techniques
//       to manage the state space, 
//       or to use more powerful
//        computing resources to
//         handle the increased complexity.

// State space explosion is a
//  major challenge in many areas
//   of computer science, 
//   including software verification,
//    model checking, and artificial intelligence.


// ==========================
 // SPECIFICATION PATTERN
 // =========================

 // the specification pattern helps use 
 // create modular, and keeps us away from 
 // state space explosions 

 // The idea is when we want to filter things 
 // we specify, we create a separate class 
 // for that specific type of filtering 

 // a specification class


 class ColorSpecification()