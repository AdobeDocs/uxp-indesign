
<a name="htmlwebviewelement" id="htmlwebviewelement"></a>

# window.HTMLWebViewElement
**Since**: v6.0  


<a name="new-htmlwebviewelement-new" id="new-htmlwebviewelement-new"></a>

## HTMLWebViewElement()
WebViews is a component that allows you to embed web content in your plugins. It is essentially a browser window that is displayed inside UXP plugin, allowing you to load web pages, and interact with it using JavaScript.

WebViews can be used to display complex web pages inside the UXP plugins. You can use it to access external web services, to create custom UI and to isolate the web content from the rest of the plugin.<br></br>

<InlineAlert variant="warning" slots="text"/>

WebViews are resource intensive since it launches multiple processes per plugin
and therefore should be used only in cases where you cannot create the plugin using UXP features.<br></br>


### Getting started
Webview takes attributes such as `id` , `height` , and `src` to specify its properties. Add a WebView element by using the following code example in the desired location.<br></br>

```js
<webview id="webviewsample" width="100%" height="360px" src="https://www.adobe.com" uxpAllowInspector="true" ></webview>
```

#### Manifest Settings
To configure the Webview, you will first require the `webview` permission for your plugin. And configure the `domains`, `allow`, `allowLocalRendering` and `enableMessageBridge` attributes in manifest. The role of each of these attributes are described below.

**Note** that WebViews require manifest version v5 or above <br></br>

<table columnWidths="20,10,50,20">
 <tr>
     <th>Key</th>
     <th>Value</th>
     <th>Description</th>
     <th>Mandatory/Optional</th>
</tr>
<tr>
     <td>.allow</td>
     <td>"yes"</td>
     <td>Enables WebView access to the plugin</td>
     <td>Mandatory</td>
</tr>
<tr>
     <td>.allowLocalRendering</td>
     <td>"yes"</td>
     <td>Enables WebView to load local contents (supported from UXP v8.0.0❗) </td>
     <td>Optional</td>
</tr>
<tr>
     <td>.domains</td>
     <td>string[]</td>
     <td>Allows access to the specified domains. Wildcards (except top-level) are supported. e.g "https://*.adobe.com". <br></br> Recommended</td>
     <td>Mandatory</td>
</tr>
<tr>
     <td>.domains</td>
     <td>"all"</td>
     <td>Allows access to all domains.<br></br>Not recommended, may affect performance, security and privacy. Plugin may be blocked by enterprises.</td>
     <td>Mandatory</td>
</tr>
<tr>
     <td>.enableMessageBridge</td>
     <td>"localAndRemote"</td>
     <td>Allows Plugin & the content loaded on WebView to communicate regardless of where the content is loaded from **locally or remotely.**</td>
     <td>Optional</td>
</tr>
<tr>
     <td>.enableMessageBridge</td>
     <td>"localOnly"</td>
     <td>Allows Plugin & the content loaded on WebView to communicate if the content is loaded from **locally.** (supported from UXP v8.0.0❗)</td>
     <td>Optional</td>
</tr>
<tr>
     <td>.enableMessageBridge</td>
     <td>"no"</td>
     <td>Does not allow Plugin & the content loaded on WebView to communicate</td>
     <td>Optional</td>
</tr>
</table><br></br>

**Example**  
```js
// `manifest.json`
{
"manifestVersion": 5,
"requiredPermissions": {
    "webview": {
       "allow": "yes",
        // domains --> string[] | "all"
        "domains": [ "https://*.adobe.com", "https://*.google.com"],
        // enableMessageBridge can use either of these data "localAndRemote" | "localOnly" | "no"
        "enableMessageBridge": "localAndRemote"
     }
  }
}
```
**Note:**<br></br>
You can setup a communication channel between the Webview and your plugin using `postMessage`. Make sure that `requiredPermissions.webview.enableMessageBridge` is set to `"localAndRemote"` in the plugin's manifest.json, just like the above example. Find more details in the `postMessage` property description section.


#### Sample Plugin
Checkout the template available in `UXP Developer Tool` for a quick starter plugin for WebView in UXP.

#### Limitations
1. UXP v7.4.3 and below allows only remote content. This means you will not be able to load local HTML files from plugin folders in UXP WebView unless you have UXP v8.0 or higher.
2. Any links in a UXP WebView will not open in a new window.
e.g., In a browser, clicking `<a href="https://www.adobe.com" target="_blank">` would create a new Window
and open `https://www.adobe.com` from the new Window or JavaScript alert() pops up a new Window. UXP WebView doesn't permit this.
3. The manifest permission `requiredPermissions.webview.domains` does not allow `wildcard(*)` in the top-level domain names.
e.g., Domain lists below are NOT supported
```json
"requiredPermissions": {
 "webview": {
     "domains": ["https://www.*", "https://www.adobe.*"],
     "allow": "yes"
  }
}
```

### Load local content onto WebView
From UXP v8.0.0 onwards, UXP plugins supports loading HTML content from your plugin folder (`plugin`, `plugin-data` and `plugin-temp` folders) in the Webview. You don't need to host the HTML files in a remote server anymore. 

**Example**<br></br>

Let's assume that `webview.html` is located in the plugin folder. You can load the HTML by using the `plugin` protocol URL.

```html
<webview src="plugin:/webview.html"></webview>
```

Similarly, for webview-in-plugin-data.html in plugin-data and webview-in-plugin-temp.html in plugin-temp folder:
```html
<webview src="plugin-data:/webview-in-plugin-data.html"></webview>
<webview src="plugin-temp:/webview-in-plugin-temp.html"></webview>
```

**Manifest Settings**<br></br>
To enable local content,  
1. `requiredPermissions.webview.allowLocalRendering` should be set to "yes".
2. `requiredPermissions.webview.enableMessageBridge` should be either "localOnly" or "localAndRemote" for communication between the plugin and WebView via postMessage.

```json
"requiredPermissions": {
 "webview": {
     "allow": "yes",
     "domains": [],
     "allowLocalRendering": "yes",
     "enableMessageBridge": "localOnly"
  }
}
```

**Best Practice**<br></br>
Use relative path for loading resources from the WebView. <br></br>

The loaded HTML page in the Webview may refer to other CSS, JS, images or HTML files. Use relative paths to specify such resources. Do not use the UXP `plugin:`, `plugin-data:` and `plugin-temp:` protocol. For example, if you were referencing a CSS file within `webview.html` in the above example using an absolute path "plugin:/main.css", the WebView will be unable to load the resource. Use as a relative path such as "./main.css" instead. 


**Extra Tip**<br></br>
Find the root folders of 'plugin', 'plugin-data', and 'plugin-temp' in the following way.
```json
// manifest.json
"requiredPermissions": {
  // permission for localFileSystem
  "localFileSystem": "request"
}
```

```js
const localFileSystem = require("uxp").storage.localFileSystem;
const pluginFolder = await localFileSystem.getPluginFolder();
const pluginDataFolder = await localFileSystem.getDataFolder();
const tempFolder = await localFileSystem.getTemporaryFolder();

console.log(`pluginFolder = ${pluginFolder.nativePath}`);
console.log(`pluginDataFolder = ${pluginDataFolder.nativePath}`);
console.log(`pluginTempFolder = ${tempFolder.nativePath}`);
```

**Limitations**<br></br>
For security reasons, WebView does not support JS localStorage APIs if local contents are loaded onto WebView.
When the local contents access the properties (length) or methods (setItem, getItem and so on) of JS localStorage property,
it would return nothing (zero or null according to the return type) or throw an error.

<a name="htmlwebviewelement-htmlwebviewelement-new" id="htmlwebviewelement-htmlwebviewelement-new"></a>

## HTMLWebViewElement()
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| uxpallowinspector | `boolean` | Enable Developer tools for debugging in UXP WebView<br></br>                                       **Note:** Not supported in UWP platform<br></br>                                       eg: `<webview id="webviewsample" width="100%" height="360px" src="https://www.adobe.com" uxpAllowInspector="true" ></webview>` |
| src | `string` | The url to load in the WebView |
| width | `string` | Width of the WebView |
| height | `string` | Height of the WebView |



<a name="htmlwebviewelement-src" id="htmlwebviewelement-src"></a>

### src : `string`
The url to load in the WebView.



<a name="htmlwebviewelement-postmessage" id="htmlwebviewelement-postmessage"></a>

### postMessage(message, targetOrigin, transfer)
The plugin and the content within the WebView can communicate with each other using `postMessage` and listening to the 'message' event.

[Plugin]
- send messages to the content in the WebView `HTMLWebViewElement.postMessage(msg)`
- receive messages from the content in the WebView `window.addEventListener("message", (e) => {...})` where `e: Event { origin: url of the content, source: window.HTMLWebViewElement, data: message }`

[Content in the WebView]
- send messages to plugin `window.uxpHost.postMessage(msg)`
- receive messages from plugin `window.addEventListener("message", (e) => { ... })` where `e: Event { origin: plugin id, source: window.uxpHost, data: message }`


| Param | Type | Description |
| --- | --- | --- |
| message | `Object` | A message sent to the WebView. Please note that the message is stringified & parsed by JSON |
| targetOrigin | `string` | `[Optional]` - The origin of WebView for the event to be dispatched. The literal string "*" indicates no preference |
| transfer | `Object` | `Optional` and `not functional yet`. Will be enabled in future release. |

**Example**  
```js
// Send message from plugin to WebView
let webViewDisplay = document.getElementById("webviewSample");
webViewDisplay.postMessage("PluginMessage1");

// Plugin receives message from WebView via "message" event.
window.addEventListener("message", (e) => {
  console.log(`Message from WebView(Origin:${e.origin}): ${e.data}\n`);

  if (e.data === "webviewmessage1") {
    webViewDisplay.postMessage("Thanks, Message1 recieved successfully");
  }
});
```
**Example**  
```js
// WebView sends message to Plugin
window.uxpHost.postMessage("webviewmessage1");

// WebView receives messages from Plugin
window.addEventListener("message", (e) => {
  // (e) from Plugin
  // e.origin would be 'plugin id'
  // e.source would be 'window.uxpHost'
  // e.data is 'JSON.parse(JSON.stringify("PluginMessage1"))' which is "PluginMessage1"
  if (e.data === "PluginMessage1") {
    console.log(e.data);
  }
});
```


<a name="htmlwebviewelement-event-loadstart" id="htmlwebviewelement-event-loadstart"></a>

### loadstart
Event fired when loading has started.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | `string` | "loadstart" |
| url | `string` | url which WebView navigates to |

**Example**  
```js
const webview = document.getElementById("webviewSample");
// Print the url when loading has started
webview.addEventListener("loadstart", (e) => {
  console.log(`webview.loadstart ${e.url}`);
});
```


<a name="htmlwebviewelement-event-loadstop" id="htmlwebviewelement-event-loadstop"></a>

### loadstop
Event fired when loading has completed.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | `string` | "loadstop" |
| url | `string` | url which WebView navigates to |

**Example**  
```js
// Print the url when loading has completed
webview.addEventListener("loadstop", (e) => {
  console.log(`webview.loadstop ${e.url}`);
});
```


<a name="htmlwebviewelement-event-loaderror" id="htmlwebviewelement-event-loaderror"></a>

### loaderror
Event fired when loading has failed.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | `string` | "loaderror" |
| url | `string` | url which WebView navigates to |
| code | `number` | Platform specific error code. Below are the Error Code details for the following platforms<br></br> 1. [Mac Error Codes](https://developer.apple.com/documentation/foundation/1448136-nserror_codes)<br></br> 2. [Windows Error Code](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2weberrorstatus?view=webview2-dotnet-1.0.1587.40)<br></br> 3. [Windows Common HRESULT codes](https://learn.microsoft.com/en-us/windows/win32/seccrypto/common-hresult-values)<br></br> |
| message | `string` | Error description |

**Example**  
```js
// Print the url, code and message when loading has failed
webview.addEventListener("loaderror", (e) => {
     console.log(`webview.loaderror ${e.url}, code:${e.code}, message:${e.message}`);
});
```
