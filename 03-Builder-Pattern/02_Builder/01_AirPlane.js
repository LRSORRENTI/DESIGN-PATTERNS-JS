// https://www.youtube.com/watch?v=ziQqmvfg5XE
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _AirlineTrip_airlineOptions;
// So the above will represent our interface, 
// now we build out the class: 
var AirlineTrip = /** @class */ (function () {
    function AirlineTrip(options) {
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
        _AirlineTrip_airlineOptions.set(this, void 0);
        // our constructor will use the interface 
        // IAirLineTripOptions
        __classPrivateFieldSet(this, _AirlineTrip_airlineOptions, options, "f");
    }
    // Now to utilize and implement the builder 
    // pattern, we'll add some methods 
    AirlineTrip.prototype.changeFromDate = function (newDate) {
    };
    AirlineTrip.prototype.changeToDate = function (newDate) {
    };
    AirlineTrip.prototype.changeFrom = function (newFrom) {
    };
    AirlineTrip.prototype.changeTo = function (newTo) {
    };
    AirlineTrip.prototype.changeClass = function (newClass) {
    };
    return AirlineTrip;
}());
_AirlineTrip_airlineOptions = new WeakMap();
var summerTrip = new AirlineTrip({ from: 'MKE',
    to: 'MIA',
    fromDate: new Date(),
    toDate: new Date('09/25/23'),
    "class": 'economy'
});
