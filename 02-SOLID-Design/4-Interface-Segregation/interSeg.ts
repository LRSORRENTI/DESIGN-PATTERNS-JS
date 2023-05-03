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

Essentially, instead of implementing one giant 
interface, segregate functionality into smaller
interfaces, sort of like an extension of SRP, one 
interface shouldn't be handling an excess of 
responsibilities 

*/

// Let's look at a real world example, 
// if we have two types of ATM's, one 
// that's withdrawal only, and one 
// that's deposit only

// But it's possible there's a single 
// type of ATM that has both 
// kinds of functionality, withdrawal and deposit

// The advantage of having separate ATM's 
// is that the people who need to deposit or 
// withdrawal only, can use the purpose built 
// ATM with that respective functionality

// Essentially we don't want classes that implement 
// interfaces to have many unused functions 

// So if we have a class, which doesn't implement 
// most of the functionality of a given interface,
// this InterSeg principle has been violated 

// interface Store {
//     // We have an interface called Store 
//     // This interface exposes four funcs
//     // let's say we have a database class 
//     // that implements this interface
//     save();
//     delete();
//     update();
//     fetch();
// }

// class DBStore implements Store {
//     save(){

//     }

//     delete() {
        
//     }
//     update() {
        
//     }
//     fetch() {
        
//     }
// }

// class CacheStore implements Store {
//     save() {
        
//     }
//     delete() {
        
//     }
//     update() {
        
//     }
//     fetch() {
        
//     }
//     // Implemented functions:
//     AddKey(){

//     }
//     RemoveKey(){

//     }
//     EditKey(){

//     }
// }


// Now let's say we add these implemented 
// functions to Store: 

interface Store {
        save();
        delete();
        update();
        fetch();
        AddKey();
        RemoveKey();
        EditKey();
        // from the perspective of Store
        // it makes sense to have these functions 

        // And now the CacheStore can also access the 
        // main four functions from Store, as well 
        // as the Add, Remove, and EditKey funcs 

        // But the main four funcs, these four also 
        // need to be written in the CacheStore class
        // which is implementing Store

        // But this makes our Store interface 'fat', and 
        // if we needed to add more functionality the 
        // Store interface would get more and more bloated

    }

    // This is a violation of the Interface 
        // Segregation principle, the better 
        // solution is to create two interfaces

        // One interface to implement the main 
        // four funcs :

        interface DBStoreService {
            Save();
            Delete();
            Update();
            Fetch();
        }
       
        interface CacheStoreService{
            Addkey();
            DeleteKey();
            EditKey();
        }

        // In essence, we want to keep functionality 
        // simple across interfaces, having gigantic 
        // interfaces is not 
class NextStore implements CacheStoreService{
    Addkey() {
        
    }
    DeleteKey() {
        
    }
    EditKey() {
        
    }
    NextStore(){
        
    }
}