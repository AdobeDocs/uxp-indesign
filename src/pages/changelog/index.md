# Changelog

## InDesign v18.4

### InDesign APIs

#### Added

##### Mounting APIs
<InlineAlert variant="warning" slots="text1" />

This is now a required step. In order to access InDesign DOM APIs in UXP scripts, you must declare the DOM version you want to use.

You can now access the APIs of previous versions in UXP scripts. 

*Learn more about [mounting APIs](../recipes/dom-versioning/) from different InDesign versions.*

##### Events Handling
UXP scripts now have the functionality to handle standard events that InDesign emits. You can use the `eventListener` object to catch such events. 

*Learn more about [events handling](../recipes/events/).*

##### Arguments Support
Arguments can now be passed to a UXP script, and can be used within the script. 

*Learn more about [arguments support](../recipes/arguments/).* 

##### Setting Script Result
UXP scripts now have a "result" associated with them. The result of a script can be used for debugging puposes as well as passed to another script for utilization. 

*Learn more about [setting script result](../recipes/script-result/).*

##### Menus Scripting
UXP scripts now have APIs which can be used to add new menu items, remove existing menu items etc. 

*Learn more about [menu scripting](../recipes/menus/).*

### UXP v7.0 Integration 

#### New
- Support for Web Components in UXP Plugins. Various HTML elements and methods have been added to support this feature.
    - Classes
        - [HTMLSlotElement](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLSlotElement.md)
        - [HTMLTemplateElement](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLTemplateElement.md)
    - Methods
        - [Element.assignedSlot](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#assignedslot--htmlslotelement)
        - [Element.slot](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#slot--string)
        - [Element.attachShadow](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#attachshadowinit)
        - [Element.shadowRoot](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#shadowroot--shadowroot)
        - [CustomElementRegistry.upgrade](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry.md#upgraderoot)
        - [CustomElementRegistry.whenDefined](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry.md#whendefinedname)
- [Spectrum Web Components (Beta)](/indesign/uxp/reference/uxp-api/reference-spectrum/swc/index.md) Support for Adobe SWC.
- Several augmentations to the JS API set
    - Properties
        - [HTMLElement.lang](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLElement.md#lang--string)
    - Classes added to the global scope
        - [TreeWalker](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/TreeWalker.md)
        - [NodeFilter](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/NodeFilter.md)
    - Methods
        - [Element.hasAttributes](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#hasattributes)
        - [Element.getAttributeNames](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#getattributenames)
        - [Event.composed](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/Event.md#composed--boolean)
        - [Event.composedPath](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/Event.md#composedpath)
        - [DocumentFragment.append](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#appendargs)
        - [DocumentFragment.querySelector](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#queryselectorselector)
        - [DocumentFragment.querySelectorAll](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment.md#queryselectorallselector)
- New focus events to support React 16
    - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
    - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- HTML [2D Canvas Support](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLCanvasElement.md) for basic shapes and styling.
- Alerts
    - [alert()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/alert.md)
    - [prompt()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/prompt.md)
    - [confirm()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/confirm.md)
- Support for [pipeThrough](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream.md#pipeThroughtransform-options) and [tee](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream.md#tee) in [ReadableStream](../../uxp-api/reference-js/Global%20Members/Streams/ReadableStream.md). Refer to [Streams](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Streams/index.md) for more details
- [ImageBlob](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/ImageBlob/) to render an uncompressed image buffer in UXP

#### Changed
- [HTMLVideoElement](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md): 'metadata' is the default value for `preload` attribute
- [FS API](/indesign/uxp/reference/uxp-api/reference-js/Modules/fs/): No need for the `file://` protocol

