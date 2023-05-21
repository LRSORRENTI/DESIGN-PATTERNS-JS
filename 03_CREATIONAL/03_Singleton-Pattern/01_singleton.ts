/*

==================
SINGLETON PATTERN
==================

What is the singleton pattern? 

It's when we create a single object, that shares 
resources throughout your application, 

It looks like: 


         OBJECT A-------------   --------OBJECT B
                            |   |
                          SINGLETON
                        SHARED RESOURCE
                         STORED STATE
                            |  |
        OBJECT C-------------  -------------OBJECT D


*/

/* 

In essence it's a way to share resources without needing 
to recreate the object or lose any information inside

BUT IMPORTANT TO NOTE, AS THE NAME SUGGESTS, THERE'S 
ONLY ONE SINGLETON OBJECT FOR THIS SHARED RESOURCE PATTERN

This is because your application should and can only 
have one singleton object instantiated at any given time

*/

/*
Also important to note that this can lead to problems, 
since we have a single globally available object in an 
application

This can make testing difficult since it can create 
coupling issues in different components of your app,
where operations in your app rely on this singleton 
object

Since changing the singleton object itself can 
have ripple effects throughout the entire application,
so as your application grows, things can get messy

*/

/* 

Lastly there's a 'race condition' scenario, where 
changing things inside of this singleton in 
different components across your app can lead to 
improperly read data, or overwritten data, because 
they're trying to access the same exact information
simultaneously

*/

/*

These drawbacks are why many say the singleton 
pattern should be avoided, but like most tools, 
there are always use cases, even if they are niche

*/

/* 

=======================================
REFACTORING CODE INTO SINGLETON PATTERN
=======================================

Let's learn by doing, let's take some code that 
is not in a singleton pattern, and convert it 
to singleton:

*/

// export default class FancyLogger {
//     constructor(){
//         this.logs = []
//     }
//     log(message){
//         this.logs.push(message);
//         console.log(`Fancy: ${message}`)
//     }
//     printLogCount(){
//         console.log(`${this.logs.length} Logs`)
//     }
// }

// We're going to export this module and use it inside 
// 02_firstUse, 03_secondUse, and inside 03_index

// And yes, after running:

// ts-node 04_index.ts 

//  ts-node 04_index.ts 
// 0 Logs
// Fancy: First file (firstUse.ts)
// 1 Logs
// 0 Logs
// Fancy: Secomd file (secondUse.ts)
// 1 Logs

// And the reason why it's going from 
// 1 log back to 0 logs, is because we're 
// creating a new instance of FancyLogger 
// in each file with the: 

// const logger = new FancyLogger()

// So we don't have all the shared information
// from the previous instance of the logger, 
// because we create a new instatiation everytime 
// we import and use it

// Now it's time to implement the singleton version of this 
// code:

// First thing is we remove the 'export default' 
// from the class itself, because we want to use 
// a single instance of this class, and we also 
// need to make sure we create only one single instance
// in the constructor


 class FancyLogger {
    static instance: any;
     logs: any[];

    constructor(){
        // To do this we can use a static 
        // variable on our FancyLogger with
        // FancyLogger.instance
        if(FancyLogger.instance == null){
            // we also move this.logs inside
            this.logs = []
            // then we take the instance 
            // variable and set it equal to 'this'
            FancyLogger.instance = this;
        }
        // So now everytime we run the constructor
        // if there's not instance created yet, 
        // if it's the first time, we'll intialize 
        // it, and set the instance to whatever 
        // is created with '= this'
        
        // Then the second time this runs it will return
        // this will return that instance every time from 
        // the constructor
       return FancyLogger.instance;
    }
    log(message){
        this.logs.push(message);
        console.log(`Fancy: ${message}`)
    }
    printLogCount(){
        console.log(`${this.logs.length} Logs`)
    }
}

// Then below we create the FancyLogger 
// instance before exporting it

const logger = new FancyLogger()

// AND AS OF RIGHT NOW, AFTER THE ABOVE,
// WE HAVE A NEW INSTANCE OF OUR SINGLETON

// But in order to ensure the singleton 
// object remains untouchable, we use 
// Object.freeze

Object.freeze(logger)

// Now this logger cannot have any new methods 
// added or removed 

// Then we export the logger instance below:

export default logger

// We also need to update the imports in our 
// other files, and import this specific instance 
// of logger

// And yes after runing ts-node 04_index.ts: 

// 0 Logs
// Fancy: First file (firstUse.ts)
// 1 Logs
// 1 Logs
// Fancy: Secomd file (secondUse.ts)
// 2 Logs

// So our log from the first output persisted
// because we're using one single instance

// That is the singleton Design Pattern