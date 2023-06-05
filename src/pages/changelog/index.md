# InDesign UXP Features Changelog

## InDesign 18.4
### MOUNTING APIs
<InlineAlert variant="warning" slots="text1" />

This is now a required step. In order to access InDesign DOM APIs in UXP scripts, you must declare the DOM version you want to use.

You can now access the APIs of previous versions in UXP scripts. 

*Learn more about [mounting APIs](../recipes/dom-versioning/) from different InDesign versions.*

### EVENTS HANDLING
UXP scripts now have the functionality to handle standard events that InDesign emits. You can use the `eventListener` object to catch such events. 

*Learn more about [events handling](../recipes/events/).*

### ARGUMENTS SUPPORT 
Arguments can now be passed to a UXP script, and can be used within the script. 

*Learn more about [arguments support](../recipes/arguments/).* 

### SETTING SCRIPT RESULT
UXP scripts now have a "result" associated with them. The result of a script can be used for debugging puposes as well as passed to another script for utilization. 

*Learn more about [setting script result](../recipes/script-result/).*

### MENUS SCRIPTING
UXP scripts now have APIs which can be used to add new menu items, remove existing menu items etc. 

*Learn more about [menu scripting](../recipes/menus/).*
