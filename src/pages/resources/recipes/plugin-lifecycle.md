import { Link } from 'gatsby';
import { siteConfig } from '../../../../site-config';

# Plugin events
You can detect whether or not a plugin panel is visible with the help of UXP APIs

<InlineAlert variant="info" slots="text"/>

Scripts and plugins

**In plugins**, this is only applicable to plugins with a panel. You cannot detect the execution of a command plugin via these hooks. //TODO verify fact about command plugin and hooks .Also, for plugin that have multiple panels, you cannot differentiate between them, at present. Familiarize yourself with plugin panels here // TODO link to plugin panel

**In scripts**, this is not applicable.

## Example

<CodeBlock slots="heading, code" repeat="3" languages="JavaScript" />

#### JavaScript
```js
document.addEventListener('uxpcommand', (event) => {
    const { commandId } = event;
    if (commandId === 'uxpshowpanel') {
      console.log("Showing plugin panel");
    } else if (commandId === 'uxphidepanel') {
      console.log('Hiding plugin panel');
    }
});
```

## Additional notes


## Reference material
<!-- // TODO add links to API reference 
- <a href={`${siteConfig.uxpApiPath}`}>API</a>
-->


## Compatibility

- InDesign version v18.5
- UXP version v7.1
- Manifest version v5

| Scripts | Plugins |
| ------- | ------- |
| ❌      | ✅       |

| InDesign | InDesign Cloud Server | InDesign Server |
| -------- | --------------------- | --------------- |
| ✅       | ❌                     | ❌              |



