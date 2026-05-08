
link to some material
soemthing that falls out of 

Example - phone notification


```
async function showDialog() {
     
    return new Promise((resolve, reject) => {
        try{
            let dialog = createDialog();
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
function createDialog() {
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

    const closeBtn = document.createElement("sp-button");
    closeBtn.id = "close";
    closeBtn.style.height = "30px";
    closeBtn.textContent = "Close";
    closeBtn.style.marginTop = "10px";
    div.appendChild(closeBtn);
      
  
    dialog.appendChild(div);
    return dialog;
}
```


https://javascript.info/promise-basics