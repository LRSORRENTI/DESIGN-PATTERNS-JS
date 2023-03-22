
// SINGLE RESPONSIBILITY PRINCIPLE


// Let's make a journal class which we'll 
// use to store ideas and thoughts 
class Journal {
    // in the constructor, we first 
    // want to initalize entries with 
    // this.entries = {} this is where 
    // we'll populate 
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
// and at this point we can start using the journal
}

// We need to count the number of entries
// which we'll increment with each entry
Journal.count = 0;