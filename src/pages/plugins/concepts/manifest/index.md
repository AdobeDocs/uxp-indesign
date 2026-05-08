---
title: Plugin manifest
description: Details of plugin manifest and its configuration.
keywords:
  - plugin manifest
  - UXP configuration
  - manifest.json
contributors:
  - https://github.com/padmkris123
---


# UXP Manifest
The manifest is a JSON file that is located at the root of the plugin bundle. It is named `manifest.json` and is
required for all plugins.

## Overview

Each UXP plugin has one `manifest.json` file that describes the plugin. It contains metadata such as the plugin's name,
version, icons, and entry points.

The manifest file also contains the permissions that the plugin requires. Most importantly, it contains your plugin ID which is used to identify your plugin. (Valid plugin IDs are required for distributing in Adobe's Marketplace, read more [in the docmentation](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/).)


Since UXP plugins can be run in a number of different hosts, the manifest also contains a `host` field that specifies
which host the plugin is for. This is used to identify the plugin in the manifest and in the plugin bundle.

## Reference

### Manifest


The object at the root of the manifest file.


<InlineAlert slots="text" />

Properties marked with an asterisk (\*) are required.

#### Example

```json
{
	"manifestVersion": 5,
	"id": "YOUR_ID_HERE",
	"name": "Name of your plugin",
	"version": "1.0.0",
	"main": "index.html",
	"host": {
		"app": "HOST_APPLICATION",
		"minVersion": "HOST_VERSION"
	},
	"entrypoints": [
		{
			"type": "command",
			"id": "commandFn",
			"label": {
				"default": "Show A Dialog"
			}
		},
		{
			"type": "panel",
			"id": "panelName",
			"label": {
				"default": "Panel Name"
			}
		}
	],
	"icons": [
		{
			"width": 24,
			"height": 24,
			"path": "icons/icon.png",
			"scale": [
				1,
				2
			]
		}
	],
	"requiredPermissions": {
		"network": {
			"domains": "all"
		}
	}
}
```
<InlineAlert slots="text" />

Properties marked with an asterisk (\*) are required.

#### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `manifestVersion` * | `"5"` | required | The manifestVersion indicates the version of the manifest schema. This document describes version 5 of the manifest schema. |
| `id` * | `string` | required | The id uniquely identifies a plugin and is used to disambiguate plugin contexts, storage, errors, etc. For plugins distributed through the plugin marketplace, the ID has to match the ID in [the Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/). |
| `name` * | `string \| LocalizedString` | required | The name visually identifies the plugin in the user interface. It is usually used in a plugin menu listing or launcher for top-level action items. The name can be a string, a key from the StringsDefinition object, or a localized string. |
| `strings` | `StringsDefinition` | optional | A set of strings used to localize the plugin name and other user-facing strings. It can also be a path to a JSON file containing the StringsDefinition object. **Default value** `{}` (no strings) |
| `version` * | `string` | required | The version indicates the plugin's version. The string has a format of major.minor.patch. |
| `main` | `string` | optional | Indicates the primary JavaScript or HTML file, relative to the plugin's installation directory. Supports HTML and JS files, such as `index.html` and `index.js`. If not specified (for deprecations), `main.js` is used. **Default value** `"main.js"` |
| `icons` | `IconDefinition[]` | optional | An array of icons representing the overall plugin or panel icon. The host application uses these icons to present the plugin to the user. If the icons array is missing, a default icon will be used. **Default value** `[]` (no icons) |
| `host` * | `HostDefinition` | required | The host object indicates the plugin's compatibility with the host. Incompatible plugins will: • fail to install if attempted in the given host\\• be invisible in the in-app plugin marketplace for the given host\\• be unavailable for update if the update is no longer compatible. |
| `entrypoints` * | `EntrypointDefinition[]` | required | The entrypoints array defines the entrypoints that the plugin provides. |
| `requiredPermissions` | `PermissionsDefinition` | optional | Indicates the various permissions this plugin requires. These permissions are required before accessing certain API surfaces. Without these permissions in the manifest, API access may fail or throw an error. Some permissions require user consent. **Default value** `{}` (no permissions) |
| `addon` | `object` | optional | _Not supported in InDesign v18.5_ \\ Addon definitions for hybrid plugins. A UXP Hybrid plugin is a UXP plugin that can access the power of C++ native libraries. **Default value** `{}` (no addons) |
| `featureFlags` | `FeatureFlags` | optional | A set of feature flags that can be used to enable or disable certain features of the plugin. These flags are used to gate features that are not yet ready for general availability. **Default value** `{}` (no additional feature flags) |


### StringsDefinition

Represents a set of strings used to localize the plugin name and other user-facing strings.

`StringsDefinition` keys can be used anywhere where `LocalizedString` is supported.

**Example**

Your manifest.json file might look like this:

```json
{
	"name": "my-plugin",
	"strings": {
		"my-plugin": {
			"default": "My Plugin",
			"de": "Mein Plugin"
		}
	}
}
```

### LocalizedString

Represents a localized string. The key is the locale, and the value is the translated string.

**Example**

```json
{
	"default": "Hello",
	"en": "Hello",
	"de": "Hallo"
}
```

#### Properties


| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `default` * | `string` | required | The default string used when no translation is available for the current locale. |


### IconDefinition


Represents an icon used by the plugin or specific entry point. The icon may be used in the plugin list, toolbar, or other places.

#### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `width` * | `number` | required | The width of the icon in pixels. |
| `height` * | `number` | required | The height of the icon in pixels. |
| `path` * | `string` | required | The path to the icon, relative to the plugin's installation directory. Supports PNG (`.png`), JPG (`.jpg` or `.jpeg`), and SVG (`.svg`) files. |
| `scale` | `number[]` | optional | Specifies the scaling factors that the icon supports. **Example** `{ "path": "icon.png", "width": 24, "height": 24, "scale": [1, 2, 2.5] }` Results in the following icon files being used: • `icon.png` or `icon@1x.png` (24x24px) for 100% scaling\\• `icon@2x.png` (48x48px) for 200% scaling\\• `icon@2.5x.png` (60x60px) for 250% scaling **Default value** `[1]` (only supports 100% scaling) |
| `theme` | `("all" \| "lightest" \| "light" \| "medium" \| "dark" \| "darkest")[]` | optional | Specifies the themes that the icon supports. **Example** `{ "path": "icon.png", "width": 24, "height": 24, "theme": ["lightest", "light"] }` **Default value** `["all"]` (supports all themes) |
| `species` | `("generic" \| "toolbar" \| "pluginList")[]` | optional | Indicates the suitable use of this icon. The default species is generic, meaning that the icon is suitable for display anywhere. Options: • generic: suitable for display anywhere\\• toolbar: suitable for display in a toolbar. Icon sizes are 23x23px for 100% scaling and 46x46px for 200% scaling.\\• pluginList: suitable for display in a plugin list. Icon sizes are 24x24px for 100% scaling and 48x48px for 200% scaling. **Default value** `["generic"]` (suitable for display anywhere) |


### EntrypointDefinition


Represents an entrypoint provided by the plugin, which can be invoked by the user.


An entrypoint consists of an ID and a label at minimum.


**Example**


```json
{
    "id": "myPlugin.myEntrypoint",
    "label": "My Entrypoint"
}
```

#### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `type` * | `"command" \| "panel"` | required | The type of entrypoint. Currently, only `command` and `panel` are supported. |
| `id` * | `string` | required | The ID of the entrypoint. This ID must be unique within the plugin. It is used to identify the code that implements the entrypoint. |
| `label` * | `string \| LocalizedString` | required | The label of the entrypoint. This label is used to display the entrypoint to the user, such as in the plugin menu. |
| `description` | `string \| LocalizedString` | optional | A description of the entrypoint. This description is used in tooltips and other places where a longer description is appropriate, depending on the host app. **Default value** `undefined` (uses the plugin's name) |
| `shortcut` | `{ mac: string, win: string }` | optional | A keyboard shortcut that can be used to invoke the entrypoint. Keyboard shortcuts are specified separately for Windows and macOS platforms. If the shortcut is not available in the host application, it will be ignored. **Please note:** _Currently, keyboard shortcuts are only supported in Adobe XD._ **Example** `"shortcut": { "mac": "Cmd+Shift+P", "win": "Ctrl+Shift+P" }` Keyboard shortcuts are defined separately for each platform. Each definition is a string that follows this syntax: • One or more modifier keys, in any order, each one followed by "+"\\• Mac: modifiers may be Cmd, Ctrl, Opt/Alt, or Shift. The shortcut must contain at least one of Cmd or Ctrl.\\• Win: modifiers may be Ctrl, Alt, or Shift. The shortcut must contain Ctrl.\\• A letter or number key. Letters are case-insensitive (e.g., "Cmd+P" and "Cmd+p" mean the same thing and neither requires pressing Shift). Other keys (including punctuation, arrow keys, or F1-F12) are currently not supported. **Please note:**_If your shortcut collides with a built-in command in the host app, or another plugin's shortcut, your shortcut will be ignored, and you"ll see a warning printed to the developer console._ **Default value** `undefined` (no shortcut) |
| `icon` | `IconDefinition[]` | optional | An icon specific to the entrypoint. If specified, this icon overrides the plugin icon in places where the entrypoint is specifically displayed. **Default value** `[]` (plugin icon) |
| `minimumSize` | `{ width: number, height: number }` | optional | Indicates the desired minimum size of the view. The host may not be able to guarantee the minimum size. The size is defined by width and height in pixels. If no minimum size is specified, the host will use its own default minimum size. **Default value** (host-specific default) |
| `maximumSize` | `{ width: number, height: number }` | optional | The maximum desired size of the view. The host may not be able to guarantee the maximum size. If the view is hosted in a dialog, resizing can be prevented by setting minimumSize = maximumSize. **Default value** (host-specific default) |
| `preferredDockedSize` | `{ width: number, height: number }` | optional | The preferred size of the view when docked, if it can be docked, or for modal dialogs that have no reference_node_id. The host may not be able to guarantee this size. **Default value** (host-specific default) |
| `preferredFloatingSize` | `{ width: number, height: number }` | optional | The preferred size of the panel when floating. The host may not be able to guarantee this size. See minimumSize for the format. **Default value** (host-specific default) |


### HostDefinition


UXP supports a number of different host applications. The host definition specifies which host app the plugin supports.

#### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `app` * | `"PS" \| "ID" \| "XD"` | required | The host app that the plugin supports. Possible values: • `PS`: Adobe Photoshop\\• `ID`: Adobe InDesign\\• `XD`: Adobe XD |
| `minVersion` * | `string` | required | The minimum version of the host app that the plugin supports. The version string follows the format of `x.y.z`. |
| `maxVersion` | `string` | optional | The maximum version of the host app that the plugin supports. **Default value** `undefined` (the latest version of the host app) |


### PermissionsDefinition


To ensure that plugins are secure, UXP requires that plugins declare the permissions they need to function.


<InlineAlert variant="info" slots="header, text"/>

**Pro tip**

Make sure you configure the most accurate permission for your use case because in the future we will ask users to provide their consent based on it. For example, for file operations, you may find 'fullAccess' to be the least restrictive and hence the easiest to pick, but a user may not be comfortable giving full access to their system unless it's absolutely necessary and might deny the installation of your plugin altogether. 

#### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `clipboard` | `"read" \| "readAndWrite"` | optional | Enables the plugin to read and write to the clipboard. The [clipboard recipe](/indesign/uxp/resources/recipes/clipboard/) has more examples. Possible values: • `read`: enables the plugin to read from the clipboard.\\• `readAndWrite`: enables the plugin to read from and write to the clipboard. **Default value** `undefined` (no clipboard access) |
| `localFileSystem` | `"plugin" \| "request" \| "fullAccess"` | optional | Enables the plugin to access the file system. The [file-operation recipe](/indesign/uxp/resources/recipes/file-operation/) has a detailed example. Possible values: • `plugin`: enables the plugin to access the file system in the plugin folder.\\• `request`: enables the plugin to request access to the file system (user consent).\\• `fullAccess`: enables the plugin to access the file system without requesting access. **Default value** `"plugin"` |
| `network` | `NetworkPermission` | optional | Enables the plugin to access the network. For example, to make HTTP requests (XHR, fetch, etc.), load images (`&lt;img src="" /&gt;`), etc. **Default value** `undefined` (no network access) |
| `webview` | `WebviewPermission` | optional | Enables the plugin to use webviews in its UI to display web content or complex UI. **Default value** `undefined` (no webview usage) |
| `launchProcess` | `LaunchProcessPermission` | optional | Enables the plugin to launch processes using APIs like `require("uxp").shell.openPath()` or `shell.openExternal()`. **Default value** `undefined` (no process launching) |
| `allowCodeGenerationFromStrings` | `boolean` | optional | Allows you to generate code from strings. You will need this while using inline event handlers for HTML elements, `eval()`, and `new Function()` syntax. **Default value** `false` |
| `ipc` | `IpcPermission` | optional | Enables the plugin to communicate with other plugins. **Default value** `undefined` |


#### NetworkPermission


Specifies the domains that the plugin can access in network requests.


**Example**


```json
{
    "domains": [
        "https://example.com",
        "https://*.adobe.com/",
        "wss://*.myplugin.com"
    ]
}
```


Then, in your plugin code, you can make network requests like this:


```javascript
const response = await fetch("https://example.com");
```


Or load images like this:

```html
<img src="https://example.com/image.png" />
```

You can also allow access to all domains by setting `domains` to `"all"`.


```json
{
    "domains": "all"
}
```

#### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `domains` * | `string[] \| "all"` | required | The domains that the plugin can access. Can be a list of domains, or the string "all" to allow access to all domains. |


The [network recipe](/indesign/uxp/resources/recipes/network/) has more details.


#### WebViewPermission


Enables the plugin to use webviews in its UI to display web content or complex UI.


**Example**


```json
{
    "allow": "yes",
    "domains": ["https://example.com"],
    "enableMessageBridge": "localAndRemote"
}
```


Then, in your plugin code, you can use a webview like this:


```html
<webview src="https://example.com" />
```


To communicate between the webview and the plugin, you can use the message API:


```javascript
// In the plugin:
const webview = document.querySelector("webview");
webview.addEventListener("message", (event) => \{
    console.log("Received message from webview:", event.data);
    webview.postMessage("Hello from the plugin!");
\});\n
// In the webview:
window.addEventListener("message", (event) => \{
    console.log("Received message from plugin:", event.data);
    window.uxpHost.postMessage("Hello from the webview!");
\});
```

#### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `allow` * | `"yes"` | required | Must be set to "yes" to enable webviews. |
| `domains` * | `string[] \| "all"` | required | The domains that the plugin can access. Can be a list of domains, or the string "all" to allow access to all domains. |
| `enableMessageBridge` | `"no" \| "localAndRemote"` | optional | Specifies whether the plugin can communicate with the webview using the message API. **Default value** `"no"` |


Find the detailed [WebView API reference](/indesign/uxp/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLWebViewElement/) or use the webview-starter template plugin in UDT.


#### LaunchProcessPermission


Specifies the schemes and extensions that the plugin can launch.


For example, if the plugin can launch a web browser, it should specify the `http` and `https` schemes.


**Example**


```json
{
    "schemes": ["http", "https"],
    "extensions": []
}
```

#### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `schemes` * | `string[]` | required | A set of schemes that the plugin can launch. **Example** `["http", "https", "mailto"]` |
| `extensions` * | `string[]` | required | A set of extensions that the plugin can launch. Only relevant for local files (using the `file://` schema) **Example** `["pdf", "png", "jpg"]` |


The [launch process recipe](/indesign/uxp/resources/recipes/launch-process/) has more details.


#### IpcPermission


Allows communication with other plugins.


**Example**


```json
{
    "enablePluginCommunication": true
}
```


#### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `enablePluginCommunication` * | `boolean` | required | Enables plugin communication. |


The [inter-plugin communication example](/indesign/uxp/plugins/tutorials/inter-plugin-comm/) has more details.


### FeatureFlags


Specifies which experimental features the plugin uses.


**Example**


```json
{
    "enableFillAsCustomAttribute": true,
    "enableSWCSupport": true
}
```


#### Properties


| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `enableFillAsCustomAttribute` | `boolean` | optional | Enables the plugin to use CSS variable in the `fill` attribute on SVG elements. **Example** ` ` With the following CSS: `:root { --iconColor: blue; }` **Default value** `false` |
| `enableSWCSupport` | `boolean` | optional | Enables the plugin to use [Spectrum Web Components](https://developer.adobe.com/indesign/uxp/reference/uxp-api/reference-spectrum/swc/) (requires installing and importing the components separately) **Example** ` Click me ` Note that you will need to manually install the library, import it (for example `import '@spectrum-web-components/button/sp-button.js'`), and bundle the code with a tool like webpack or esbuild so that it's included in your plugin. **Default value** `false` |

