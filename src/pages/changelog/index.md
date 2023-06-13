# Changelog

## InDesign v18.4

### InDesign APIs

#### Added
- [BREAKING CHANGE] Mounting APIs <br></br>
    InDesign DOM APIs are no longer available in the global scope. You must [mount the APIs](../recipes/dom-versioning/) first before using them. Plus, you can now access different versions of DOM APIs.
- Events <br></br>
    UXP scripts now have the functionality to handle standard events that InDesign emits. You can use the [eventListener](../recipes/events/)object to catch such events. 
- Arguments in UXP Scripts <br></br>
    [Arguments](../recipes/arguments/) can now be passed to a UXP script, and can be used within the script. 
- Setting script result <br></br>
    UXP scripts now have a "result" associated with them. [Set a result](../recipes/script-result/) for a script for debugging puposes as well as passed to another script for utilization.
- Menus <br></br>
    UXP scripts now have APIs which can be used to add new menu items, remove existing menu items etc. [Read more](../recipes/menus/).

### UXP v7.0 Integration 

#### New
- Support for Web Components in UXP Plugins. Various HTML elements and methods have been added to support this feature.
    - Classes
        - [HTMLSlotElement](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLSlotElement.md)
        - [HTMLTemplateElement](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLTemplateElement.md)
    - Methods
        - [Element.assignedSlot](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#assignedslot--htmlslotelement)
        - [Element.slot](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#slot--string)
        - [Element.attachShadow](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#attachshadowinit)
        - [Element.shadowRoot](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#shadowroot--shadowroot)
        - [CustomElementRegistry.upgrade](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry.md#upgraderoot)
        - [CustomElementRegistry.whenDefined](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry.md#whendefinedname)
- [Spectrum Web Components (Beta)](/reference/uxp-api/reference-spectrum/swc/index.md) Support for Adobe SWC.
- Several augmentations to the JS API set
    - Properties
        - [HTMLElement.lang](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLElement.md#lang--string)
    - Classes added to the global scope
        - [TreeWalker](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/TreeWalker.md)
        - [NodeFilter](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/NodeFilter.md)
    - Methods
        - [Element.hasAttributes](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#hasattributes)
        - [Element.getAttributeNames](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#getattributenames)
        - [Event.composed](/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/Event.md#composed--boolean)
        - [Event.composedPath](/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/Event.md#composedpath)
        - [DocumentFragment.append](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#appendargs)
        - [DocumentFragment.querySelector](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#queryselectorselector)
        - [DocumentFragment.querySelectorAll](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#queryselectorallselector)
- New focus events to support React 16
    - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
    - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- HTML [2D Canvas Support](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLCanvasElement.md) for basic shapes and styling.
- Alerts
    - [alert()](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/alert.md)
    - [prompt()](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/prompt.md)
    - [confirm()](/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/confirm.md)
- Support for [pipeThrough](/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream.md#pipeThroughtransform-options) and [tee](/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream.md#tee) in [ReadableStream](/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream.md). Refer to [Streams](/reference/uxp-api/reference-js/Global%20Members/Streams/index.md) for more details
- [ImageBlob](/reference/uxp-api/reference-js/Global%20Members/ImageBlob/) to render an uncompressed image buffer in UXP

#### Changed
- [HTMLVideoElement](/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md): 'metadata' is the default value for `preload` attribute
- [FS API](/reference/uxp-api/reference-js/Modules/fs/): No need for the `file://` protocol

