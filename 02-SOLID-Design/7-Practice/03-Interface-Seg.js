// Interface segregation principle 
var Running = /** @class */ (function () {
    function Running() {
        this.indoors = true;
        this.outdoors = true;
        this.requiresLargeEquipment = false;
        this.cardio = true;
    }
    return Running;
}());
var Weights = /** @class */ (function () {
    function Weights() {
        this.indoors = true;
        this.outdoors = false;
        this.requiresLargeEquipment = true;
    }
    return Weights;
}());
var tuesday = new Running();
console.log(tuesday);
