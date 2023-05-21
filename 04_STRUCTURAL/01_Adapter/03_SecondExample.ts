/*

==============================
SECOND ADAPTER PATTERN EXAMPLE
==============================

The main idea behind this pattern is 
that when we have two kinds of interfaces 
that are not compatible with each other, 
we must make them compatible, or adaptable
with each other 

To accomplish this, we create the adapter 
or wrapper ourselves, so our incompatible 
interfaces become compatible

=================================
Why do we need to do this anyway?
=================================

If the interfaces aren't compatible, 
we could just change the interfaces 
ourselves

But the problem with this is that when we need 
to integrate legacy code with new code, and 
these new programs are incompatible with 
the legacy code

That's where adapter patterns shine, we have 
new code, that needs to be compatible to interface 
with old code, we utilize this pattern to 
accomplish this goal 

Let's look at a diagram:

*/

/*

---------------                       -------------
 Client Class                          Legacy Class
---------------                       -------------
+ doOperation()                       + doYOperation()
       |                                     |
      |            -----------------         |
     | ----------- Interface Adapter  -------|
                   -----------------
                    + doXOperation()


Essentially what the above diagram is doing is 
taking the output from the legacy class, converts
it so that the client class can understand it

The important caveat here: WE'RE NOT CHANGING THE 
LEGACY CLASS, we're creating a middle-man interface 
to make the client class understand it 

In the Java language, this: 

Arrays.asList(array)

The Adapter Pattern is a design p
attern that allows objects with 
incompatible interfaces to work 
together by providing a common interface. 
In the case of Arrays.asList(array), 
the Arrays class provides a static
 method asList() that takes an array 
 and returns a List. This allows you 
 to treat an array as a List, 
 even though they have different interfaces.

The asList() method acts as an adapter 
between the array and the List interface, 
allowing you to perform List operations
 on the array such as adding, removing,
  or accessing elements. Without this 
  adapter, you would have to manually 
  convert the array into a List by 
  creating a new List object and 
  copying the elements.

Here's a small example to demonstrate 
the usage of Arrays.asList():

java

String[] array = {"Hello", "World"};
List<String> list = Arrays.asList(array);

System.out.println(list); // Output: [Hello, World]

In this example, the Arrays.asList() method 
acts as an adapter, converting the array 
into a List. Now you can use the list object
 as a List and perform List operations on it.

It's important to note that the resulting
 List from Arrays.asList() is a fixed-size
  list backed by the original array. 
  Modifying the List will modify the 
  underlying array, and certain operations
   like adding or removing elements are 
   not supported. If you need a mutable List, 
   you can create a new ArrayList and pass 
   the array to its constructor:

java

String[] array = {"Hello", "World"};
List<String> list = new ArrayList<>(Arrays.asList(array));

This creates a new ArrayList object with
 the elements copied from the array,
  providing a mutable List that you 
  can modify freely.

                    */

/*
Real world example would be health insurance, there 
are different insurance providers, and every 
one of them have forms for medical claims, however
every one of those forms for each of the companies 
will not be identical

But the insurance office in a given hospital will 
act as the adapter pattern, there are many 
insurance providers, and the insurance office will 
adapt the paperwork for each respecitve insurance 
carrier, the content of the claims will be similar, 
but it will need to be adapted for each insurance 
carrier 

*/

