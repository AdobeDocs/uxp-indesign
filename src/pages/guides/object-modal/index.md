# Scripting and the InDesign object model

This page discusses the concepts and terminology of scripting languages in general and InDesign scripting in particular.

## Comments

Comments give you a way to add descriptive text to a script. The scripting system ignores comments as the script executes; this prevents comments from producing errors when you run your script. Comments are useful to document the operation of a script (for yourself or someone else). In this document, we use comments in the tutorial scripts.

To include a comment:

In JavaScript, type //to the left of the comment, or surround the comment with /* and */. For example:

```
// this is a comment
/* and so is this
               for multiline*/
```

## Values

The point size of a character of text, the location of a text frame on a page, and the color of the stroke of a rectangle are examples of values used in InDesign scripting. Values are the data your scripts use to do their work.

The type of a value defines what sort of data the value contains. For example, the value type of the contents of a word is a text string, and the value type of the leading of a paragraph is a number. Usually, the values used in scripts are numbers or text. The following table explains the value types most commonly used in InDesign scripting:

TABLE::


Boolean	Logical True or False.	True
Integer	Whole numbers (no decimal points).	14
Double (VBScript),
fixed or real (AppleScript),
number (JavaScript)	A high-precision number that can contain a decimal point.	13.9972
String	A series of text characters. Strings appear inside (straight) quotation marks.	"I am a string"
Array 	A list of values (the values can be any type).	["0p0", "0p0", "16p4","20p6"]

## Converting values from one type to another

Scripting supported by InDesign provides ways to convert variable values from one type to another. The most common conversions involve converting numbers to strings (so you can enter them in text or display them in dialog boxes) or converting strings to numbers (so you can use them to set a point size or page location). See the following examples.

```

//To convert from a number to a string:
myNumber = 2;myString = myNumber + "";
//To convert from a string to an integer:
myString = "2";
myNumber = parseInt(myString);
//If your string contains a decimal value, use "parseFloat" rather than "parseInt":
myNumber = parseFloat(myString);
//You can also convert strings to numbers using the following:
myNumber = +myString;
```

## Variables

A variable is a container for a value. They are called "variables" because the values they contain might change. A variable might hold a number, a string of text, or a reference to an InDesign object. Variables have names, and you refer to a variable by its name. To put a value into a variable, you assign the data to the variable.

In our first getting started hello-world sample script (TODO: ADD LINK!!!!), we used the variables myDocument and myTextFrame to avoid having to provide the full specification of the object (such as text frame 1 of page 1 of document 1 or app.documents.item(0).pages.item(0).textFrames.item(0)) every time we refer to the object.

In all the sample and tutorial scripts that come with InDesign, all variables start with my. This way, you can easily differentiate variables we created in a script from the scripting language terms.

## Assigning a value to a variable

Assigning values or strings to variables is fairly simple

```
var myNumber = 10;
var myString = "Hello, World!";
var myTextFrame = myDocument.pages.item(0).textFrames.add();
```

## Array variables

UXPScript supports arrays,  a variable type that is a list of values. 

```
myArray = [1, 2, 3, 4];
//To refer to an item in an array, refer to the item by its index in the array. The first item in an array in UXPScript is item 0.
var myFirstArrayItem = myArray[0];
//Arrays can include other arrays.
var myArray = [[0,0], [72,72]];
```

## Finding the value type of a variable

Sometimes, your scripts must make decisions based on the value type of an object. For example, if you are working on a script that operates on a text selection, you might want that script to stop if the type of the selection is a page item. All the scripting languages allow you to determine the type of a variable.

```
//Given a variable of unknown type, "myMysteryVariable"...
myType = myMysteryVariable.constructorName;
//myType will be a string corresponding to the JavaScript type (e.g., "Rectangle")
```