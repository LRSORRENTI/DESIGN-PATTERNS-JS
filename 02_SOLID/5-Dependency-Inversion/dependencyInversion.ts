/* 

==============================
DEPENDENCY INVERSION PRINCIPLE
==============================

The principle of dependency inversion 
is different than the application of 
dependency inversion

The principle states: 

- High level modules should never depend upon 
  low level modules

- Both types of modules should depend on abstractions 

- Abstraction should never depend on implementation

- Implementation should never depend on abstraction

Essentially high level modules should never depend 
on the actual implementation, instead they should 
depend on abstractions 

And we use interfaces to help with abstractions 

Let's look at a diagram: 

-------
CLASS A
-------
+field: type
+method(type): type
 
 A depends on B

-------
CLASS B
-------
+field: type
+method(type): type

B depends on C

-------
CLASS C
-------
+field: type
+method(type): type

One problem is that if something 
changes in Class C, class B is then 
affected by this, which in turn affects
class A

If we wanted to write unit tests for these classes, 
there's a problem with this kind of architecture,
we then need to mark every dependency, the dependency
of class C from class B, and the dependency of class 
B from class A needs to be marked 

This creates a dependency control from 
Class A -> B -> C

This kind of dependency control is difficult to 
manage and change, and in turn creates code that's 
difficult to test

This is where the Dependency Inversion Principle 
comes into play, we will invert the dependencies 











*/