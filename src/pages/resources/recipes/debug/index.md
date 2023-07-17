
# Debugging

While writing complex logic, you might be in the cycle of testing/debugging your code. Although UDT -> Debug lets you set breakpoints and debug your code using Chrome Debug Tool, these couple of techniques may also prove handy.


## Console logs

<CodeBlock slots="heading, code" repeat="1" languages="JavaScript" />

#### JavaScript
```js
async function foo() {
    console.log("foo"); // writes "foo" to the UXP Developer Tool console.
    console.error("foo error"); // does the same thing, but the text is shown in red so errors are more easily seen.
}
```

## Alerts
Creates a modal dialog that pauses the execution of your script/plugin until you dismiss it. <!-- // TODO verify this statement -->

<CodeBlock slots="heading, code" repeat="1" languages="JavaScript" />

#### JavaScript

```js
function alert(msg) {
    const { app } = require("indesign");
    const dialog = app.dialogs.add();
    const col = dialog.dialogColumns.add();
    const colText = col.staticTexts.add();
    colText.staticLabel = `${msg}`;

    dialog.canCancel = false;
    dialog.show();
    dialog.destroy();
    return;
}

async function foo() {
    alert("foo"); 
}
```

## Additional notes
- [UXP Alerts](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/alert/) are currently not supported in InDesign.

## Compatibility

- InDesign version v18.5
- UXP version v7.1
- Manifest version v5

| Scripts | Plugins |
| ------- | ------- |
| ✅      |  ✅     |

| InDesign | InDesign Cloud Server | InDesign Server |
| -------- | --------------------- | -------------- |
| ✅       | ✅ (via Scripts only)  | ✅ (Scripts) |






