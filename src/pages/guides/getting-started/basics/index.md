# Getting started basics

In this guide, we will cover the basics of InDesign scripting, and create a simple InDesign script using UXP that creates a new document, adds a text frame, and enters text in the text frame. 

## UXP Scripting in InDesign

UXPScript should be written in JavaScript, and the file should be saved as `<filename>.idjs`. Saving the script as .idjs enables the UXP engine in InDesign and executes the script as UXPScript.( .jsx will execute as normal ExtendScript)

## Installing scripts

Installing an InDesign script is easy: add the script file to the scripts folder so that it shows up in the Scripts panel.  inside the Scripts folder in your InDesign application folder (/Applications/Adobe\ InDesign\ 2023\ \(Prerelease-Debug\)/Scripts). (Create the Scripts folder if it does not already exist.) Note: this may require admin access.

Alternately, put the script inside the Scripts Panel folder in your preferences folder. Your preferences folder is at:

Windows: `C:\Users\<username>\AppData\Roaming\Adobe\InDesign\Version 18.0\<locale>\Scripts`
Mac: `/Users/<username>/Library/Preferences/Adobe InDesign/Version 18.0/<locale>/Scripts`
Above, `<username>` is your user name and `<locale>` references your location and language, for example, en_US.

Once the script is in the folder, it appears on the Scripts panel inside InDesign. To display the panel, choose Window > Utilities > Scripts.

You  can also put aliases/shortcuts to scripts (or folders containing scripts) in the Scripts Panel folder, and they will appear in the Scripts panel.

To run a specific script when InDesign starts, put it inside a folder named "Startup Scripts" inside the Scripts folder (create this folder if it does not already exist).

## Running a script
To run a script, display the Scripts panel (choose Window > Utilities > Scripts), then double-click the script name in the Scripts panel. Many scripts display user-interface items (like dialog boxes or panels) and display alerts if necessary.

We can also right-click on the script name and then click on run in drop-down menu.

![Running a script](running_a_script.png)

## Using the scripts panel

The InDesign Scripts panel is the easiest and best way to run most InDesign scripts. If the panel is not already visible, you can display it by choosing Window > Utilities > Scripts.

To edit a script shown in the Scripts panel, select the script and choose Edit Script from the Scripts panel menu. Alternatively, you can hold down the Option (Mac OS) or Alt (Windows) key and double-click the script's name. This opens the script in the editor you defined for the script file type.

To open the folder containing a script shown in the Scripts panel, select the script and choose Reveal in Finder (Mac OS) or Reveal in Explorer (Windows). Alternatively, you can hold down the Command (Mac OS) or Ctrl-Shift (Windows) keys and double-click the script's name. The script folder opens in the Finder (Mac OS) or Explorer (Windows).

## Adding a keyboard shortcut

To add a keyboard shortcut for a script, choose Edit > Keyboard Shortcuts, select an editable shortcut set from the Set menu, then choose Product Area > Scripts. A list of the scripts in your Scripts panel appears. Select a script and assign a keyboard shortcut as you would for any other InDesign feature.

## UXP APIs
Since UXP is a cross-application extensibility playform, its API documentation can be found at https://developer.adobe.com/photoshop/uxp/2022/uxp/reference-js/ and git link https://github.com/AdobeDocs/uxp/tree/main/src/pages/uxp/reference-js.

## InDesign APIs
Most InDesign DOM APIs are supported for UXPScripting. 

Details of the same can be found in InDesign Scripting SDK guide https://developer.adobe.com/console/servicesandapis, Scripting documentation can be found in "Scripting"  section after clicking the View Download button on the InDesign tile.

### Coming Up Next
Events, Menus, Function Pointers, Versioning will be supported in future releases.