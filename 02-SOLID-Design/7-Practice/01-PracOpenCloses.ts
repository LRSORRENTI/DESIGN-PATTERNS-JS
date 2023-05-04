// Going to try and practice the open closed principle

class LifeForm {
    isAlive: true;
}

class WarmBlooded extends LifeForm {
    warmBlood: true;
    // cannot change the isAlive boolean
}

class ColdBlooded extends LifeForm{
    coldBlood: true;
    // cannot change the isAlive boolean
}

class Mammal extends WarmBlooded {
     // additional Mammal characteristics
     // Cannot change isAlive, or warmBlood 
     // booleans
}

class Reptilian extends ColdBlooded{
  // Additional Reptilian characteristics
  // but cannot change coldBlood or isAlive 
  // booleans
}



//GPT:

// Based on the provided example, it appears that the open 
// closed principle is being followed.
//  The open closed principle states that software entities
//   (classes, modules, etc.) should be open for extension 
//   but closed for modification, 
//   and the example seems to adhere to this principle.

// Specifically, the example defines two abstract classes 
// (WarmBlooded and ColdBlooded) that extend the LifeForm class,
//  and two concrete classes (Mammal and Reptilian)
//   that extend their respective abstract classes.

// The concrete classes (Mammal and Reptilian)
//  can add additional characteristics and functionality, 
//  but they cannot modify the behavior or properties
//   of their parent classes. This demonstrates the 
//   "closed for modification" aspect of the open 
//   closed principle.

// Furthermore, the abstract classes (WarmBlooded and ColdBlooded) 
// are designed to be extended by other classes, 
// which demonstrates the "open for extension" 
// aspect of the principle. By using this approach,
//  it's possible to add new types of organisms 
//  (e.g., birds, fish) without having to modify 
//  the existing code.

// Overall, it seems that the example is a 
// good illustration of the open closed principle.