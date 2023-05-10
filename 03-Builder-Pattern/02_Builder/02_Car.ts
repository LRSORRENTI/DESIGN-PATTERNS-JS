// In this  code, we've added 
// the make, model, year, engineSize, 
// and color properties to the CarBuilder 
// interface, so TypeScript recognizes 
// these properties on the CarBuilder instance.


interface CarBuilder {
    make: string;
    model: string;
    year: number;
    engineSize: number;
    color: string;

    setMake(make: string): void;
    setModel(model: string): void;
    setYear(year: number): void;
    setEngineSize(size: number): void;
    setColor(color: string): void;

    getResult(): Car;
}

// We've also updated the Car class to use 
// these properties in its constructor.

class Car {
    constructor(private builder: CarBuilder) {}

    get make(): string {
        return this.builder.make;
    }

    get model(): string {
        return this.builder.model;
    }

    get year(): number {
        return this.builder.year;
    }

    get engineSize(): number {
        return this.builder.engineSize;
    }

    get color(): string {
        return this.builder.color;
    }
}

 // Additionally, we've made the make,
//  model, year, engineSize, and color
//   properties public in the CarBuilderImpl
//    class, so we can set them directly
//     in the set* methods. Finally, 
//     we've updated the getResult()
//      method to return a new instance 
//      of the Car class with the CarBuilder 
//      instance passed to its constructor.


class CarBuilderImpl implements CarBuilder {
    make: string;
    model: string;
    year: number;
    engineSize: number;
    color: string;

    constructor() {}

    setMake(make: string): void {
        this.make = make;
    }

    setModel(model: string): void {
        this.model = model;
    }

    setYear(year: number): void {
        this.year = year;
    }

    setEngineSize(size: number): void {
        this.engineSize = size;
    }

    setColor(color: string): void {
        this.color = color;
    }

    getResult(): Car {
        return new Car(this);
    }
}

const builder = new CarBuilderImpl();
builder.setMake('Toyota');
builder.setModel('Corolla');
builder.setYear(2022);
builder.setEngineSize(1.8);
builder.setColor('Red');
const car = builder.getResult();
console.log(car.make, car.model, car.year, car.engineSize, car.color);
