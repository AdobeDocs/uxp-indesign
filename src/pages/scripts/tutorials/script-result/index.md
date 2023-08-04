---
title: UXP Script result
description: Return a script result
keywords:
  - script result
contributors:
  - https://github.com/padmkris123
---

# Setting Script Result

Since InDesign v18.4, you can "set result" of a UXP script. 

After execution, a script can return a result, which could be used for evaluating the outcome of script execution. The result can be set using `script.setResult()` API as shown below.

## Setting the result
The following line sets the result of the UXP script being executed to the string `"Hello World!"`.

```js
// called.idjs
const script = require("uxp").script;
script.setResult("Hello World!");
```


## Reading the script result
The below code snippets demonstrate how to read the script result of another script.

```js
// caller.idjs
const myInDesign = require("indesign");
const app = myInDesign.app;
const resultOfCalledScript = app.doScript("PATH_TO_CALLED.IDJS/called.idjs", myInDesign.ScriptLanguage.UXPSCRIPT);
console.log(resultOfCalledScript);
```

Scripts can return a result by setting the appropriate value using `setResult()` API. This result is returned to the entity that invoked this script. If this script was executed from InDesign's scripts panel, then the result is ignored. 
However, for scripts executed in InDesign Server, the result value is returned to the client that requested the script execution. If the script is forked by another script using `app.doScript()` API the result value set by 'called' script is returned to the 'caller' script, as illustrated above.


The result after executing this script on InDesign Server is shown on the client side. 

```
Script result (std__string): Hello World!
```
