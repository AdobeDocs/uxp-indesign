import { Link } from 'gatsby';
import { siteConfig } from '../../../../../site-config';

# Clipboard
Read and write content from and to clipboard.

<InlineAlert variant="info" slots="header, text1, text2"/>

Scripts and plugins

**In plugins**, you should seek the permission for `clipboard` access in the manifest. IMPORTANT: Be sure you know about permissions in general before you proceed) //TODO insert link to manifest -> clipboard module.

**In scripts**, assume this value to be '' and ignore the manifest details in the following example.//TODO get value for scripts and ignore the manifest details below.


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
            console.log(`Data from clipboard:" ${result["text/plain"]}`);
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
<!-- Links to API docs used in the code above -->
- <a href={`${siteConfig.uxpApiPath}/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/`}>Clipboard</a>

## Compatibility
<!-- Summarize the availibility -->

- InDesign version v18.5
- UXP version v7.1
- Manifest version v5

| Scripts | Plugins |
| ------- | ------- |
| ✅      |  ✅      |

| InDesign | InDesign Cloud Server | InDesign Server |
| -------- | --------------------- | -------------- |
| ✅       | ✅ (via Scripts only)  | ✅ (Scripts) |

