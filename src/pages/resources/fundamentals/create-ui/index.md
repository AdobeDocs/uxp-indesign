---
keywords:
  - Spectrum UXP Reference
  - Spectrum Web Components
  - SWC
  - Web Components
  - Spectrum differences
  - Spectrum in UXP
  - UI
  - User interface
title: Create UI in UXP Spectrum UXP Reference
description: Describes the options available within UXP to create UI
contributors:
  - https://github.com/padmkris123
---

# User Interface (UI)

In UXP, you can write the UI in three ways - using standard HTML Elements, built-in Spectrum UXP widgets, and Spectrum Web Components (recently added).

<InlineAlert variant="info" slots="header, text1, text2"/>

Scripts and plugins

**In scripts**, you can only create modal dialogs.

**In plugins**, you can create persistent plugin panels, visible at all times. Or command plugins, that can create modal dialogs only.


But before we proceed, it's important to understand some terminology
- **Spectrum** - An open-source design language and guidelines provided by Adobe.
- **Web components** - HTML5 Web technology lets you define custom HTML tags.
- **Adobe Spectrum Web Components** (popularly known as SWC) - An open-source library that has Spectrum-styled web components.


With that in mind, let's get into the details:
- **HTML elements** <br></br>
   These are pure HTML elements following web standards. For example, `<img>`, `<dialog>` etc. You have the flexibility to style them with your custom stylesheet. 
  
- **Spectrum UXP widgets** <br></br>
   These are built-in Spectrum-styled UXP components. These widgets mimic the Adobe SWC library APIs and expose a subset of the functionality of the corresponding SWC. 

   You can use them as you would any other HTML tag. For example,
   
   ```html
   <sp-button variant="primary">I'm a Spectrum button</sp-button>
   ```

- **UXP Spectrum web components (Beta)** <br></br>
    These are the Adobe Spectrum Web Components, recently added and supported by UXP v7.0 onwards. It's built using Web Components technology.

    To use them, you require to install the components individually and then `import` them before using the component tag. For example,
  
    ```
    npm i @spectrum-web-components/button@0.19.8
    ```
    
    ```js
    import '@spectrum-web-components/button/sp-button.js';
    ```

    ```html
    <sp-button variant="primary">I'm a SWC button</sp-button>
    ```

    Note that although the tag appears to be identical to Spectrum UXP widgets, the way they are implemented is fundamentally different. Read on to learn more about the differences.


### Differences

Now that you know the various options, you must understand their differences and limitations


- **HTML elements** <br></br>
   Keep in mind that UXP is not a browser. It's a platform that provides the ease of using web technologies to build plugins/scripts for desktop applications. Hence, it does not support all the HTML/CSS capabilities you can use in a browser. In fact, the tags that are _not_ supported are treated like simple `<div>`.

   Do take a look at the list of HTML [elements](/indesign/uxp/reference/uxp-api/reference-html/General/Unsupported%20Elements/), and [attributes](/indesign/uxp/reference/uxp-api/reference-html/General/Unsupported%20Attributes/) that are _not_ supported.
  
- **Spectrum UXP widgets**<br></br>
   Remember that these are built-in within UXP. Therefore, they may appear to be a black-box solution that does not allow you to peek into the details while debugging or altering their behavior easily.


- **UXP Spectrum web components (Beta)** <br></br>
   Requires basic knowledge of [Web Components](https://javascript.info/web-components). And since this is in the beta phase and we are working on supporting more components in the future, you may not find all the components you need. 
  
   Moreover, these components follow the principles of SWC and web components, which means
   1. You need to `import` individual comps before using them
   2. You can debug SWC like a regular Web Component. 



That said, you can mix and match these three offerings to suit your use case. For example, the following will work seamlessly


```HTML
<form> <!-- plain HTML element -->
   <sp-banner> <!-- Spectrum Web Component -->
     <div slot="header">Header text</div>
     <div slot="content">Content of the banner</div>
  </sp-banner>
  <sp-button variant="primary">I'm a button</sp-button> <!-- Spectrum widget -->
</form>
```

### What's best for you?


The choice you make depends on your use case and the stage of development you are in.


If you are looking for a ready-made Adobe Spectrum-styled UI or are just getting started with programming your UI, we recommend you start your journey with SWC. Fall back to Spectrum UXP widgets for the comps that are not available yet. And use plain HTML elements when they are not available in either.


However, if you prefer vanilla HTML and don't mind undertaking the efforts of styling, use the HTML elements along with your custom stylesheet. Make sure you read the [CSS Styling](../../recipes/css-styling/) recipe.

<!-- 
// TODO add once the starter templates are ready

## Additional notes

While writing a simple JS/HTML/CSS plugin is possible, those who are building plugins that have internal state management, or more complicated UI may benefit from commonly used UI libraries. The below examples are not necessarily only ones you can use but can serve as good starters if you already are familiar with a library.

We do not suggest that you use any particular library for your plugins but suggest that you read about them and decide for yourself what will work best for you.

### React

[React.js](https://reactjs.org/) is one of the most used UI libraries. It's declarative and component-based, helping you break your UI into reusable components. 

See [react-starter](https://github.com/AdobeDocs/uxp-indesign-samples/plugins/react-starter) for the sample project.

We soon will be adding more samples for other popular frameworks such as Vue, and Svelte.


### Vue

[Vue.js](https://vuejs.org/) is another declarative UI library that's easy to learn. 

See [ui-vue-starter](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-vue-starter) for the sample project.  // TODO update link

### Svelte

[Svelte](https://svelte.dev/) is different from the other two libraries, in the sense that it compiles your code to a simple JS application, shrinking its size.

See [ui-svelte-starter](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-svelte-starter) for the sample project.  // TODO update link
-->


## Reference material
- [Spectrum Web Components](/indesign/uxp/reference/uxp-api/reference-spectrum/swc/)
- [Spectrum UXP widgets](/indesign/uxp/reference/uxp-api/reference-spectrum/Spectrum%20UXP%20Widgets/)
- Supported HTML [tags](/indesign/uxp/reference/uxp-api/reference-html/) and [elements](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/)
<!-- [Kitchen sink sample]() - //TODO link to Id starter/ kitchen sink sample -->

