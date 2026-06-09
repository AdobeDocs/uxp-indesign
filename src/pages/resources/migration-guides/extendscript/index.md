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

## subscript operator `[ ]`

**Applicable to:** All Versions

Collection objects returned by InDesign like documents and paragraphs will not support subscript operator `[ ]` to access element at a particular index. The alternative is to use the method by name `item()`. Objects like `app.selection` which is of type Array will support subscript operator.

ExtendScript:

```js
for (j = 0; j < app.selection[0].paragraphs.length; j++) {
  var item = app.selection[0].paragraphs[j];
}
```

UXP:

```js
for (j = 0; j < app.selection[0].paragraphs.length; j++) {
  var item = app.selection[0].paragraphs.item(j);
}
```

## `Object.constructor.name`

**Applicable to:** Prior to v18.4

`Object.constructor.name` which is a standard property in JS will return an empty string (`""`) for DOM objects. Alternatively, use the `object.constructorName` property.

ExtendScript:

```js
switch(myPageItem.constructor.name) {
  case "Rectangle":
  case "Oval":
    // ...
    break;
}
```

UXP:

```js
switch(myPageItem.constructorName) {
  case "Rectangle":
  case "Oval":
    // ...
    break;
}
```

## Comparison operators (`==` and `===`)

**Applicable to:** All Versions

Comparison operators (`==` and `===`) on InDesign DOM objects will always return false unless the objects have same reference. Instead use method `equals()`.

ExtendScript:

```js
if (myPath.pathType == PathType.closedPath) {
  // ...
}
```

UXP:

```js
if (myPath.pathType.equals(PathType.closedPath)) {
  // ...
}
```

## `instanceof`

**Applicable to:** Prior to v18.4

The `instanceof` keyword isn't supported for InDesign DOM objects. Instead use `object.constructorName` property.

ExtendScript:

```js
if (app.selection[0].paragraphs[0].appliedParagraphStyle.parent instanceof ParagraphStyleGroup) {
  // ...
}
```

UXP:

```js
if (app.selection[0].paragraphs.item(0).parent.constructorName == "ParagraphStyleGroup") {
  // ...
}
```

## Global object `document`

**Applicable to:** All Versions

Global object `document` is not supported now. Instead, use `app.activeDocument`.

ExtendScript:

```js
document.findText();
```

UXP:

```js
app.activeDocument.findText();
```

## ActiveScript `app.activeScript`

**Applicable to:** Prior to v18.4

In ExtendScript, `app.activeScript` returns the current running script as a file object on which you can access other properties.

In UXP, `app.activeScript` returns the path of the current script as a string. No other properties can be accessed on `app.activeScript`.

## Fetching InDesign Server arguments passed to a script

**Applicable to:** v18.4 Onwards

ExtendScript:

```js
var myArg = app.scriptArgs.getValue("argumentName");
```

UXP:

```js
let arguments = script.args;
```

[Learn More](../../../scripts/tutorials/arguments/index.md)
