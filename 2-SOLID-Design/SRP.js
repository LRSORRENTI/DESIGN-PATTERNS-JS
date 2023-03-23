
// SINGLE RESPONSIBILITY PRINCIPLE

// Import the file system using fs

const fs = require('fs');

// Let's make a journal class which we'll 
// use to store ideas and thoughts 
class Journal {
    // in the constructor, we first 
    // want to initalize entries with 
    // this.entries = {} this is where 
    // we'll populate the entries
constructor(){
    this.entries = {};
}
// The primary goal of this is to add entries 
// so we need a method to add each entry, and 
// we need to prefix each entry with an 
// incrememted journal count 
addEntry(text){
    let c = ++Journal.count;
    // then we generate the entry itself 
    let entry = `${c}: ${text}`;
    // then using the this keyword, we add 
    // it to the entries 
    this.entries[c] = entry;
    return c;
    // So at this point the entry is now assigned 
    // to the entries 
}
// Now we need a method to remove the entry at 
// a particular index, 
removeEntry(index){
    delete this.entries[index];
}
// Now we add a toString method so we can print 
// the journal, toString will take all the values 
// of the entries  object, and turn them into 
// one string that's line separated

// We use the object.values(this.entries) to select
// all the entries within the entries object, then
// join them with the .join method
toString(){
    return Object.values(this.entries).join('\n')
}
// Now we add the save() method for saving 
// entries to a file, but a good idea would be to take 
// everything below and make a separate class, because 
// at this point below everything is related 
// to persistence, so we should remove them from 
// this class and add them to a separate component, 
// that could be generalized to handle different types 
// of objects, 
// save(filename){
//     fs.writeFileSync(filename, this.toString())
//      this will take in a filename as an argument,
//      then save it 
// }
// load(filename){
//     
// }
//  And maybe we want to load from a url
// loadFromUrl(url){

// }

// and at this point we can start using the journal
}

// We need to count the number of entries
// which we'll increment with each entry
Journal.count = 0;

let j = new Journal();

j.addEntry('I had a tough day today');
j.addEntry('But I helped someone in need');

console.log(j.toString())

// So at this point we have a journal that 
// we can add entries to using 
// j.addEntry(text), but what if we want to 
// save this journal, where do we save it?

// PERSISTENCE MANAGER 



class PersistenceManager {
    preprocessJournal(journal){
        // we can also have a method that can 
        // preprocess the journal and apply it 
        // uniformly across the persistence manager, 
        // that way if the files aren't being 
        // saved correctly you don't need to 
        // look across ten different files, you 
        // just need to look at the persistence 
        // manager
        const preProcessedJournal = this.preprocess(journal);
        return preProcessedJournal;
    }
    preprocess(journal){

    }
saveToFile(journal, filename){
fs.writeFileSync(filename, journal.toString());
}
}

// So instead of just serializing we just make a 
// new persistence manager 

let p = new PersistenceManager();
let filename = 'C:/Users/lrsor/Desktop/PROGRAMMING/DMITRI-DESIGN-PATTERNS/DESIGN-PATTERNS-JS/2-SOLID-Design/test.txt'
p.saveToFile(j, filename)

// The main takeaway here is that it was better to 
// remove the persistence manager from the 
// original journal class, and make it it's own 
// responsibility, we already had the Journal class 
// doing it's own thing, better to create 
// a new class for persistence

// So we want our classes to have one main 
// responsibility, when we start adding many different 
// responsibilities to a single class, our 
// code becomes much more convoluted and harder 
// for others to understand

// Separation of concerns is another way to put 
// it, like if we have a complicated piece of code, 
// we must try to split it up to separate components
// to make everything easier to manage

// And after running node SRP.js a new txt file inside of this 
// directory is created, test.txt, which contains 
// two entries: 

// 1: I had a tough day today
// 2: But I helped someone in need

