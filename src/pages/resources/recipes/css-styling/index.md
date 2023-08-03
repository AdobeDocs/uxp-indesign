---
title: CSS styling
description: Techniques to style UI in UXP
keywords:
  - CSS in UXP
contributors:
  - https://github.com/padmkris123
---

# CSS styling
Spectrum is Adobe's design system, used across multiple applications. We recommend that you use Spectrum-based controls wherever possible for UI, for consistency. In fact, UXP offers a ready-made Spectrum-styled UI library. 


While you are exploring importing a stylesheet or making tweaks, you should keep in mind that **UXP is not a browser**. Its architecture does not (and will not) support all the CSS properties. For example, UXP cannot support grid layout innately. The ones that are supported are listed in the [API reference docs](./#reference-material). 

<InlineAlert variant="info" slots="header, text1, text2"/>

Scripts and plugins

**In scripts**, since you don't have an HTML file as such, you will have to rely on adding styling via JavaScript to your UI components.

**In plugins**, you have a lot more flexibility to manage CSS styling. You can add it via CSS classes or use inline styling or add it via JavaScript.

## System requirements
Please make sure your local environment uses the following application versions before proceeding.
- InDesign v18.5 or higher
- UDT v1.9.0 or higher
- Manifest version v5 or higher

## Example
Example to add a background color to divs in three different ways:
- CSS class
- Inline style
- Via JavaScript

<CodeBlock slots="heading, code" repeat="3" languages="HTML, JavaScript, CSS" />

#### HTML
```html
<div class="green">
  <h1>Styling from CSS class</h1>
</div>

<div style="background-color: yellow;">
  <h1>Inline styling</h1>
</div>

<div id="exampleDiv">
  <h1>Styling from JS</h1>
</div>
```

#### JavaScript
```js
const exampleDiv = document.getElementById("exampleDiv");
exampleDiv.style.backgroundColor = 'orange';
```

#### CSS
```css
.green {
  background-color: green;
}
```

## Additional notes
- **CSS preprocessors**: UXP understands pure CSS only. Using CSS preprocessors such as SASS or SCSS is possible, provided you transpile your code to a CSS stylesheet before using it. Additionally, you will require a tool like Webpack to create your plugin bundle correctly and a slightly different way to [debug using UDT](../../../plugins/tutorials/udt-deep-dive/working-with-react/) (similar to React framework setup).


## Reference material
- [CSS reference](/indesign/uxp/reference/uxp-api/reference-css/)
- [Spectrum-styled components](/indesign/uxp/reference/uxp-api/reference-spectrum/) 
<!-- [Sample]() // TODO link to kitchen sink plugin -->
<!-- [Webpack template]() // TODO link to webpack template -->

