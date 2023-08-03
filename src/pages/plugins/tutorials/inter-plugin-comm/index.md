---
title: Inter Plugin Communication
description: Communicate to another plugin
keywords:
  - UXP ipc
  - inter plugin
contributors:
  - https://github.com/padmkris123
---

# Inter Plugin Communication

UXP allows communication between plugins that are installed in the same application. 

This is particularly handy when you know a certain task is already automated by another plugin and you would like to invoke it instead of duplicating the effort. But make sure the user is not caught by surprise. Your plugin should call out such dependencies to ensure flawless functioning of your plugin.

The `Plugin Manager` module provides APIs that will help establish the connection. But before we take a look at an example, be sure to be well-versed in these topics
- [Plugin entrypoints](../../concepts/entry-points/)
- [Manifest permission module](../../concepts/manifest/#permissionsdefinition)

Additionally, you will need
- A basic knowledge of the plugin you are going to communicate with. This includes:
    - the plugin `id`
    - available `entrypoints`
    - the structure of arguments to be passed (if applicable)
- `enablePluginCommunication` permission for your plugin

## System requirements
Please make sure your local environment uses the following application versions before proceeding.
- InDesign v18.5 or higher
- UDT v1.9.0 or higher
- Manifest version v5 or higher

## Example 

**Caller Plugin**

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JavaScript" />

#### manifest
```json
{
    "requiredPermissions": {
        "ipc": {
            "enablePluginCommunication": true
        }
    }
}
```

#### JavaScript
```js
const { pluginManager } = require("uxp");
function communicateWithAnotherPlugin() {
    try {
        const allPlugins = pluginManager.plugins;
        const plugin = Array.from(allPlugins).find(plugin => plugin.id === "com.adobe.example.coolPlugin");
        if (plugin && plugin.enabled) {
            console.log('All commands:', plugin.manifest.commands);
            console.log('All panels:', plugin.manifest.panels);
    
            /* Show the plugin panel; Note that panels can only be made visible -- you can't ask to hide the panel */
            plugin.showPanel("simplePanel");
    
            plugin.invokeCommand("simpleCommand");
            
            /* Send an argument to the command  */
            const name = {
                firstName: "John",
                lastName: "Doe"
            };
            plugin.invokeCommand("commandWithInput", name);
        } else {
            // prompt the user to install or enable the plugin before trying again
        }
    } catch (e) {
        console.error(e);
    }
} 
```

**Callee Plugin**

<CodeBlock slots="heading, code" repeat="2" languages="JSON, JavaScript" />

#### manifest
```json
{
    "id": "com.adobe.example.coolPlugin",
    "name": "The cool plugin",
    "main": "index.html",
    "entrypoints": [
        {
            "type": "command",
            "id": "simpleCommand",
            "label": "Do your thing"
        },
        {
            "type": "command",
            "id": "commandWithInput",
            "label": "Do you thing with inputs"
        },
        {
            "type": "panel",
            "id": "simplePanel",
            "label": {"default": "Do your thing with UI"},
            // ...
        }
    ],
}
```

#### JavaScript
```js
const { entrypoints } = require("uxp");
entrypoints.setup({
  commands: {
    simpleCommand: () => doThing(),
    commandWithInput: (args) => doThing(args)
  },
  panels: {
    simplePanel: {
      show({node} = {}) { /* ... */}
    }
  }
});

function doThing(args) {
  console.log('Executed a command to do something cool', args && args.data[0]);
}
```

## Additional notes
- You may not see any error if the entrypoint is not found. Therefore, we advise you to use `plugin.manifest.commands` and `plugin.manifest.panels` to select from the complete list of entrypoints.
- Invoking a plugin installed/running on a different application is not possible
- Passing methods in the argument object is also not possible
- There is a possibility that the user might have disabled a particular plugin via Adobe Creative Cloud Desktop App. Check the plugin's availability by using `plugin.enabled` before invoking.
    

## Reference docs
- [Plugin Manager](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Plugin%20Manager/PluginManager/)
