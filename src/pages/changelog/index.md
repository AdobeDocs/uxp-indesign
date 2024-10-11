---
title: Changelog
description: Changelog maintains the latest news about the released versions.
keywords:
  - UXP InDesign APIs
  - What's new
  - Changelog
  - UXP APIs
  - UXP Releases
contributors:
  - https://github.com/padmkris123
---
# Changelog
## InDesign v20.0
#### New
- [Flyout Menus Support](/src/pages/resources/recipes/flyout-menu/index.md)
- [Peristent Storage Migration](/src/pages/resources/recipes/persistent-storage-migration/index.md)
- [GUID support](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/User%20Information/) 

### UXP v8.0.1

#### Breaking Changes
- `enableFillAsCustomAttribute` feature flag, introduced in UXP v7.1.0, will be turned on by default.

#### Deprecations
- Changes to Clipboard
  - [Clipboard.setContent](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/#setcontentdata) is deprecated. Please use [Clipboard.write](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/#writedata) instead.
  - [Clipboard.getContent](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/#getcontent) is deprecated. Please use [Clipboard.read](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/#read) instead.
  - Passing an `object` to [Clipboard.writeText(object)](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/#writetexttext) is deprecated. Please use [Clipboard.write(object)](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/#writedata) instead.
  - [Clipboard.clearContent](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/#clearcontent) is deprecated. [Clipboard.writeText("")](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/#writetexttext) would be an alternative.
- Changes to VideoElement
  - Event `uxpvideoload` in [load()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement/#load) is deprecated. Use `loadeddata` instead.
  - Event `uxpvideoplay` in [play()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement/#play) is deprecated. Use `ended` instead.
  - Event `uxpvideocomplete` in [play()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement/#play) is deprecated. Use `ended` instead.
  - Event `uxpvideopause` in [pause()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement/#pause) is deprecated. Use `pause` instead.

#### New
- New components supported in Spectrum Web Components (SWC). More details [here](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers)
  - sp-asset
  - sp-meter
  - sp-number-field
  - sp-overlay
  - sp-quick-actions
  - sp-search
  - sp-swatch
- New command line templates to get started with SWC easily. Find details in this [section](/indesign/uxp/reference/uxp-api/reference-spectrum/swc/#command-line-templates).
- Support for local HTML files in [WebView](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement/#load-local-content-onto-webview)
- New CSS capabilities
  - scaleX() & scaleY()
  - transform-origin
  - translate property
  - `Box-shadow` property now supports `transform rotate`.
- New feature flag `CSSNextSupport` in the manifest.json to gate the new and future CSS capability.

  | Manifest setting | Description  |
  | ---------------- | ------------ |
  | `featureFlags: {"CSSNextSupport": true}` | Enables all the new CSS features. |
  | `featureFlags: {"CSSNextSupport": ["boxShadow", "transformFunctions", "transformProperties" ]}` | Enables only the named properties in the list. |
  
  Note that `"enableSWCSupport": true` will enable `CSSNextSupport` by default, even if it is not done explicitly in plugin manifest otherwise.
- Video enhancements: Support added for [Seek Event](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement.md)
- Support for [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) API
- Support for new HTMLElement APIs - [append](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLElement/#appendnodes), [prepend](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLElement/#prependnodes) and [replaceChildren](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLElement/#replacechildrennodes)
- [Beta] Support for form reset in [HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

#### Updated
- Upgraded Spectrum Web Components to v0.37.0. [More detail](https://github.com/adobe/swc-uxp-wrappers/tree/main?tab=readme-ov-file#spectrum-web-components-uxp-wrappers)
- [UXP Clipboard.writeText()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Clipboard/#writetexttext) now accepts strings as input to meet standards

## InDesign v19.4

### UXP v7.4.0

#### Updated
- UXP Alerts ([alert](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/alert.md), [prompt](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/prompt.md), [confirm](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/confirm.md)) have been moved back to beta due to a few inherent instabilities in this feature. While we work on addressing these issues, the feature can be accessed using the feature flag `enableAlerts` in the manifest.json file. Also, note that UXP alerts will be `available only in Plugins` and `not in scripts`.
- Wildcards (*) at the top-level `domain` name are not allowed. Please ensure you revisit the `permissions` setup in manifest.json for [WebView](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement.md), and network calls [XMLHttp](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/XMLHttpRequest.md) [fetch](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/fetch.md)
- New doc for tracking the [mapping between Spectrum widgets and Spectrum Web Components](/indesign/uxp/reference/uxp-api/reference-spectrum/spectrum-widgets-to-swc-mapping/index.md) in UXP


#### Fixed
- XMP in Scripts.
- Plugin crashes while using [fit-content](https://forums.creativeclouddeveloper.com/t/ps-2024-crashes-when-opening-my-uxp-plugin/6840/7) 
- WebView support for [file selector](https://forums.creativeclouddeveloper.com/t/macos-uxp-webview-for-photoshop-is-missing-file-selector/6843) in MacOS
- GUID returning hashed empty string
- Updated missing docs for pseudo-class [defined](/indesign/uxp/reference/uxp-api/reference-css/Pseudo-classes/defined.md) (Available since UXP v6.0)

## InDesign v19.2
#### Updated
- **[BREAKING CHANGE]** UXP logs and console.log [paths](/scripts/tutorials/debug/) have changed.

## InDesign v19.0

Plug-Ins menu lists the installed UXP plugins and their panel entrypoints.

  ![Plug-Ins Menu](./PluginsMenu.png)

#### Fixed

- Random app hang issue when invoking `doScript()` from UXP plugins.
- App crashes at quit when event handlers are registered.

### UXP v7.3.0 & UXP v7.2

#### New
- Multipart `FormData` support in [Request](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Request/) and [Response](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/Response/) for [fetch](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/fetch/)
- [FormData](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/FormData/) now supports the following APIs
    - delete()
    - get()
    - getAll()
    - has()
    - keys()
    - set()
    - values()
- <b>(Photoshop Only)</b> GUID for uniquely identifying a Creative Cloud User.
- <b>(Photoshop Only)</b> Adobe Extensibility Metadata Platform (XMP) support.
- [pointer-events: none](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) `CSS` property
- Support for `pseudoElement` in [getComputedStyle(element, pseudoElement)](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/getComputedStyle) API


#### Updated
- [FormData's append](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/FormData/#append--namevaluefilename) now supports `Blob` as an additional parameter.
- [Spectrum Web Component (SWC)](/indesign/uxp/reference/uxp-api/reference-spectrum/swc/) in UXP is moving out of Beta. 
    - Additional [components and variants](/indesign/uxp/reference/uxp-api/reference-spectrum/swc/#list-of-supported-swc)
    - `Spectrum Web Components` support in `React` context is now available for all 30 components.
    - Starter plugins for [Spectrum Web Component](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-starter) and [Spectrum Web Component in React context](https://github.com/AdobeDocs/uxp-indesign-samples/tree/main/plugins/swc-uxp-react-starter)

#### Fixed
- Tab Navigation not working for several SWC Components is now fixed
- Spacebar doesn't work on SWC Button component when reached via TAB navigation.
- Support for `Alerts`
    - [alert()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/alert/)
    - [prompt()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/prompt/)
    - [confirm()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/confirm/)


### UDT v2.0

#### New
- UXP Playground to experiment with APIs. Click on the 'Playground' tab next to 'Developer Workspace' to select an app and get started.

#### Updated
- Plugin actions are surfaced based on the 'Status' of your plugin in the Developer Workspace

## InDesign v18.5

UXP Plugins are now available! Get started [here](../plugins).

### UXP v7.1

#### New
HTMLElement now supports
- [setPointerCapture](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#setpointercapturepointerid)
- [releasePointerCapture](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#releasepointercapturepointerid)
- [hasPointerCapture](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#haspointercapturepointerid)
- [dir](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLHtmlElement#dir--string)

#### Updated
- Documentation for `shell` moved to [new location](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/shell/)

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
        - [HTMLSlotElement](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLSlotElement/)
        - [HTMLTemplateElement](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLTemplateElement/)
    - Methods
        - [Element.assignedSlot](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element/#assignedslot--htmlslotelement)
        - [Element.slot](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#slot--string)
        - [Element.attachShadow](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#attachshadowinit)
        - [Element.shadowRoot](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#shadowroot--shadowroot)
        - [CustomElementRegistry.upgrade](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry#upgraderoot)
        - [CustomElementRegistry.whenDefined](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry#whendefinedname)
- [Spectrum Web Components (Beta)](/indesign/uxp/reference/uxp-api/indesign/uxp/reference-spectrum/swc/) Support for Adobe SWC.
- Several augmentations to the JS API set
    - Properties
        - [HTMLElement.lang](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLElement#lang--string)
    - Classes added to the global scope
        - [TreeWalker](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/TreeWalker/)
        - [NodeFilter](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/NodeFilter/)
    - Methods
        - [Element.hasAttributes](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#hasattributes)
        - [Element.getAttributeNames](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#getattributenames)
        - [Event.composed](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/Event#composed--boolean)
        - [Event.composedPath](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/Event#composedpath)
        - [DocumentFragment.append](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment#appendargs)
        - [DocumentFragment.querySelector](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment#queryselectorselector)
        - [DocumentFragment.querySelectorAll](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment#queryselectorallselector)
- New focus events to support React 16
    - [Focusin Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
    - [Focusout Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
- HTML [2D Canvas Support](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLCanvasElement/) for basic shapes and styling.
- Alerts
    - [alert()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/alert/)
    - [prompt()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/prompt/)
    - [confirm()](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/confirm/)
- Support for [pipeThrough](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream#pipeThroughtransform-options) and [tee](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream#tee) in [ReadableStream](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream). Refer to [Streams](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Streams/) for more details
- [ImageBlob](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/ImageBlob/) to render an uncompressed image buffer in UXP

#### Changed
- [HTMLVideoElement](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement/): 'metadata' is the default value for `preload` attribute
- [FS API](/indesign/uxp/reference/uxp-api/reference-js/Modules/fs/): No need for the `file://` protocol


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
