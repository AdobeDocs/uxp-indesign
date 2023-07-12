# Setting Script Result

Since InDesign v18.4, you can "set result" of a UXP script. After execution, a script can have its own result which then can be used for debugging purposes on InDesign Server. The result of the script can also be stored in a variable and be used by another script in both InDesign App and InDesign Server. Setting the script result can be accomplished using the script.`setResult()` API, the sections below demonstrate the various use cases. 

## Usage
The following line sets the result of the UXP script being executed to the string `"Hello World!"`.

```js
script.setResult("Hello World!");
```
---
## Debugging on InDesign Server
If we want to debug any variable, we can pass the variable name in the script.setResult() API. This will not only give the variable value but also the type. The following script demonstrates this. 

```js
let myInDesign = require("indesign");
let app = myInDesign.app;
const script = require("uxp").script;
let testVar = "Hello World!"
script.setResult(testVar);
```
The result after executing this script on InDesign Server is shown on the client side. 

```
Script result (std__string): Hello World!
```

---
## Using another variable to store result
`script.setResult()` can be also be used to fetch result of one script, which in turn can be used in another script. The following scripts demonstrate this.

```js
//caller.idjs
let myInDesign = require("indesign");
let app = myInDesign.app;
const script = require("uxp").script;
let resultOfCalledScript = app.doScript("PATH_TO_CALLED.IDJS/called.idjs", myInDesign.ScriptLanguage.UXPSCRIPT);
console.log(resultOfCalledScript);
```

```js
//called.idjs
let myInDesign = require("indesign");
let app = myInDesign.app;
const script = require("uxp").script;
script.setResult("Result of called script");
```
The result after executing `caller.idjs` on InDesign Server is shown on the client side. **Note: The same functionality is also available on the InDesign App.**

```
Script result (std__string): Result of called script
```