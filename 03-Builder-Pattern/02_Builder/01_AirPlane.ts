// https://www.youtube.com/watch?v=ziQqmvfg5XE

// Credit to Theo Anderson for this explanation

// We're going to be examining the creational pattern: 

// BUILDER

/*

To preface this section, in JS and TS, we can use 
method chaining is useful when we need to find a specfic 
set of items in an array for example: 

Let's say you have an array of objects 
representing books, and you want to filter
 the books based on certain criteria and 
 then sort them by title. 
 
 You could use method chaining to 
 achieve this in a concise and readable way.

const books = [
  {title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951},
  {title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960},
  {title: '1984', author: 'George Orwell', year: 1949},
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},
  {title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', year: 1967},
  {title: 'Moby-Dick', author: 'Herman Melville', year: 1851},
];

const filteredBooks = books
  .filter(book => book.year >= 1950)  // filter books published after 1950
  .filter(book => book.author === 'J.D. Salinger')  // filter books by J.D. Salinger
  .sort((a, b) => a.title.localeCompare(b.title));  // sort books by title

console.log(filteredBooks);
In this example, we're using the filter()
 method twice to filter the books 
 first by publication year and then 
 by author, and then using the sort() 
 method to sort the remaining books by title. 
 
 By chaining these methods together,
  we can achieve our desired result in a single, 
  easy-to-read statement.

This is just a simple example, 
but in larger codebases with more c
omplex data transformations, 
method chaining can help make 
code more concise, readable, and maintainable.

*/


// Okay with the method chaining refresher out of the way
// the main idea behind the builder pattern is 
// that we can create a class, and instead of overloading 
// the constructor function, we can selectively give 
// it what it needs, then freely chain on additional methods
// in a smooth way

// We're going to demonstrate the builder pattern 
// with an example of an airline trip



type IAirlineTripFareClass = 'economy' | 'business' | 'first'
// this custom type will define the ticket options available


interface IAirLineTripOptions {
  // this interface represents the options 
  // available we can selectively pass into 
  // our constructor later 
      fromDate: Date;
      toDate: Date;
      from: string;
      to: string;
      class: IAirlineTripFareClass
      // we use the custom type we defined above 
      // for economy class, business class, first class
}

// So the above will represent our interface, 
// now we build out the class: 

class AirlineTrip {
    // we prepend the airlineOption 
    // with an octothorpe to denote 
    // it's a prviate field, this allows 
    // for adding of decorators, also means 
    // we can only access it inside the class

    // Decorators can be used to modify
    //  the behavior of a class or its 
    //  members at runtime, for example 
    //  by adding validation or logging 
    //  functionality. Decorators can also 
    //  be used for dependency injection, 
    //  as well as for registering classes 
    //  and their properties with third-party libraries.

  #airlineOptions: IAirLineTripOptions;
  // the # above denotes a private field in TS,
  // you could alternatively use the private keyword 
  // but the # is concise
    
constructor(options: IAirLineTripOptions ){
   // our constructor will use the interface 
   // IAirLineTripOptions
   this.#airlineOptions = options;
}
// Now to utilize and implement the builder 
// pattern, we'll add some methods 

changeFromDate(newDate: IAirLineTripOptions['fromDate']){
// above method will alter the from date
}
changeToDate(newDate: IAirLineTripOptions['toDate']){
    // above method will alter the to date
}

changeFrom(newFrom: IAirLineTripOptions['from']){
  // aboe method will change from string
}

changeTo(newTo: IAirLineTripOptions['to']){
    // above method will change to string
}

changeClass(newClass: IAirLineTripOptions['class'] ){
  // above method will change class string 
}
}

const summerTrip = new AirlineTrip(
       {from: 'MKE', 
         to: 'MIA',
         fromDate: new Date(),
         toDate: new Date('09/25/23'),
         class: 'economy'
        })

        // So that's our summer trip

        console.log({summerTrip})

        // 6:14