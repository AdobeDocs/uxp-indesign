
# HTML events and event listeners
On the web, you can use different techniques to capture an HTML event and add `eventlisteners`` to an element. UXP too, supports these ways. 

It is simply your preference; the method you feel most comfortable with. However, there might be a need for you to configure the right permission for inline event handlers, such as `<button onclick="btnClick()">Click Me</button>` 


<InlineAlert variant="info" slots="header, text1, text2"/>

Scripts and plugins

**In plugins**, you will need to enable `allowCodeGenerationFromStrings` if you would like to use the inline event handlers shown above. <br></br>
IMPORTANT: Be sure you know about the [manifest permissions](../../../plugins/concepts/manifest/#permissionsdefinition) module before you proceed.

**In scripts**, these permissions are fixed to '' and you cannot alter them. //(TODO Add link to details)



## Example

<CodeBlock slots="heading, code" repeat="2" languages="HTML, JavaScript" />

#### HTML
```html
<button id="firstButton">Click me</button>
<button id="secondButton">Click me</button>
```

#### JavaScript
```js
const firstButton = document.getElementById("firstButton");
firstButton.addEventListener("click", foo);

const secondButton = document.getElementById("secondButton");
secondButton.onclick = foo;

function foo(event) {
    console.log(`Button clicked ${event.target.id}`);
}
```

## Example using inline event handlers

<CodeBlock slots="heading, code" repeat="3" languages="HTML, JavaScript, JSON" />

#### HTML
```html
<button id="thirdButton" onclick='foo(event)'>Click me</button>
```

#### JavaScript
```js
function foo(event) {
    console.log(`Button clicked ${event.target.id}`);
}
```

#### manifest
```json
{
    "requiredPermissions": {
        "allowCodeGenerationFromStrings" : true
    }
}
```


## Additional notes
// TODO Q: Any difference in the way the events and events listeners work with SWC and Spectrum widgets?

## Reference material
- [HTML Events](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/)

## Applicable to

- InDesign version v18.5
- UXP version v7.1
- Manifest version v5

| Scripts | Plugins |
| ------- | ------- |
| ✅ (only via modal dialog) |  ✅      |

| InDesign | InDesign Cloud Server | InDesign Server |
| -------- | --------------------- | -------------- |
| ✅       | ✅ (via Scripts only)  | ✅ (via Scripts only)|
