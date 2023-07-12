<!-- 
Use this doc for internal purposes. Make sure you include the following information in the recipes
-->
import { Link } from 'gatsby';
import { siteConfig } from '../../../../site-config';

# Topic Heading
<!-- Introduce the topic with concepts. -->


<!-- Difference in behavior between scripts and plugins and prerequisites -->
<InlineAlert variant="info" slots="header, text1, text2"/>

Scripts and plugins

**In plugins**, lorem ipsum.

**In scripts**, lorem ipsum.



## Example
<!-- Provide a simple example using code snippets -->

<CodeBlock slots="heading, code" repeat="3" languages="HTML, JavaScript, JSON" />

#### HTML
```html
```

#### JavaScript
```js
async function foo() {
    // do something
}
```

#### manifest
```json
```


Screenshot illustrating the output (if applicable)

## Additional notes


## Reference material
<!-- Links to API docs used in the code above -->
- <a href={`${siteConfig.uxpApiPath}`}>API</a>

## Prerequisites & Compatibility 
<!-- Summarize the availibility -->
- InDesign version v18.5
- UXP version v7.1
- Manifest version v5
