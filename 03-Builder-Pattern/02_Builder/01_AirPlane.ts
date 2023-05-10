// https://www.youtube.com/watch?v=ziQqmvfg5XE

// Credit to Theo Anderson for this explanation

type IAirlineTripFareClass = 'economy' | 'business' | 'first'


interface IAirLineTripOptions {
      fromDate: Date;
      toDate: Date;
      from: string;
      to: string;
      class: IAirlineTripFareClass
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
    
constructor(options: IAirLineTripOptions ){
   // our constructor will use the interface 
   // IAirLineTripOptions
   this.#airlineOptions = options;
}
// Now to utilize and implement the builder 
// pattern, we'll add some methods 
changeFromDate(newDate: IAirLineTripOptions['fromDate']){

}
changeToDate(newDate: IAirLineTripOptions['toDate']){
    
}

changeFrom(newFrom: IAirLineTripOptions['from']){

}

changeTo(newTo: IAirLineTripOptions['to']){
    
}

changeClass(newClass: IAirLineTripOptions['class'] ){

}
}

const summerTrip = new AirlineTrip(
       {from: 'MKE', 
         to: 'MIA',
         fromDate: new Date(),
         toDate: new Date('09/25/23'),
         class: 'economy'
        })