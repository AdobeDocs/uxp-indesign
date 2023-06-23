---
keywords:
  - Menu in InDesign
  - Menu Scripting
  - Menu Items
---
# Menus

InDesign APIs can be used to add or remove menu items, perform any menu command, and attach scripts to menu items. This section shows how to work with InDesign menu scripting. Every menuItem is connected to a menuAction through the associatedMenuAction property. The properties of the menuAction define what happens when the menu item is selected. In addition to the menuActions defined by the user interface, users can create their scriptMenuActions, which associate a script with a menu selection.

Here is a sample code for adding a menu item and associate an action to it. 

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
 
await main();
async function main()
{
    return new Promise((resolve, reject) => {
       mySnippet();
  })
}
 
function mySnippet()
{
    //Adds a menu at the end of the main menu bar.
    let mySampleScriptAction = app.scriptMenuActions.add("Display Message");
 
    let myEventListener = mySampleScriptAction.eventListeners.add("onInvoke", function(){
        console.log("This menu item was added by a script.");
    });
 
    //If the submenu "Script Menu Action" does not already exist, create it.
    try
    {
        let mySampleScriptMenu = app.menus.item("Main").submenus.item("Script Menu Action");
    }
    catch (myError)
    {
        let mySampleScriptMenu = app.menus.item("Main").submenus.add("Script Menu Action");
    }
 
    mySampleScriptMenu.menuItems.add(mySampleScriptAction);
}
```