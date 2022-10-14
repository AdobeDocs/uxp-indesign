
# Samples

Check out the full [repo of scripting samples here](https://github.com/AdobeDocs/uxp-indesign/tree/main/src/pages/uxp-scripting-samples).

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

## Dialog
The script below demonstrates how to create a dialog using an anonymous function, as well as setting up event listeners and resolving/rejecting promises.

```js
async function showDialog() {
     
    return new Promise((resolve, reject) => {
        try{
            let dialog = getDialog();
            document.body.appendChild(dialog).showModal();
            
            const closeBtn = document.getElementById("close");
            closeBtn.addEventListener("click", () => {
                console.log("clicked on the close btton");
                dialog.close();
            })
 
            // add listeners on the dialog close and cancel and resolve/reject the promise returned in one of them.
            // or you can have a button done in the dialog and can resolve the promise on the click of the button,
            // but make sure that a promise is returned and that is resolved/rejected later else dialog wont show up.
            dialog.addEventListener("cancel", () => {
                console.log("dialog cancel called");
                reject("dialog cancel called");
            });
 
            dialog.addEventListener("close", () => {
                console.log("dialog Close called");
                resolve("dialog Close called");
            });
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
}

// wait for the dialog to be closed
await showDialog();

// Dialog creation and setting CSS styles for elements using anonymous method
function getDialog() {
    const dialog = document.createElement("dialog");
    // dialog.style.height = "200px";
    // dialog.style.width = "600px";
  
    dialog.style.color = "white";
  
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.height = "300px";
    div.style.width = "400px";
    div.style.alignItems = "center";
  
    const header = document.createElement("h2");
    header.id = "head";
    header.style.color = "white";
    header.textContent = "Dialog Created by a script.";
    div.appendChild(header);


    const image = document.createElement("img");
    image.src = "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png";
    image.style.marginTop = "30px";
    div.appendChild(image);

    const cloaseButton = document.createElement("sp-button");
    cloaseButton.id = "close";
    cloaseButton.style.height = "30px";
    cloaseButton.textContent = "Close";
    cloaseButton.style.marginTop = "10px";
    div.appendChild(cloaseButton);
      
  
    dialog.appendChild(div);
    return dialog;
}
