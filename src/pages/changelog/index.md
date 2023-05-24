# InDesign UXP Features Changelog

## InDesign 18.4
### MOUNTING APIs
<InlineAlert variant="warning" slots="text1" />

This is now a required step. In order to access InDesign DOM APIs in UXP scripts, you must follow the steps below.

You can now access the APIs of previous versions in UXP scripts. 
```js
// let myInDesign = require("indesign-VERSION_NUMBER");
let myInDesign = require("indesign-16.1"); //Fetches the DOM of InDesign 16.1.
```
The following script fragment fetches the APIs present in the latest version.
```js
let myInDesign = require("indesign"); //No need to specify the version. Picks up the latest DOM available.
```

*Learn more about [mounting APIs](https://developer.adobe.com/indesign/uxp/recipes/) from different InDesign versions.*

### EVENTS HANDLING
UXP scripts now have the functionality to handle standard events that InDesign emits. You can use the `eventListener` object to catch such events. 

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
let myEventListener = app.addEventListener("afterNew", myDisplayEventType);

function myDisplayEventType(myEvent){
    console.log(This event is the ${myEvent.eventType event.);
}
```
The above script executes the `myDisplayEventType()` function as soon as `myEventListener` catches an `afterNew` event emitted from InDesign. 

*Learn more about [events handling](https://developer.adobe.com/indesign/uxp/recipes/).*

### ARGUMENTS SUPPORT 
Arguments can now be passed to a UXP script, and can be used within the script. 

```js
const script = require("uxp").script;
let argsArray = script.args //contains all the arguments passed to the script
```
*Learn more about [arguments support](https://developer.adobe.com/indesign/uxp/recipes/).* 

### SETTING SCRIPT RESULT
UXP scripts now have a "result" associated with them. The result of a script can be used for debugging puposes as well as passed to another script for utilization. 

```js
const script = require("uxp").script;
script.setResult("Hello World!"); //sets the script result as the string "Hello World!"
```
*Learn more about [setting script result](https://developer.adobe.com/indesign/uxp/recipes/).*

### MENUS SCRIPTING
UXP scripts now have APIs which can be used to add new menu items, remove existing menu items etc. 

*Learn more about [menu scripting](https://developer.adobe.com/indesign/uxp/recipes/).*
