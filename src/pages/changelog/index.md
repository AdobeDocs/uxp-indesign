# Changelog

## InDesign v18.5

UXP Plugins are now available! Get started [here](../plugins).

### UXP v7.1

#### New
HTMLElement now supports
- [setPointerCapture](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#setpointercapturepointerid)
- [releasePointerCapture](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#releasepointercapturepointerid)
- [hasPointerCapture](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#haspointercapturepointerid)
- [dir](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLHtmlElement#dir--string)

#### Updated
- Documentation for `shell` moved to [new location](/reference/uxp-api/reference-js/Modules/uxp/shell/)

#### Fixed
- `SVGElement`: The color of the `fill` attribute using a CSS variable will resolve as per the variable value. For now, please test this fix by enabling the feature flag in your plugin manifest `"featureFlags" : { "enableFillAsCustomAttribute" : true }`. This flag will be turned on by default in the next UXP release. 
```
// CSS variable
html {
  --iconColor: yellow;
}

<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="var(--iconColor, red)" />
</svg>
// shows a yellow circle
```  

### UXP v7.0

#### New
- Support for Web Components in UXP Plugins. Various HTML elements and methods have been added to support this feature.
    - Classes
        - [HTMLSlotElement](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLSlotElement/)
        - [HTMLTemplateElement](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLTemplateElement/)
    - Methods
        - [Element.assignedSlot](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#assignedslot--htmlslotelement)
        - [Element.slot](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#slot--string)
        - [Element.attachShadow](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#attachshadowinit)
        - [Element.shadowRoot](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#shadowroot--shadowroot)
        - [CustomElementRegistry.upgrade](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry#upgraderoot)
        - [CustomElementRegistry.whenDefined](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry#whendefinedname)
- [Spectrum Web Components (Beta)](/reference/uxp-api/reference-spectrum/swc/) Support for Adobe SWC.
- Several augmentations to the JS API set
    - Properties
        - [HTMLElement.lang](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLElement#lang--string)
    - Classes added to the global scope
        - [TreeWalker](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/TreeWalker/)
        - [NodeFilter](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/NodeFilter/)
    - Methods
        - [Element.hasAttributes](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#hasattributes)
        - [Element.getAttributeNames](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#getattributenames)
        - [Event.composed](/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/Event#composed--boolean)
        - [Event.composedPath](/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/Event#composedpath)
        - [DocumentFragment.append](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment#appendargs)
        - [DocumentFragment.querySelector](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment#queryselectorselector)
        - [DocumentFragment.querySelectorAll](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment#queryselectorallselector)
- New focus events to support React 16
    - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
    - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- HTML [2D Canvas Support](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLCanvasElement/) for basic shapes and styling.
- Alerts
    - [alert()](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/alert/)
    - [prompt()](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/prompt/)
    - [confirm()](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/confirm/)
- Support for [pipeThrough](/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream#pipeThroughtransform-options) and [tee](/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream#tee) in [ReadableStream](/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream). Refer to [Streams](/reference/uxp-api/reference-js/Global%20Members/Streams/) for more details
- [ImageBlob](/reference/uxp-api/reference-js/Global%20Members/ImageBlob/) to render an uncompressed image buffer in UXP

#### Changed
- [HTMLVideoElement](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement/): 'metadata' is the default value for `preload` attribute
- [FS API](/reference/uxp-api/reference-js/Modules/fs/): No need for the `file://` protocol


## InDesign v18.4

### InDesign APIs

#### Added
- **[BREAKING CHANGE]** Mounting APIs <br></br>
    InDesign DOM APIs are no longer available in the global scope. You must [mount the APIs](../recipes/dom-versioning/) first before using them. Plus, you can now access different versions of DOM APIs.
- Events <br></br>
    UXP scripts now have the functionality to handle standard events that InDesign emits. You can use the [eventListener](../recipes/events/)object to catch such events. 
- Arguments in UXP Scripts <br></br>
    [Arguments](../recipes/arguments/) can now be passed to a UXP script, and can be used within the script. 
- Setting script result <br></br>
    UXP scripts now have a "result" associated with them. [Set a result](../recipes/script-result/) for a script for debugging puposes as well as passed to another script for utilization.
- Menus <br></br>
    UXP scripts now have APIs which can be used to add new menu items, remove existing menu items etc. [Read more](../recipes/menus/).
