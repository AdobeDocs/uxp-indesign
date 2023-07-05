<!-- 
Use this doc for internal purposes. Make sure you include the following information in the recipes
-->
import { Link } from 'gatsby';
import { siteConfig } from '../../../../../site-config';

# Debugging

While writing complex logic, you might be in the cycles of testing/debugging your code. Although, UDT -> Debug lets you set breakpoints and debug your code using Chrome Debug Tool, these couple of techniques may also prove handy.


## Console logs
<!-- Provide a simple example using code snippets -->

<CodeBlock slots="heading, code" repeat="1" languages="JavaScript" />

#### JavaScript
```js
async function foo() {
    console.log("foo"); // writes "foo" to the UXP Developer Tool console.
    console.error("foo error"); // does the same thing, but the text is shown in red so errors are more easily seen.
}
```

// TODO add screenshot

## Alerts
Creates a modal dialog that pauses the execution of your script/plugin until you dismiss it. <!-- // TODO verify this statement -->

<CodeBlock slots="heading, code" repeat="1" languages="JavaScript" />

#### JavaScript

```js
function alert(msg) {
    let { app } = require("indesign");
    const dialog = app.dialogs.add();
    const col = theDialog.dialogColumns.add();
    const colText = col.staticTexts.add();
    colText.staticLabel = "" + msg;

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
- <a href={`${siteConfig.uxpApiPath}/uxp-api/reference-js/Global%20Members/HTML%20DOM/alert/`}>UXP Alerts</a> are currently not supported in InDesign.

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






