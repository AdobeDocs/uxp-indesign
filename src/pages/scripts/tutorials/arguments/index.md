---
keywords:
  - UXP Scripts Arguments
  - InDesign Server Arguments
  - DoScript Arguments
---
# Passing Arguments

Since InDesign v18.4 arguments/parameters can be passed to UXP scripts. 

You can use the `script.args` API to access the arguments passed to the script as an array.

## Usage
Use the following to fetch the arguments passed to the script as an array:

```js
const script = require("uxp").script;
let argsArray = script.args
```

<InlineAlert variant="info" slots="text1" />
Arguments cannot be passed from the InDesign application directly. We can pass arguments to a script directly using InDesign Server only. 

## Passing Arguments to InDesign Server
You can pass arguments to InDesign Server through the `sampleclient`. 

Specify all the necessary information, such as the port number, script name, and arguments. Pass the arguments as a string where the `=` sign separates the key and the value. The `script.args` API returns an array of strings where the elements are the key/value pairs of arguments specified while executing the script. Here’s an example:

**Command to Pass Arguments to IDS Scripts**
```
../../../../mac/debug_cocoa64/sampleclient -host localhost:12345 testArgs.idjs "arg1=100" "arg2=200"
```

```js
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
Passing arguments to another UXP script is possible with the help of the `doScript` API. 

You can pass a variable of type array as the third parameter of the doScript API call. Unlike on InDesign Server, `script.args` fetches the values of the arguments passed to the external script. Here’s an example:

```js
//caller.idjs
let { app } = require("indesign");
const argsArray = [100,200];
app.doScript("PATH_TO_CALLED/called.idjs", myInDesign.ScriptLanguage.UXPSCRIPT, argsArray);
```

```js
//called.idjs
const script = require("uxp").script;
consoel.log(script.args);
```

```
[console] 100,200
```