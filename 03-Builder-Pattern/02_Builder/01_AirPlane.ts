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

  // #airlineOptions: IAirLineTripOptions;
  // the # above denotes a private field in TS,
  // you could alternatively use the private keyword 
  // but the # is concise

  private airlineOptions: IAirLineTripOptions;

  // side note, the above # wasn't working for me 
  // or the instructor, it needs es2020 or higher 
  // I think
    
constructor(options: IAirLineTripOptions ){
   // our constructor will use the interface 
   // IAirLineTripOptions
   this.airlineOptions = options;
}
// Now to utilize and implement the builder 
// pattern, we'll add some methods 

changeFromDate(newDate: IAirLineTripOptions['fromDate']){
// above method will alter the from date
this.airlineOptions.fromDate = newDate
return this;
}
changeToDate(newDate: IAirLineTripOptions['toDate']){
    // above method will alter the to date
    this.airlineOptions.toDate = newDate;
    return this;
}

changeFrom(newFrom: IAirLineTripOptions['from']){
  // above method will change from string
  this.airlineOptions.from = newFrom;
  return this;
}

changeTo(newTo: IAirLineTripOptions['to']){
    // above method will change to string
    this.airlineOptions.to = newTo;
    return this;
}

changeClass(newClass: IAirLineTripOptions['class'] ){
  // above method will change class string 
  this.airlineOptions.class = newClass
  return this;
}
}

const summerTrip = new AirlineTrip(
  // above we define a variable, setting it with
// the new keyword, which instantiates a new AirlineTrip
// object and will save the below options to our 
// summerTrip object 
       {from: 'MKE', 
         to: 'MIA',
         fromDate: new Date(),
         toDate: new Date('09/25/23'),
         class: 'economy'
        })

        // So that's our summer trip

        console.log({summerTrip})

        /* 
       $ node 01_AirPlane.js 
{
  summerTrip: AirlineTrip {
    airlineOptions: {
      from: 'MKE',
      to: 'MIA',
      fromDate: 2023-05-11T13:08:58.188Z,
      toDate: 2023-09-25T05:00:00.000Z,
      class: 'economy'
    }
  }
}

        */

// So that summer trip object now has all our passed 
// in options, now let's chain some methods on 
// our summner trip to change some things 

// But now we need to go back into the change the methods 
// above, adding return statements to return the instance

// summerTrip.changeClass('first')

// now above, after adding the 'return this' to our 
// methods, we get that intellisense for the other 
// methods, we can now chain them!

// Above we just added this.airlineOptions.class = newClass
// in every method, with their respective this.airlineOptions = 


summerTrip.changeClass('business').
           changeFrom('CHI').
           changeTo('BZN').
           changeClass('first')

// So now if we console.log summerTrip we 
// see we're now flying out of Chicago going 
// to Bozeman Yellowstone, and we can see that we can 
// use change class twice if we wanted to, but the 
// new airline trip summerTrip object now looks like:            
console.log(summerTrip)
/*
AirlineTrip {
  airlineOptions: {
    from: 'CHI',
    to: 'BZN',
    fromDate: 2023-05-11T13:34:03.896Z,
    toDate: 2023-09-25T05:00:00.000Z,
    class: 'first'
  }
}
*/