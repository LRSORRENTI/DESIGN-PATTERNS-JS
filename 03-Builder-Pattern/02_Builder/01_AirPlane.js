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
    };
    AirlineTrip.prototype.changeToDate = function (newDate) {
        // above method will alter the to date
    };
    AirlineTrip.prototype.changeFrom = function (newFrom) {
        // aboe method will change from string
    };
    AirlineTrip.prototype.changeTo = function (newTo) {
        // above method will change to string
    };
    AirlineTrip.prototype.changeClass = function (newClass) {
        // above method will change class string 
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
// 6:14
