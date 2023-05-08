// Interface segregation principle 


interface Exercise {
    indoors: boolean;
    outdoors: boolean;
    requiresLargeEquipment: boolean;
  }
  
  interface CardioExercise extends Exercise {
    cardio: boolean;
  }
  
  class Running implements CardioExercise {
    indoors = true;
    outdoors = true;
    requiresLargeEquipment = false;
    cardio = true;
  }
  
  class Weights implements Exercise {
    indoors = true;
    outdoors = false;
    requiresLargeEquipment = true;
  }


  const tuesday = new Running();

  console.log(tuesday);

  export default Exercise

  // we use the new keyword to create a new instance 
  // of the Running class, when we use new we essentially 
  // call the class constructor

  // the () means we aren't passing any values into 
  // a constructor, remember if we don't define 
  // a constructor func, a default constructor 
  // is created for us, another ex:

  
//   class Person {
//     name: string;
//     age: number;
  
//     greet() {
//       console.log(`Hello, my name is 
// ${this.name} and I am ${this.age} years old.`);
//     }
//   }

//   Even though we didn't explicitly define a 
// constructor function, we can still create new 
// instances of the Person class using the new keyword:
  
//   const alice = new Person();
//   In this case, the Person constructor
//  function is created automatically, and it 
//  simply creates a new object with the
//   properties name and age set to undefined, 
//   because we haven't initialized them yet.
  
//   If you wanted to initialize the name and 
// age properties for new Person objects, you would
//  need to either define a constructor function that
//   sets those properties, or set them directly
//    after creating a new instance, like this:
  
//   const alice = new Person();
//   alice.name = "Alice";
//   alice.age = 30;
  