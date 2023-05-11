// https://www.youtube.com/watch?v=ziQqmvfg5XE
// So the above will represent our interface, 
// now we build out the class: 
var AirlineTrip = /** @class */ (function () {
    // side note, the above # wasn't working for me 
    // or the instructor, it needs es2020 or higher 
    // I think
    function AirlineTrip(options) {
        // our constructor will use the interface 
        // IAirLineTripOptions
        this.airlineOptions = options;
    }
    // Now to utilize and implement the builder 
    // pattern, we'll add some methods 
    AirlineTrip.prototype.changeFromDate = function (newDate) {
        // above method will alter the from date
        this.airlineOptions.fromDate = newDate;
        return this;
    };
    AirlineTrip.prototype.changeToDate = function (newDate) {
        // above method will alter the to date
        this.airlineOptions.toDate = newDate;
        return this;
    };
    AirlineTrip.prototype.changeFrom = function (newFrom) {
        // above method will change from string
        this.airlineOptions.from = newFrom;
        return this;
    };
    AirlineTrip.prototype.changeTo = function (newTo) {
        // above method will change to string
        this.airlineOptions.to = newTo;
        return this;
    };
    AirlineTrip.prototype.changeClass = function (newClass) {
        // above method will change class string 
        this.airlineOptions["class"] = newClass;
        return this;
    };
    return AirlineTrip;
}());
var summerTrip = new AirlineTrip(
// above we define a variable, setting it with
// the new keyword, which instantiates a new AirlineTrip
// object and will save the below options to our 
// summerTrip object 
{ from: 'MKE',
    to: 'MIA',
    fromDate: new Date(),
    toDate: new Date('09/25/23'),
    "class": 'economy'
});
// So that's our summer trip
console.log({ summerTrip: summerTrip });
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
    changeClass('first');
// So now if we console.log summerTrip we 
// see we're now flying out of Chicago going 
// to Bozeman Yellowstone, and we can see that we can 
// use change class twice if we wanted to, but the 
// new airline trip summerTrip object now looks like:            
console.log(summerTrip)