---
keywords:
  - InDesign DOM
  - DOM Versions 
  - Mount API
---

# UXP InDesign DOM
InDesign DOM provides APIs to create and modify InDesign application content through UXP scripting. You can find more details about this at [InDesign API](https://developer.adobe.com/indesign/dom/api/). 

<InlineAlert variant="info" slots="text1, text2" />

**Prior to 18.4**, the InDesign DOM was available in the global space of the UXP script by default.

**Starting 18.4**, InDesign DOM is now available as a Javascript module, and it can be retrieved on a need basis using require() API.

## Overview
The following code retrieves the InDesign DOM from 18.4 release onwards. This object allows you to open documents, modify them, run menu items, and more using the latest DOM version supported by the application.

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
```

## DOM version
DOM versioning refers to the specific version of InDesign Document Object Model supported by scripting language. It ensures that scripts remain forward compatible. By specifying the appropriate DOM version in the scripts, it is ensured that scripts will work with newer versions of InDesign, even if DOM has changed in subsequent releases. The available DOM versions as of today are mentioned below -

**3.0, 4.0, 5.0, 6.0, 7.0, 7.5, 8.0, 9.0, 10.0, 10.1, 10.2, 11.0, 11.2, 11.3, 11.4, 12.0, 12.1, 13.0, 13.1, 14.0, 15.0, 15.1, 16.0, 16.1, 16.2, 17.0, 18.0**

Below API can be used to inspect the DOM version.


```js
let myInDesign = require("indesign");
let app = myInDesign.app;
console.log(app.scriptPreferences.version);
```
It is possible to retrieve the DOM of particular version by specifying it as below. 

```js
let myInDesign = require("indesign-16.1");
let app = myInDesign.app;
```
If we retrieved a specific DOM version (lets assume 'A')  and then did require("indesign"), then it will fetch the same DOM version 'A'.

In the below example, id1 and id0 will represent the DOM version 17.0.

```js 
let myInDesign0 = require("indesign-17.0")
let app0 = myInDesign0.app;
let myInDesign1 = require("indesign");
let app1 = myInDesign1.app;
console.log(app0.scriptPreferences.version);
console.log(app1.scriptPreferences.version);
```
It is not possible to retrieve different DOM versions in a single script instance.

In the below example id1 will be evaluated as undefined.

```js
let myInDesign0 = require("indesign")
let myInDesign1 = require("indesign-17.0");
```