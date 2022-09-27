# InDesign Server Reference

This document presents scripts that show how to create simple documents using InDesign Server. The bulk of the scripting documentation for InDesign Server, however, is in the documentation for the desktop (that is, nonserver) version of InDesign.

We assume that you are developing your InDesign Server scripts using InDesign 2023, and that you have read Adobe InDesign Scripting Tutorial and Adobe InDesign Scripting Guide for the scripting language you want to use.

We also assume that you are familiar with the details of your InDesign Server installation. For the purposes of this document, we present sample scripts that work with a copy of InDesign Server on the same system as your scripting development environment.

InDesign is an essential tool for developing scripts for InDesign Server. We assume that you will develop scripts using InDesign before using them with InDesign Server, because it is much easier to test and debug scripts when you can see the objects being created. To see the result of your script in InDesign Server, you would have to save the document and open it using InDesign, or export the document and view the exported file in another program (like Acrobat ® or Adobe Reader®). If you use InDesign to develop your InDesign Server scripts, you can reduce your development time dramatically.

Though the two programs are very similar, their scripting object models differ slightly. The following sections discuss objects, properties, and methods in InDesign that are not in InDesign Server. Keep these in mind as you convert scripts from InDesign to InDesign Server.

## Active document
Many InDesign scripts refer to the front-most document in the user interface using the active document property of the application object. This property does not exist in InDesign Server. Instead, you can refer to documents by their index or name.

## Active script
Many InDesign scripts refer to the currently running script to locate other script files or resources. InDesign Server does not have this property. Instead, locate the assets the script will need in specific locations on your server or system, then refer to those locations using complete file paths.

## Active windows and spreads
InDesign scripts often refer to the active window or the active spread of the active window. These user-interface properties are not supported by InDesign server.

## Selection
As you would expect, InDesign server does not have an object corresponding to the user selection. When you convert scripts from InDesign, you must remove any reference to the selection and provide references to objects based on other qualities (like the object id, index, or label).

## Dialogs
InDesign can create modal dialog boxes using the dialog object and populate them with common user-interface controls, like check boxes, text-entry fields, and radio buttons. InDesign server does not support the dialog object or any user-interface controls.

## Copy and paste
Because InDesign Server has no user interface, it also lacks the copy and paste features of InDesign. Instead of using copy and paste, use duplicate and move. Both methods can create copies of objects, and can move objects from one document to another.         