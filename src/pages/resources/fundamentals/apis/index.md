# APIs

We assume that you have been able to run write your first [script]() or [plugin]() by now. For writing more complex tasks, you will need access to more APIs. But first lets understand what type of APIs are available and where to find them.

## UXP APIs
You can use the capabilities offered by UXP APIs for creating user interface, file operations, network calls, etc. A lot of such APIs are available in the global scope. For example, [Crypto](https://developer-stage.adobe.com/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Crypto/) and [Document](https://developer-stage.adobe.com/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Document/). But for certain UXP modules, you will first need to seek permission in the manifest (for plugins) or mount it specifically using `require()`. For example, `require(os)` or `require('uxp').shell`.

## InDesign APIs
APIs that you will require to interact with the InDesign document. You will learn more about the mounting technique in the [InDesign API](../dom-versioning/) topic.

**Note** that these are also referred to as Document Object Model (DOM) APIs and Object Model View (OMV) and we use InDesign APIs, DOM APIs or OMV interchangeably throughout our documentation.

## Example

Lets imagine you want to write a script/plugin that 
1. Reads a text file from the user's system. 
2. Adds the text to the document.
3. And, applies certain modifications to it.

For Step #1, since you would like to access user's file system, you can do so by using the UXP API's `localFileSystem` or `fs` module.<br></br>
In Step #2 and 3, you need to update the InDesign Document and should use the DOM APIs. 

## Updates and releases 

We are still evolving the API surface and future releases of InDesign will support more capabilities. Therefore, each release will  have updates to both - DOM and UXP APIs.

The [What's new](../../../changelog) section, lists all the new features, changes, fixes for every release. The DOM APIs are versioned as per the application version. However, you need to pay attention to the the UXP version associated to each release. 

When your plugin/scripts intends to use UXP APIs, it is imperative that the application version supports that version of UXP. For example, InDesign v18.5 supports UXP v7.1, but if you use an API from UXP v7.2, your plugin/script will not work and lead to unexpected errors. The UXP API reference documentation generally calls out the UXP version since it is available. 

To determine the minimum UXP version supported by the application, you have a couple of options
1. In UDT, once you have InDesign running and it appears under 'Connected apps', you will see the UXP version displayed along with the InDesign version number.
2. Programmatically, you can query the host information using UXP APIs. Use the example from [this recipe](../../recipes/host-info).
3. [What's new](../../../changelog) section, will mention UXP version number for each release.
