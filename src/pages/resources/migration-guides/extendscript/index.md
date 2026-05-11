---
title: ExtendScript to UXP
description: Migrate ExtendScript to UXP
keywords:
  - ExtendScript
contributors:
  - https://github.com/padmkris123
---

# ExtendScript to UXP
ExtendScript uses an older version of JavaScript (ES3). In contrast, UXP uses the V8 JavaScript engine which supports ES6; this has several notable features lacking in ExtendScript. 

Not all the newer features of ES6 are used and/or supported in the UXP world, but as an ExtendScript developer, you should familiarize yourself with ECMAScript ES6 so you can understand the sample code.

This page goes over how ExtendScript can be rewritten in UXP script in simple steps.

For scripts,
1. Save the file with `.idjs` extension.
2. Update the script for unsupported methods


| Differences | ExtendScript | UXP | Applicable To |
| --- | --- | --- | --- |
| **subscript operator [ ]** \\ Collection objects returned by InDesign like documents and paragraphs will not support subscript operator [ ] to access element at a particular index. The alternative is to use the method by name item()Objects like app.selection which is of type Array will support subscript operator. | `for (j = 0; j < app.selection[0].paragraphs.length; j++) { var item = app.selection[0].paragraphs[j]; }` | `for (j = 0; j < app.selection[0].paragraphs.length; j++) { var item = app.selection[0].paragraphs.item(j); }` | All Versions |
| **Object.constructor.name** \\ `Object.constructor.name` which is a standard property in JS will return an empty string ("") for DOM objects. Alternatively, use the `object.constructorName` property. | `switch(myPageItem.constructor.name) { case "Rectangle": case "Oval": ... break; }` | `switch(myPageItem.constructorName) { case "Rectangle": case "Oval": ... break; }` | Prior to v18.4 |
| **Comparison operators(== and ===)**\\ Comparison operators(== and ===) on InDesign DOM objects will always return false unless the objects have same reference. Instead use method equals() | `if (myPath.pathType == PathType.closedPath) { ... }` | `if (myPath.pathType.equals(PathType.closedPath)) { ... }` | All Versions |
| **instanceof** \\ The `instanceof` keyword isn't supported for InDesign DOM objects. Instead using `object.constructorName` property. | `if (app.selection[0].paragraphs[0].appliedParagraphStyle.parent instanceof ParagraphStyleGroup) { ... }` | `if (app.selection[0].paragraphs.item(0).parent.constructorName == "ParagraphStyleGroup") { ... }` | Prior to v18.4 |
| **Global object 'document'**\\ Global object 'document' is not supported now. Instead, use `app.activeDocument` | `document.findText()` | `app.activeDocument.findText()` | All Versions |
| ActiveScript `app.activeScript` | `app.activeScript` returns the current running script as a file object on which you can access other properties. | `app.activeScript` returns the path of the current script as a string. No other properties can be accessed on `app.activeScript` | Prior to v18.4 |
| Fetching the InDesign Server arguments passed to a script. | `var myArg = app.scriptArgs.getValue("*argumentName*");` | `let arguments = script.args;` [Learn More](/scripts/tutorials/arguments/index.md) | v18.4 Onwards |

