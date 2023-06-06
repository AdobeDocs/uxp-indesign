# CSS styling
Spectrum is Adobe's design system, used across multiple applications. We recommend that you use Spectrum-based controls wherever possible for UI, for consistency. In fact, UXP offers a ready-made Spectrum styled UI library. 


However, if you are exploring to import a stylesheet or make tweaks, you should keep in mind that **UXP is not a browser**. It's architecture does not (and will not) support all the CSS properties. The ones that are supported are listed in the API reference docs. For example, UXP cannot support grid layout innately.

<InlineAlert variant="info" slots="header, text1, text2"/>

Scripts and plugins

**In scripts**, since you dont have a HTML file as such, you will have to rely on adding styling via JavaScript to your UI components.

**In plugins**, you have lot more flexibility to manage CSS styling. You can add it via a CSS classes, or use inline styling or add it via JavaScript.


## Example
Example to add a background color to divs.

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

### CSS preprocessors
UXP understands pure CSS only. Using CSS preprocessors such as SASS or SCSS is absolutely possible provided you transpile your code to a CSS stylesheet before using it. Additionally, you will require a tool like Webpack to create you plugin bundle correctly and a slightly different way to debug using UDT. // TODO link to advanced -> folder option


## Reference material
- [CSS reference](/indesign/uxp/reference/uxp-api/reference-css/)
- [Spectrum styled components](/indesign/uxp/reference/uxp-api/reference-spectrum/) 
- [Sample]() // TODO link to kitchen sink plugin
- [Webpack template]() // TODO link to webpack template


## Applicable to

- InDesign version v18.5
- UXP version v7.1
- Manifest version v5

| Scripts | Plugins |
| ------- | ------- |
| ✅      |  ✅      |

| InDesign | InDesign Cloud Server | InDesign Server |
| -------- | --------------------- | -------------- |
| ✅       | ✅ (via Scripts only)  | ✅ (via Scripts only) |


