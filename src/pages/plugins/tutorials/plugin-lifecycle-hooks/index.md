---
title: Plugin Lifecycle events
description: Use plugin life cycle events to carry out load/unload routines
keywords:
  - plugin hooks
  - lifecycle
contributors:
  - https://github.com/padmkris123
---


# Plugin Lifecycle events
You can detect whether or not your plugin panel is visible with the help of UXP APIs

<InlineAlert variant="warning" slots="text1, text2, text3"/>

**IMPORTANT**

This is only applicable to plugins with a panel. You cannot detect the execution of a command plugin via these hooks. 
Familiarize yourself with [plugin entrypoints](../../concepts/entry-points/) to know the difference between a command and a panel plugin.

Also, for plugins that have multiple panels, you cannot differentiate between them, at present. 


## Example

<CodeBlock slots="heading, code" repeat="2" languages="JavaScript, JSON" />

#### JavaScript
```js
const entrypoints = require("uxp").entrypoints;
entrypoints.setup({
  panels: {
    "mainPanel": {
      create(rootNode) {
        return new Promise(function (resolve, reject) {
          console.log('Plugin panel created');
          resolve();
        });
      },
      destroy(rootNode) {
        return new Promise(function (resolve, reject) {
          console.log('Destroy panel');
          resolve();
        });
      }
    }
  }
});
```

#### manifest
```json
{
  /**/
  "entrypoints": [{
      "type": "panel",
      "id": "mainPanel",
      "label": "My plugin",
      "minimumSize": {
          "width": 400,
          "height": 400
      },
      "maximumSize": {
          "width": 800,
          "height": 800
      },
      "preferredDockedSize": {
          "width": 400,
          "height": 400
      },
      "preferredFloatingSize": {
          "width": 600,
          "height": 600
      }
  }]
}
```

<!-- 
## Reference material
// TODO add links to API reference 
-->
