---
keywords:
  - UXP Arguments
  - InDesign Server Arguments
  - DoScript Arguments
---
# Passing Arguments
This section contains information on how arguments can be passed to UXP scripts.

## Overview
Arguments/parameters can now be passed to UXP scripts. The arguments passed to the scripts can be used in the same way as any other argument. The `script.args` API can be used to access the arguments passed to the script as an array, the following sections demonstrate the various use cases.

## Usage
Use the following to fetch the arguments passed to the script as an array:

```js
let argsArray = script.args
```

## Passing Arguments to InDesign Server
You can pass arguments to InDesign Server through the sampleclient. Specify all the necessary information, such as the port number, script name, and arguments. Pass the arguments as a string where the = sign separates the key and the value. The `script.args` API returns an array of strings where the elements are the key/value pairs of arguments specified while executing the script. Here’s an example:

**Command to Pass Arguments to IDS Scripts**
```
../../../../mac/debug_cocoa64/sampleclient -host localhost:12345 testArgs.idjs "arg1=100" "arg2=200"
```

```js
//testArgs.idjs
let myInDesign = require("indesign");
let app = myInDesign.app;
const script = require("uxp").script;
let ar = script.args;
script.setResult(ar);
```

The result after executing this script on InDesign Server is shown on the client side. 

```
Script result (LIST, 2):
    (std__string): arg1=100
    (std__string): arg2=200
```

## Passing Arguments to InDesign Server/ InDesign App Via doScript()
Passing arguments to an external script called the doScript API is also supported. You can pass a variable of type array as the third parameter of the doScript API call. Unlike on IDS, `script.args` fetches the values of the arguments passed to the external script. Here’s an example:

```js
//caller.idjs
let myInDesign = require("indesign");
let app = myInDesign.app;
const script = require("uxp").script;
let argsArray = [100,200];
let resultOfCalledScript = app.doScript("PATH_TO_CALLED.IDJS/called.idjs", myInDesign.ScriptLanguage.UXPSCRIPT, argsArray);
console.log(resultOfCalledScript);
```

```js
//called.idjs
let myInDesign = require("indesign");
let app = myInDesign.app;
const script = require("uxp").script;
let argsArray = script.args;
script.setResult(argsArray);
```
The result after executing `caller.idjs` is shown in the logs. 

```
[console] 100,200
```