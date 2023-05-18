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