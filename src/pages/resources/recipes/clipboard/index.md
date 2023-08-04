---
title: Clipboard
description: Read and write content from and to the clipboard.
keywords:
  - Read write
  - Clipboard sample
contributors:
  - https://github.com/padmkris123
---

# Clipboard
Read and write content from and to the clipboard.


## System requirements
Please make sure your local environment uses the following application versions before proceeding.
- InDesign v18.5 or higher
- UXP version v7.1 or higher
- Manifest version v5 or higher


<InlineAlert variant="info" slots="header, text1, text2"/>

Plugins and Scripts

**In plugins**, you should seek permission for `clipboard` access in the manifest. <br></br> IMPORTANT: Read about the [manifest permissions](../../../plugins/concepts/manifest/#permissionsdefinition) before you proceed.

**In scripts**, the permission for `clipboard` is fixed. You can ignore the manifest details in the following examples. Learn about these values in the [manifest fundamentals section](../../fundamentals/manifest/).


## Example

<CodeBlock slots="heading, code" repeat="2" languages="JavaScript, JSON" />

#### JavaScript
```js
async function foo() {
    const clipboard = navigator.clipboard;

    // Setting content for clipboard
    clipboard.setContent({ 'text/plain': "Test string to validate clipboard setContent" })
        .then(() => {
            console.log("Data successfully set on clipboard");
        }, (error) => {
            console.error("Error while setting data on clipboard:", error);
        });


    // Reading from clipboard and printing
    clipboard.getContent()
        .then((result) => {
            console.log(`Data from clipboard: ${result["text/plain"]}`);
        }, (error) => {
            console.error("Error while reading data from clipboard:", error);
        });
}
```

#### manifest
```json
{
    "requiredPermissions": {
        "clipboard": "readAndWrite"
    }
}
```

## Additional notes
- Set the permission to "read" if your script/plugin only intends to read from the clipboard.


## Reference material
- [Clipboard](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/) APIs


