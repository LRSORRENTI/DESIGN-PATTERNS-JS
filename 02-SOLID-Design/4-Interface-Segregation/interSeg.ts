/*
=======================
INTERFACE SEGREGATION
=======================

What is inteface segregation? 

In order to utilize the power of abstraction, we 
use interfaces in OOP design

It's possible to hide all the implementation 
details behind interfaces, and let the classes 
implement and utilize them 

One issue that arises is that this can sometimes
create 'fat' interfaces, interfaces that have excess
functionality

Instead we can use interface segregation to design 
multiple smaller interfaces, sort of an extension 
of SRP, one interface shouldn't have excess 
responsibility, instead multiple intefaces should 
handle different responsibilities

*/

// Let's look at a real world example, 
// if we have two types of ATM's, one 
// that's withdrawal only, and one 
// that's deposit only

// But it's possible there's a single 
// type of ATM that has both 
// kinds of functionality

// The advantage of having separate ATM's 
// is that the people who need to deposit or 
// withdrawal only, can use the purpose built 
// ATM with that respective functionality

// Essentially we don't want classes that implement 
// interfaces to have many unused functions 

// So if we have a class, which doesn't implement 
// most of the functionality of a given interface,
// this InterSeg principle has been violated 

interface Store {
    // We have an interface called Store 
    // This interface exposes four funcs
    // let's say we have a database class 
    // that implements this interface
    save();
    delete();
    update();
    fetch();
}

class DBStore implements Store {
    save(){

    }

    delete() {
        
    }
    update() {
        
    }
    fetch() {
        
    }
}