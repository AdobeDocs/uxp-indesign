# Code samples

Check out the [full repo of scripting samples here](https://github.com/AdobeDocs/uxp-indesign/tree/main/src/pages/uxp-scripting-samples).

## Basic 
This sample script demonstrates the execution of regular javascript using uxp scripting. 
```js
const getAppName = () => {
    let appName;
    try {
        ps = require('photoshop').app;
        appName = "PHOTOSHOP";
    } catch (error) {
        if (app) {
            appName = "InDesign";
        }
    }
    return appName;
}

try{
    const  text = "Hello world!";
    let appName = getAppName();
    
    console.log("\n" + text + "\nWelcome to UXP Scripting..." + (appName ? "\nin\n" + appName : ""));
}catch(e){
    console.log(e);
}
```

