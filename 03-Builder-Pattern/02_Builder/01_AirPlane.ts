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

