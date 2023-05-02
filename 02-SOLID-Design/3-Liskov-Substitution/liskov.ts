/* 
============================
LISKOV SUBSTITUTION AKA: LSP
============================

Now let's go over the Liskov principle, 
introduced by Barbara Liskov, during a 
comference on data abstraction and 
hierarchy

let's see the implementation guidelines of LSP

Substitution is a principle of OOP, 
and it states that: 

"S" is a subtype of "T", then objects 
of type "T" may be replaced with objects 
of type "S"

Which means derived types must be completely 
subsitutable for their base types 

LSP is a particular definition of a subtyping 
relation called STRONG BEHAVIORAL SUBTYPING 

It can be seen as an extension of the open-closed 
principle

*/

/* 
==========
GUIDELINES
==========

- No new exceptions can be thrown by the subtype unless
  they are a part of the existing exception hierarchy

- Client shouldn't know which specific subtype they are 
  calling, the client should behave the same regardless
  of the subtype instance that's given
  
- New classes just extend, without ever changing the 
  functionality of the old classes


  These are some of the general guidelines for LSP



*/

// Let's create a base class using the 'abstract' 
// keyword, remember that an abstract class cannot 
// be instantiated on it's own, but is used to 
// structure children extensions of said base class

/* 
public abstract class Employee {
    public int ID {get; set;}
    public string Name {get; set;}
    public Employee()
    {}
    public Employee (int id, string name)
    {this.ID = id
      this.name = name;
    }
}

Below in this TypeScript code, 
the abstract keyword is used to define 
an abstract class Employee. 
The class has two properties, 
ID and Name, which are defined with 
types number and string, respectively.
 The class has two constructors: 
 a default constructor, which takes
  no arguments and does nothing, and a
   parameterized constructor, 
   which takes an id of type number 
   and a name of type string and assigns
    them to the corresponding properties.

Note that in TypeScript, properties 
are defined outside of the constructors, 
whereas in C#, they are defined inside
 the class using property syntax.
  Additionally, TypeScript uses 
  semicolons to terminate statements, 
  whereas C# uses commas.
*/

// LUKE! I left off at 2:54 for kudvenkat Liskov on YouTube, 
// he's using C# to show SOLID, going to need to change it to TS!


abstract class Employee {
    ID: number;
    Name: string;
  
    constructor(id: number, name: string) {
      this.ID = id;
      this.Name = name;
    }
  }