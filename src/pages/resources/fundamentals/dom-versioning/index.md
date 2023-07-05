---
keywords:
  - InDesign DOM
  - DOM Versions 
  - Mount API
---

# InDesign DOM APIs
InDesign APIs (aka Document Object Model DOM or OMV) is used to to create and modify the application document and content. 

<InlineAlert variant="info" slots="text1, text2" />

**Prior to v18.4**, the InDesign DOM was available in the global space by default.

**Starting v18.4**, InDesign DOM is now available as a JavaScript module, and should be retrieved on a need basis using `require()`.

To access the InDesign DOM APIs from v18.4 onwards, use

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
```

## DOM version
DOM versioning refers to the specific version of InDesign Document Object Model. By specifying a version, you can ensures that your script/plugin remain forward compatible, which means it will work with newer versions of InDesign, even if DOM has changed in subsequent releases. 

The available DOM versions as of today are **3.0, 4.0, 5.0, 6.0, 7.0, 7.5, 8.0, 9.0, 10.0, 10.1, 10.2, 11.0, 11.2, 11.3, 11.4, 12.0, 12.1, 13.0, 13.1, 14.0, 15.0, 15.1, 16.0, 16.1, 16.2, 17.0, 18.0**

To know which version of DOM API your app is currently using, you can use
```js
let myInDesign = require("indesign");
let app = myInDesign.app;
console.log(app.scriptPreferences.version);
```

To switch to a particular version of DOM APIs, use
```js
let myInDesign = require("indesign-16.1");
let app = myInDesign.app;
```
The above will make sure that going forward you will be using v16.1 DOM APIs. 

**NOTE** that if you retrieved a specific DOM version (lets assume 'A') and then did `require("indesign")`, it will fetch the same DOM version 'A'. For example,
```js 
let inDesignAppV17 = require("indesign-17.0").app;
let inDesignApp = require("indesign").app;

console.log(`Versions: ${inDesignAppV17.scriptPreferences.version} and ${inDesignApp.scriptPreferences.version} will be v17.0`);
```

Also note that, you cannot work with two different DOM versions at the same time. `require("indesign");` assumes that there will be no further change in the DOM version. In the below example, the object `inDesignV17` will be 'undefined'.
```js
let inDesign = require("indesign");
let inDesignV17 = require("indesign-17.0");
```

Once you have the right DOM API version, use the [API reference](/indesign/dom/api/) to access available objects, methods etc.