# football-data-analize-and-report-with-TypeScript
 Getting data from a .csv file and based on the data analizing and reporting diffrent data for the team/teams
 ### When should we use enums generally:
 - Follow near-identical syntax rules as normal objects
 - Creates an object with the same keys and values when converted from TS to JS
 - Primary goal is to signal to other developers that these are all closely related values
 - Use whenever we have a small fixed set of values that are all closely related and known at compile time
 
  ### Type Assertion : 
  When we try to overwrite TypeScript's default behavior.
  We can use it with any kind of type, it is not limited just to be in used with enums.

### Tuple
Is very similar to an array but it's meant to organize elements inside of it in a very specific order
Refactoring the CsvFileReader type definition to make it reuseable for any other kind of types (In case of extending the data in the future)


### Abstract Classes: 
turning the CsvFile into an Abstract Class (Abstract Classes in TS: theey are classes that we are never going to use to create an instance of an object) so not creating an instance of the CsvFile any more. The abstract method is going to be implemented by some child classes. 

### Generics:
Are like function arguments, but for types in class/function definition,
Allows us to define the typs of a property/argument/return value at a future point,
Used heavily when writing reuseable code (in this code example MatchData in CsvFile was replaced with Generics)

Refactored the structure of the code to make sure that CsvFileReader is 100% stand alone and reuseable!

## Inheritance vs Composition
### Inheritance (We use it when we have two classes that are bound together by a "Is A" relationship. MatchReader is a CsvFileReader because it has all the properties and methods that CsvFileReader has): the first approach was focusing on Inheritance (in inheritance file) and the second one focused on Composition!
<br/>
Inheritance: (We use it when we have two classes that are bound together by a "Has A" relationship, in this case MatchReader had a refrences to some outside object). we had an abstract class CsvFileReader and it had child class called MatchReader. (we had a parent class that had really some core functionality then we extended that class and created a child class out of it)
### Composition: the second approach focused on Composition! we had a class called MatchReader, and the MatchReader had a refrence to some other object. 
To read more about composition vs inheritence => Design Patterns (book), page 20
