# APIs within UXP

We assume that you have been able to write your first [script](../../../scripts/getting-started/) or [plugin](../../../plugins/getting-started/) successfully by now. For writing more complex tasks, you will need access to more APIs. But first, let's understand what types of APIs are available and where to find them.

The UXP platform has two main constituents
1. Core UXP APIs
2. Host-specific APIs

You will see a few examples of these APIs in the [recipes](../../recipes/) but for now, just try and understand the difference between them.

## UXP Core APIs
These APIs enable you to create user interfaces, perform file operations, make network calls, etc. 

The method to mount or use these APIs may vary. Many of them are directly available in the global scope, such as [Crypto](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Crypto/) and [Documents](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Document/). But for certain modules, you first need to seek permission in the manifest (for plugins) or mount it specifically using `require()`. For example, `require(os)` or `require('uxp').shell`.

## Host-specific APIs
These APIs are meant for modifying or interacting with the document.

<InlineAlert slots="text1, text2, text3" />

**IMPORTANT** <br></br> 

Note that these are also referred to as **Document Object Model (DOM) APIs** and **Object Model View (OMV)**. Throughout our documentation, we will use InDesign APIs, DOM APIs or OMV interchangeably. <br></br>

Also, keep in mind that, these should **not** be confused with the HTML DOM which serves your plugin/script UI.

You will learn more about the mounting technique in the [InDesign API](../dom-versioning/) topic.

## Example

Let's imagine you want to write a script/plugin that 
1. Reads a text from a file in the user's system. 
2. Adds the text to the document.
3. And, applies certain modifications to it.

For Step #1, since you would like to access the user's file system, you will use the UXP API's `localFileSystem` or `fs` module.<br></br>
In Steps #2 and 3, since you need to update the document, you will use the DOM APIs. 

## Updates and releases 

We are still evolving the API surface and future releases will support more capabilities. Therefore, each release will have updates to both - DOM and UXP APIs.

The [What's new](../../../changelog) section, lists all the new features, changes, and fixes carried by the latest release. The DOM APIs are versioned as per the application version. However, you need to pay attention to the UXP version associated with each release. 

When your plugin/script intends to use a specific UXP API, the host application must support that version of UXP. For example, InDesign v18.5 supports UXP v7.1, but if you use an API from UXP v7.2, your plugin/script will not work and lead to unexpected errors. Pay attention to the minimum compatible versions of UXP and the host application called out in the API references, examples and samples. 

To determine the minimum UXP version supported by the application, you have a couple of options
1. In UDT, once you have InDesign running and it appears under 'Connected apps', you will see the UXP version displayed along with the InDesign version number.
2. Programmatically, you can query the host information using UXP APIs. Use the example from [this recipe](../../recipes/host-info).
3. [What's new](../../../changelog) section, will mention the UXP version number for each release.
