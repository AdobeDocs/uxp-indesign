---
title: HTML events
description: Ways to configure HTML events
keywords:
  - event listeners
  - sample html events
contributors:
  - https://github.com/padmkris123
---


# HTML events and event listeners
There are different techniques to capture an HTML event and add `eventlisteners` to an element.

The technique you choose is simply your preference. Pick the method you feel most comfortable with. However, you need to configure one particular permission for inline event handlers, such as `<button onclick="btnClick()">Click Me</button>` 


<InlineAlert variant="info" slots="header, text1, text2"/>

Plugins and Scripts

**In plugins**, you will need to enable `allowCodeGenerationFromStrings` if you would like to use the inline event handlers shown above. <br></br>
IMPORTANT: Please read about the [manifest permissions](../../../plugins/concepts/manifest/#permissionsdefinition) module before you proceed.

**In scripts**, since you cannot add inline event listeners, this permission is not applicable.


## System requirements
Please make sure your local environment uses the following application versions before proceeding.
- InDesign v18.5 or higher
- UDT v1.9.0 or higher
- Manifest version v5 or higher

## Examples

**Declaring event listeners in JavaScript**

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

**Declaring inline event handlers**

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
- The above examples will also work for Spectrum Widgets and Spectrum Web Components in UXP.


## Reference material
- [HTML Events](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/)
