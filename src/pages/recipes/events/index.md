---
keywords:
  - UXP Events
  - Event Scripting
---
# Events

InDesign emits standard application and document events, such as opening a file, creating a new one, printing, and importing text and graphic files from a disk, etc. Scripts can be attached to such events using the eventListener scripting object. For example, if we want to execute a function as soon as a certain event takes place we can create an eventListener object and pass the event name and the function we want to execute as parameters. Scripts that use events are the same as other scripts except that after the event listener is associated, the script is expected to be blocked by a promise and wait for the event in the background until the event listener is removed. Then the promise can be resolved to exit the script. Once you run the Events Scripts with an event listener, they are called back automatically after the corresponding event occurs, rather than being run by the user (from the Scripts palette).

**You can see the sample scripts in order of complexity, starting with very simple scripts and building toward more complex operations.**

*Learn how to create, install, and run a script with [Adobe InDesign UXP Scripting Tutorial](https://developer.adobe.com/indesign/uxp/guides/getting-started/).*

## Understanding Event Scripting
To attach to an event, you register an eventListener with an object capable of receiving the event. When the specified event reaches the object, the eventListener executes the script function defined in its handler function (which can be either a script function or a reference to a script file on disk).
>
*Here is the [list of available events](https://developer.adobe.com/indesign/dom/api/e/Event/).*

## Working with Event Listeners

*When an eventListener responds to an event, the event may still be processed by other eventListeners that might be monitoring the event (depending on the propagation of the event). For example, the afterOpen event can be observed by eventListeners associated with both the application and the document.*

*eventListeners do not persist beyond the current InDesign session. To make an eventListener available in every InDesign session, add the script to the startup scripts folder.*

**Adding an eventListener**

When you create an eventListener, you specify the event type and the event handler (as a function or file reference). The following script fragment shows how to add an eventListener for a specific event (for the complete script, see AddEventListener).

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
let myEventListener = app.addEventListener("afterNew", myDisplayEventType);

function myDisplayEventType(myEvent){
    console.log(This event is the ${myEvent.eventType event.);
}
```

**Removing an eventListener**

To remove the eventListener created by the preceding script, run the following script:

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
let myResult = app.removeEventListener("afterNew", myDisplayEventType);
```

An event can trigger multiple eventListeners as it propagates through the scripting object model. The following sample script demonstrates an event triggering eventListeners registered to different objects:

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
let myApplicationEventListener = app.eventListeners.add("beforeImport", myEventInfo);
let myDocumentEventListener = app.documents.item(0).eventListeners.add("beforeImport", myEventInfo);
function myEventInfo(myEvent){
    let myString = "Current Target: " + myEvent.currentTarget.name;
    console.log(myString);
}
```
When you run the preceding script and place a file, InDesign displays following information in sequence, and on the console:
1. Document name
2. Application name

Use the following script to remove the event listeners added by the preceding script:

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
app.removeEventListener("beforeImport", myEventInfo);
app.documents.item(0).removeEventListener("beforeImport", myEventInfo);
```

## Writing events script to run through out the session
After the event listener is associated, the script is blocked by a promise and wait for the event in the background until the event listener is removed. If the event occurs, there is an automatic callback to execute the related function. If the event listener is removed, the promise can be resolved to complete the script execution.

Here is a sample events script to run and listen for “afterNew” event throughout the InDesign session and prints a relevant string whenever a new document is created.

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
 
await listenAfterNew();
 
async function listenAfterNew(){
  return new Promise((resolve, reject) => { mySnippet(); })
}
 
function mySnippet(){
    //![Add event listener.]
    let myEventListener = app.addEventListener("afterNew", myDisplayEventType);
    //![Add event listener.]
}
 
//![Add event listener - functions.]
function myDisplayEventType(myEvent){
    console.log("This event is the " + myEvent.eventType + " event.");
}
```
Here is a sample events script to run and listen for "afterNew" event only once and remove, which prints a relevant string if a new document is created.

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
let myResolve;
 
await myPromiseFunction();
 
async function myPromiseFunction(){
  return new Promise((resolve, reject) => { mySnippet(); myResolve = resolve;});
}
 
function mySnippet(){
    //![Add event listener.]
    let myEventListener = app.addEventListener("afterNew", myDisplayEventType);
    //![Add event listener.]
}
 
//![Add event listener - functions.]
function myDisplayEventType(myEvent){
    console.log("This event is the " + myEvent.eventType + " event.");
 
    //![remove event listener.]
    app.removeEventListener("afterNew", myDisplayEventType);
    //![remove event listener.]
 
    myResolve();
}   
```