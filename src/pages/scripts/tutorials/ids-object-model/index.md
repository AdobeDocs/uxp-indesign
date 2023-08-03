---
title: Object model in indesign server
description: 
keywords:
  - InDesign server 
contributors:
  - https://github.com/padmkris123
---

# UXP Scripts for InDesign Server
Since InDesign v18.0, InDesign Server supports UXP Scripts as well.


For running UXP Scripts in InDesign Server, you need both - InDesign and InDesign Server. It will be easier if you start by writing a script for InDesign and then make changes to the object model based on InDesign Server. Or else,  to see the result of your script in InDesign Server, you would have to save the document and open it using InDesign, or export the document and view the exported file in another program (like Acrobat ® or Adobe Reader®). If you use InDesign to develop your InDesign Server scripts, you can reduce your development time dramatically.

Go to the [introduction to InDesign Server](../../../introduction/_tbd_applications/), if you don't already have the setup for IDS. 

## Getting started
## Run the script

*Note: These examples assume that you are entering and running the script on the system on which InDesign Server is installed. For instructions on running scripts using the Test Client or SOAP commands, see Introduction to Adobe InDesign Server Development.


## Object Model

<!-- TODO give code snippets and examples -->

The InDesign Object Model is described in the [Resources](../../../resources/fundamentals/object-model/) section. However, InDesign Server's object model differs slightly.

Keep the following in mind when you write UXP scripts specifically for InDesign Server.

###  Active document
Many InDesign scripts refer to the front-most document in the user interface using the active document property of the application object. This property does not exist in InDesign Server. Instead, you can refer to documents by their index or name.

### Active script
Many InDesign scripts refer to the currently running script to locate other script files or resources. InDesign Server does not have this property. Instead, locate the assets the script will need in specific locations on your server or system, then refer to those locations using complete file paths.

### Active windows and spreads
InDesign scripts often refer to the active window or the active spread of the active window. These user-interface properties are not supported by InDesign Server.

### Selection
As you would expect, InDesign Server does not have an object corresponding to the user selection. When you convert scripts from InDesign, you must remove any reference to the selection and provide references to objects based on other qualities (like the object id, index, or label).

### Dialogs
InDesign can create modal dialog boxes using the dialog object and populate them with common user-interface controls, like checkboxes, text-entry fields, and radio buttons. InDesign Server does not support the dialog object or any user-interface controls.

### Copy and paste
Because InDesign Server has no user interface, it also lacks the copy and paste features of InDesign. Instead of using copy and paste, use duplicate and move. Both methods can create copies of objects and can move objects from one document to another.         

