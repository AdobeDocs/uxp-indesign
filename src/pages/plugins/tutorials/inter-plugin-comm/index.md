import { Link } from 'gatsby';
import { siteConfig } from '../../../../../site-config';

# Inter Plugin Communication

UXP allows communication between plugins that are installed in the application. This is particularly handy when you know a certain task is already automated by another plugin and you would like to invoke it instead of duplicating the effort. But make sure the user is not caught by surprise. Your plugin should call out such dependencies to ensure flawless functioning of your plugin.

`Plugin Manager` module provides APIs that will help establish the connection. But before we take a look at an example, be sure to be well-versed in these topics
- [Plugin entrypoints](../../concepts/entry-points/)
- [Manifest permission module](../../concepts/manifest/#permissionsdefinition)

Additionally, you will need
- certain basic knowledge of the plugin you are going to communicate with. This includes:
    - the plugin `id`
    - available `entrypoints`
    - the structure of arguments to be passed (if applicable)
- `enablePluginCommunication` permission for your plugin


## Example 

**Caller Plugin**
```json
/* manifest.json */ 
{
    "requiredPermissions": {
        "ipc": {
            "enablePluginCommunication": true
        }
    }
}
```
```js
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
//TODO: What does 'plugin.enabled' mean? When can the value be false?

**Callee Plugin**
```json
/* manifest.json */
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

Keep in mind that,
- You may not see any error if the entrypoint is not found. Therefore, we advise you to use `plugin.manifest.commands` and `plugin.manifest.panels` to select from the complete list of entrypoints.
- Invoking a plugin on a different application is not possible
- Passing methods in the argument object is also not possible


## Reference docs
- <a href={`${siteConfig.uxpApiPath}/uxp-api/reference-js/Modules/uxp/Plugin%20Manager/PluginManager/`}>PluginManager</a>


## Applicable to
- InDesign version v18.5 onwards
- UXP version v7.1 onwards
- Manifest version v5 onwards
