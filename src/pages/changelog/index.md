# Changelog

## InDesign v18.4

### InDesign APIs

#### Added
- [BREAKING CHANGE] Mounting APIs <br></br>
    InDesign DOM APIs are no longer available in the global scope. You must [mount the APIs](../recipes/dom-versioning/) first before using them. Plus, you can now access different versions of DOM APIs.
- Events <br></br>
    UXP scripts now have the functionality to handle standard events that InDesign emits. You can use the [eventListener](../recipes/events/)object to catch such events. 
- Arguments in UXP Scripts <br></br>
    [Arguments](../recipes/arguments/) can now be passed to a UXP script, and can be used within the script. 
- Setting script result <br></br>
    UXP scripts now have a "result" associated with them. [Set a result](../recipes/script-result/) for a script for debugging puposes as well as passed to another script for utilization.
- Menus <br></br>
    UXP scripts now have APIs which can be used to add new menu items, remove existing menu items etc. [Read more](../recipes/menus/).
