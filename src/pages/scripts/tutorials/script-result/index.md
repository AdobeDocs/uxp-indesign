# Setting Script Result

Since InDesign v18.4, you can "set result" of a UXP script. 

After execution, a script can have its own result which then can be used for debugging purposes on InDesign Server. The result of the script can also be stored in a variable and be used by another script in both InDesign App and InDesign Server. Setting the script result can be accomplished using the `script.setResult()` API.

## Usage
The following line sets the result of the UXP script being executed to the string `"Hello World!"`.

```js
const script = require("uxp").script;
script.setResult("Hello World!");
```


## Debugging on InDesign Server
If we want to debug any variable, we can pass the variable name in the script.setResult() API. This will not only give the variable value but also the type. The following script demonstrates this. 

```js
const script = require("uxp").script;
script.setResult("Hello World!");
```
The result after executing this script on InDesign Server is shown on the client side. 

```
Script result (std__string): Hello World!
```


## Read script result
The below code snippets demonstrate how to read the script result of another script.

```js
//caller.idjs
const myInDesign = require("indesign");
const app = myInDesign.app;
const resultOfCalledScript = app.doScript("PATH_TO_CALLED.IDJS/called.idjs", myInDesign.ScriptLanguage.UXPSCRIPT);
console.log(resultOfCalledScript);
```

```js
//called.idjs
const script = require("uxp").script;
script.setResult("Result of called script");
```

The result after executing `caller.idjs` on InDesign Server is shown on the client side. **Note: The same functionality is also available on the InDesign App.**

```
Script result (std__string): Result of called script
```