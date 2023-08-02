import './table-styles.css';

# UXP Manifest
The manifest is a JSON file that is located at the root of the plugin bundle. It is named `manifest.json` and is
required for all plugins.

## Overview

Each UXP plugin has one `manifest.json` file that describes the plugin. It contains metadata such as the plugin's name,
version, icons, and entry points.

The manifest file also contains the permissions that the plugin requires. Most importantly, it
contains your plugin ID which is used to identify your plugin. (Valid plugin IDs are required for distributing in Adobe's Marketplace, read more [in the docmentation](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/).)

Since UXP plugins can be run in a number of different hosts, the manifest also contains a `host` field that specifies
which host the plugin is for. This is used to identify the plugin in the manifest and in the plugin bundle.

## Reference

### Manifest

<p>The object at the root of the manifest file.</p>

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

<h4>Properties</h4>
<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>manifestVersion</inlineCode> *</td>
        <td><inlineCode>"5"</inlineCode></td>
        <td>required</td>
        <td>
            <p>The manifestVersion indicates the version of the manifest schema. This document describes version 5 of the manifest schema.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>id</inlineCode> *</td>
        <td><inlineCode>string</inlineCode></td>
        <td>required</td>
        <td>
            <p>The id uniquely identifies a plugin and is used to disambiguate plugin contexts, storage, errors, etc. For plugins distributed through the plugin marketplace, the ID has to match the ID in <a href="https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/">the Developer Distribution portal</a>.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>name</inlineCode> *</td>
        <td><inlineCode>string | Localized<wbr />String</inlineCode></td>
        <td>required</td>
        <td>
            <p>The name visually identifies the plugin in the user interface. It is usually used in a plugin menu listing or launcher for top-level action items. The name can be a string, a key from the StringsDefinition object, or a localized string.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>strings</inlineCode></td>
        <td><inlineCode>StringsDefinition</inlineCode></td>
        <td>optional</td>
        <td>
            <p>A set of strings used to localize the plugin name and other user-facing strings. It can also be a path to a JSON file containing the StringsDefinition object.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>{'{'}{'}'}</inlineCode> (no strings)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>version</inlineCode> *</td>
        <td><inlineCode>string</inlineCode></td>
        <td>required</td>
        <td>
            <p>The version indicates the plugin's version. The string has a format of major.minor.patch.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>main</inlineCode></td>
        <td><inlineCode>string</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Indicates the primary JavaScript or HTML file, relative to the plugin's installation directory. Supports HTML and JS files, such as <inlineCode>index.html</inlineCode> and <inlineCode>index.js</inlineCode>. If not specified (for deprecations), <inlineCode>main.js</inlineCode> is used.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>"main.js"</inlineCode></p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>icons</inlineCode></td>
        <td><inlineCode>IconDefinition[]</inlineCode></td>
        <td>optional</td>
        <td>
            <p>An array of icons representing the overall plugin or panel icon. The host application uses these icons to present the plugin to the user. If the icons array is missing, a default icon will be used.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>[]</inlineCode> (no icons)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>host</inlineCode> *</td>
        <td><inlineCode>HostDefinition</inlineCode></td>
        <td>required</td>
        <td>
            <p>The host object indicates the plugin's compatibility with the host. Incompatible plugins will:</p>
            <ul>
                <li>fail to install if attempted in the given host</li>
                <li>be invisible in the in-app plugin marketplace for the given host</li>
                <li>be unavailable for update if the update is no longer compatible.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><inlineCode>entrypoints</inlineCode> *</td>
        <td><inlineCode>EntrypointDefinition[]</inlineCode></td>
        <td>required</td>
        <td>
            <p>The entrypoints array defines the entrypoints that the plugin provides.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>requiredPermissions</inlineCode></td>
        <td><inlineCode>PermissionsDefinition</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Indicates the various permissions this plugin requires. These permissions are required before accessing certain API surfaces. Without these permissions in the manifest, API access may fail or throw an error. Some permissions require user consent.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>{'{'}{'}'}</inlineCode> (no permissions)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>addon</inlineCode></td>
        <td><inlineCode>object</inlineCode></td>
        <td>optional</td>
        <td>
            <p> <i>Not supported in InDesign v18.5</i> <br></br>
            Addon definitions for hybrid plugins. A UXP Hybrid plugin is a UXP plugin that can access the power of C++ native libraries.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>{'{'}{'}'}</inlineCode> (no addons)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>featureFlags</inlineCode></td>
        <td><inlineCode>FeatureFlags</inlineCode></td>
        <td>optional</td>
        <td>
            <p>
                A set of feature flags that can be used to enable or disable certain features of the plugin. These flags are used to gate features that are not yet ready for general availability. 
            </p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>{'{'}{'}'}</inlineCode> (no additional feature flags)</p>
        </td>
    </tr>
    </tbody>
</table>

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

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>default</inlineCode> *</td>
        <td><inlineCode>string</inlineCode></td>
        <td>required</td>
        <td>
            <p>The default string used when no translation is available for the current locale.</p>
        </td>
    </tr>
    </tbody>
</table>

### IconDefinition

<p>Represents an icon used by the plugin or specific entry point. The icon may be used in the plugin list, toolbar, or other places.</p>
<h4>Properties</h4>
<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>width</inlineCode> *</td>
        <td><inlineCode>number</inlineCode></td>
        <td>required</td>
        <td>
            <p>The width of the icon in pixels.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>height</inlineCode> *</td>
        <td><inlineCode>number</inlineCode></td>
        <td>required</td>
        <td>
            <p>The height of the icon in pixels.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>path</inlineCode> *</td>
        <td><inlineCode>string</inlineCode></td>
        <td>required</td>
        <td>
            <p>The path to the icon, relative to the plugin's installation directory. Supports PNG (<inlineCode>.png</inlineCode>), JPG (<inlineCode>.jpg</inlineCode> or <inlineCode>.jpeg</inlineCode>), and SVG (<inlineCode>.svg</inlineCode>) files.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>scale</inlineCode></td>
        <td><inlineCode>number[]</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Specifies the scaling factors that the icon supports.</p>
            <p><strong>Example</strong></p>
<code class="language-json">{`{
    "path": "icon.png",
    "width": 24,
    "height": 24,
    "scale": [1, 2, 2.5]
}`}</code>
            <p>Results in the following icon files being used:</p>
            <ul>
                <li><inlineCode>icon.png</inlineCode> or <inlineCode>icon@1x.png</inlineCode> (24x24px) for 100% scaling</li>
                <li><inlineCode>icon@2x.png</inlineCode> (48x48px) for 200% scaling</li>
                <li><inlineCode>icon@2.5x.png</inlineCode> (60x60px) for 250% scaling</li>
            </ul>
            <p><strong>Default value</strong></p>
            <p><inlineCode>[1]</inlineCode> (only supports 100% scaling)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>theme</inlineCode></td>
        <td><inlineCode>("all" | "lightest" | "light" | "medium" | "dark" | "darkest")[]</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Specifies the themes that the icon supports.</p>
            <p><strong>Example</strong></p>
            <code class="language-json">{`{
    "path": "icon.png",
    "width": 24,
    "height": 24,
    "theme": ["lightest", "light"]
}
`}</code>
            <p><strong>Default value</strong></p>
            <p><inlineCode>["all"]</inlineCode> (supports all themes)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>species</inlineCode></td>
        <td><inlineCode>("generic" | "toolbar" | "pluginList")[]</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Indicates the suitable use of this icon. The default species is generic, meaning that the icon is suitable for display anywhere.</p>
            <p>Options:</p>
            <ul>
                <li>generic: suitable for display anywhere</li>
                <li>toolbar: suitable for display in a toolbar. Icon sizes are 23x23px for 100% scaling and 46x46px for 200% scaling.</li>
                <li>pluginList: suitable for display in a plugin list. Icon sizes are 24x24px for 100% scaling and 48x48px for 200% scaling.</li>
            </ul>
            <p><strong>Default value</strong></p>
            <p><inlineCode>["generic"]</inlineCode> (suitable for display anywhere)</p>
        </td>
    </tr>
    </tbody>
</table>

### EntrypointDefinition

<p>Represents an entrypoint provided by the plugin, which can be invoked by the user.</p>
<p>An entrypoint consists of an ID and a label at minimum.</p>
<p><strong>Example</strong></p>
<code class="language-json">{`{
    "id": "myPlugin.myEntrypoint",
    "label": "My Entrypoint"
}`}</code>
<h4>Properties</h4>
<table >
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>type</inlineCode> *</td>
        <td><inlineCode>"command" | "panel"</inlineCode></td>
        <td>required</td>
        <td>
            <p>The type of entrypoint. Currently, only <inlineCode>command</inlineCode> and <inlineCode>panel</inlineCode> are supported.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>id</inlineCode> *</td>
        <td><inlineCode>string</inlineCode></td>
        <td>required</td>
        <td>
            <p>The ID of the entrypoint. This ID must be unique within the plugin. It is used to identify the code that implements the entrypoint.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>label</inlineCode> *</td>
        <td><inlineCode>string | Localized<wbr />String</inlineCode></td>
        <td>required</td>
        <td>
            <p>The label of the entrypoint. This label is used to display the entrypoint to the user, such as in the plugin menu.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>description</inlineCode></td>
        <td><inlineCode>string | Localized<wbr />String</inlineCode></td>
        <td>optional</td>
        <td>
            <p>A description of the entrypoint. This description is used in tooltips and other places where a longer description is appropriate, depending on the host app.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>undefined</inlineCode> (use plugin name)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>shortcut</inlineCode></td>
        <td><inlineCode>{'{'} mac: string, win: string {'}'}</inlineCode></td>
        <td>optional</td>
        <td>
            <p>A keyboard shortcut that can be used to invoke the entrypoint.</p>
            <p>Keyboard shortcuts are specified separately for Windows and macOS platforms. If the shortcut is not available in the host application, it will be ignored.</p>
            <p><strong>Remarks</strong></p>
            <p>Currently, keyboard shortcuts are supported in Adobe XD only.</p>
            <p><strong>Example</strong></p>
            <code class="language-json">{`"shortcut": {
    "mac": "Cmd+Shift+P", 
    "win": "Ctrl+Shift+P" 
}
`}</code>
            <p>Keyboard shortcuts are defined separately for each platform. Each definition is a string that follows this syntax:</p>
            <ul>
                <li>One or more modifier keys, in any order, each one followed by "+"</li>
                <li>Mac: modifiers may be Cmd, Ctrl, Opt/Alt, or Shift. The shortcut must contain at least one of Cmd or Ctrl.</li>
                <li>Win: modifiers may be Ctrl, Alt, or Shift. The shortcut must contain Ctrl.</li>
                <li>A letter or number key.</li>
            </ul>
            <p>Letters are case-insensitive (e.g., "Cmd+P" and "Cmd+p" mean the same thing and neither requires pressing Shift). Other keys (including punctuation, arrow keys, or F1-F12) are currently not supported.</p>
            <p><strong>Info</strong></p>
            <p>If your shortcut collides with a built-in XD command or another plugin's shortcut, your shortcut will be ignored, and you"ll see a warning printed to the developer console.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>undefined</inlineCode> (no shortcut)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>icon</inlineCode></td>
        <td><inlineCode>Icon<wbr />Definition[]</inlineCode></td>
        <td>optional</td>
        <td>
            <p>An icon specific to the entrypoint. If specified, this icon overrides the plugin icon in places where the entrypoint is specifically displayed.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>[]</inlineCode> (plugin icon)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>minimumSize</inlineCode></td>
        <td><inlineCode>{'{'} width: number, height: number {'}'}</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Indicates the desired minimum size of the view. The host may not be able to guarantee the minimum size. The size is defined by width and height in pixels. If no minimum size is specified, the host will use its own default minimum size.</p>
            <p><strong>Default value</strong></p>
            <p>(host-specific default)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>maximumSize</inlineCode></td>
        <td><inlineCode>{'{'} width: number, height: number {'}'}</inlineCode></td>
        <td>optional</td>
        <td>
            <p>The maximum desired size of the view. The host may not be able to guarantee the maximum size. If the view is hosted in a dialog, resizing can be prevented by setting minimumSize = maximumSize.</p>
            <p><strong>Default value</strong></p>
            <p>(host-specific default)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>preferred<wbr />DockedSize</inlineCode></td>
        <td><inlineCode>{'{'} width: number, height: number {'}'}</inlineCode></td>
        <td>optional</td>
        <td>
            <p>The preferred size of the view when docked, if it can be docked, or for modal dialogs that have no reference_node_id. The host may not be able to guarantee this size.</p>
            <p><strong>Default value</strong></p>
            <p>(host-specific default)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>preferred<wbr />FloatingSize</inlineCode></td>
        <td><inlineCode>{'{'} width: number, height: number {'}'}</inlineCode></td>
        <td>optional</td>
        <td>
            <p>The preferred size of the panel when floating. The host may not be able to guarantee this size. See minimumSize for the format.</p>
            <p><strong>Default value</strong></p>
            <p>(host-specific default)</p>
        </td>
    </tr>
    </tbody>
</table>

### HostDefinition

<p>UXP supports a number of different host applications. The host definition specifies which host app the plugin supports.</p>
<h4>Properties</h4>
<table >
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>app</inlineCode> *</td>
        <td><inlineCode>"PS" <wbr />| "ID" <wbr />| "XD"</inlineCode></td>
        <td>required</td>
        <td>
            <p>The host app that the plugin supports.</p>
            <p>Possible values:</p>
            <ul>
                <li><inlineCode>PS</inlineCode>: Adobe Photoshop</li>
                <li><inlineCode>ID</inlineCode>: Adobe InDesign</li>
                <li><inlineCode>XD</inlineCode>: Adobe XD</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><inlineCode>minVersion</inlineCode> *</td>
        <td><inlineCode>string</inlineCode></td>
        <td>required</td>
        <td>
            <p>The minimum version of the host app that the plugin supports. The version string follows the format of <inlineCode>x.y.z</inlineCode>.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>maxVersion</inlineCode></td>
        <td><inlineCode>string</inlineCode></td>
        <td>optional</td>
        <td>
            <p>The maximum version of the host app that the plugin supports.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>undefined</inlineCode> (the latest version of the host app)</p>
        </td>
    </tr>
    </tbody>
</table>

### PermissionsDefinition

<p>To ensure that plugins are secure, UXP requires that plugins declare the permissions they need to function.</p>
<h4>Properties</h4>
<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>clipboard</inlineCode></td>
        <td><inlineCode>"read" | "readAndWrite"</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Enables the plugin to read and write to the clipboard.</p>
            <p>Possible values:</p>
            <ul>
                <li><inlineCode>read</inlineCode>: enables the plugin to read from the clipboard.</li>
                <li><inlineCode>readAndWrite</inlineCode>: enables the plugin to read from and write to the clipboard.</li>
            </ul>
            <p><strong>Default value</strong></p>
            <p><inlineCode>undefined</inlineCode> (no clipboard access)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>localFileSystem</inlineCode></td>
        <td><inlineCode>"plugin" | "request" | "fullAccess"</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Enables the plugin to access the file system.</p>
            <p>Possible values:</p>
            <ul>
                <li><inlineCode>plugin</inlineCode>: enables the plugin to access the file system in the plugin folder.</li>
                <li><inlineCode>request</inlineCode>: enables the plugin to request access to the file system (user consent).</li>
                <li><inlineCode>fullAccess</inlineCode>: enables the plugin to access the file system without requesting access.</li>
            </ul>
            <p><strong>Default value</strong></p>
            <p><inlineCode>"plugin"</inlineCode></p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>network</inlineCode></td>
        <td><inlineCode>NetworkPermission</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Enables the plugin to access the network.</p>
            <p>For example, to make HTTP requests (XHR, fetch, etc.), load images (<inlineCode>&lt;img src="" /&gt;</inlineCode>), etc.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>undefined</inlineCode> (no network access)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>webview</inlineCode></td>
        <td><inlineCode>WebviewPermission</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Enables the plugin to use webviews in its UI to display web content or complex UI.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>undefined</inlineCode> (no webview usage)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>launchProcess</inlineCode></td>
        <td><inlineCode>LaunchProcessPermission</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Enables the plugin to launch processes using APIs like <inlineCode>require("uxp").shell.openPath()</inlineCode> or <inlineCode>shell.openExternal()</inlineCode>.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>undefined</inlineCode> (no process launching)</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>allowCodeGenerationFromStrings</inlineCode></td>
        <td><inlineCode>boolean</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Allows you to declare inline event handlers in HTML elements.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>false</inlineCode></p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>ipc</inlineCode></td>
        <td><inlineCode>IpcPermission</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Enables the plugin to communicate with other plugins.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>undefined</inlineCode></p>
        </td>
    </tr>
    </tbody>
</table>

#### NetworkPermission

<p>Specifies the domains that the plugin can access in network requests.</p>
<p><strong>Example</strong></p>
<code class="language-json">{`{
    "domains": [
        "https://example.com",
        "https://*.adobe.com/",
        "wss://*.myplugin.com"
    ]
}
`}</code>
<p>Then, in your plugin code, you can make network requests like this:</p>
<code class="language-javascript">{`const response = await fetch("https://example.com");
`}</code>
<p>Or load images like this:</p>
<code class="language-html">&lt;img src="https://example.com/image.png" /&gt;
</code>
<p>You can also allow access to all domains by setting <inlineCode>domains</inlineCode> to <inlineCode>"all"</inlineCode>.</p>
<code class="language-json">{`{
    "domains": "all"
}
`}</code>
<h4>Properties</h4>
<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>domains</inlineCode> *</td>
        <td><inlineCode>string[] | "all"</inlineCode></td>
        <td>required</td>
        <td>
            <p>The domains that the plugin can access. Can be a list of domains, or the string "all" to allow access to all domains.</p>
        </td>
    </tr>
    </tbody>
</table>

#### WebViewPermission

[//]: # (TODO: Add link to internal documentation)

<p>Enables the plugin to use webviews in its UI to display web content or complex UI.</p>
<p><strong>Example</strong></p>
<code class="language-json">{`{
    "allow": "yes",
    "domains": ["https://example.com"],
    "enableMessageBridge": "localAndRemote"
}
`}</code>
<p>Then, in your plugin code, you can use a webview like this:</p>
<code class="language-html">{`<webview src="https://example.com" />
`}</code>
<p>To communicate between the webview and the plugin, you can use the message API:</p>
<code class="language-javascript">{`// In the plugin:
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
`}</code>
<h4>Properties</h4>
<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>allow</inlineCode> *</td>
        <td><inlineCode>"yes"</inlineCode></td>
        <td>required</td>
        <td>
            <p>Must be set to "yes" to enable webviews.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>domains</inlineCode> *</td>
        <td><inlineCode>string[] | "all"</inlineCode></td>
        <td>required</td>
        <td>
            <p>The domains that the plugin can access. Can be a list of domains, or the string "all" to allow access to all domains.</p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>enableMessageBridge</inlineCode></td>
        <td><inlineCode>"no" | "localAndRemote"</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Specifies whether the plugin can communicate with the webview using the message API.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>"no"</inlineCode></p>
        </td>
    </tr>
    </tbody>
</table>

#### LaunchProcessPermission

[//]: # (TODO: Add link to recipe later https://github.com/AdobeDocs/uxp-indesign/blob/6d1ad4ff1c2e096d01edaf91809cd8b4c8f4cad7/src/pages/resources/recipes/launch-process.md)

<p>Specifies the schemas and extensions that the plugin can launch.</p>
<p>For example, if the plugin can launch a web browser, it should specify the <inlineCode>http</inlineCode> and <inlineCode>https</inlineCode> schemas.</p>
<p><strong>Example</strong></p>
<code class="language-json">{`{
    "schemas": ["http", "https"],
    "extensions": []
}
`}</code>
<h4>Properties</h4>
<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>schemas</inlineCode> *</td>
        <td><inlineCode>string[]</inlineCode></td>
        <td>required</td>
        <td>
            <p>A set of schemas that the plugin can launch.</p>
            <p><strong>Example</strong></p>
            <p><inlineCode>["http", "https", "mailto"]</inlineCode></p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>extensions</inlineCode> *</td>
        <td><inlineCode>string[]</inlineCode></td>
        <td>required</td>
        <td>
            <p>A set of extensions that the plugin can launch. Only relevant for local files (using the <inlineCode>file://</inlineCode> schema)</p>
            <p><strong>Example</strong></p>
            <p><inlineCode>["pdf", "png", "jpg"]</inlineCode></p>
        </td>
    </tr>
    </tbody>
</table>

#### IpcPermission

[//]: # (TODO: Add link to recipe later https://github.com/AdobeDocs/uxp-indesign/blob/6d1ad4ff1c2e096d01edaf91809cd8b4c8f4cad7/src/pages/resources/recipes/ipc.md)

<p>Allows communication with other plugin.</p>
<p><strong>Example</strong></p>
<code class="language-json">{`{
    "enablePluginCommunication": true
}
`}</code>

<h4>Properties</h4>
<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>enablePluginCommunication</inlineCode> *</td>
        <td><inlineCode>boolean</inlineCode></td>
        <td>required</td>
        <td>
            <p>Enables plugin communication.</p>
        </td>
    </tr>
    </tbody>
</table>

### FeatureFlags

<p>Specifies which experimental features the plugin uses.</p>

<p><strong>Example</strong></p>
<code class="language-json">{`{
    "enableFillAsCustomAttribute": true,
    "enableSWCSupport": true
}`}</code>

<h4>Properties</h4>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><inlineCode>enableFillAs<wbr />CustomAttribute</inlineCode></td>
        <td><inlineCode>boolean</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Enables the plugin to use CSS variable in the <inlineCode>fill</inlineCode> attribute on SVG elements.</p>
            <p><strong>Example</strong></p>
            <code class="language-html">{`<svg width="100" height="100">
    <rect width="100" 
        height="100" 
        fill="var(--iconColor, red)" 
    />
</svg>`}</code>
            <p>With the following CSS:</p>
            <code class="language-css">{`:root {
    --iconColor: blue;
}`}</code>
            <p><strong>Default value</strong></p>
            <p><inlineCode>false</inlineCode></p>
        </td>
    </tr>
    <tr>
        <td><inlineCode>enableSWCSupport</inlineCode></td>
        <td><inlineCode>boolean</inlineCode></td>
        <td>optional</td>
        <td>
            <p>Enables the plugin to use Spectrum Web Components (requires installing and importing the components separately)</p>
            <p><strong>Example</strong></p>
            <code class="language-html">{`<sp-button variant="primary">
    Click me
</sp-button>`}</code>
            <p>Note that you will need to manually install the library, import it (for example <inlineCode>import '@spectrum-web-components/<wbr />button/sp-button.js'</inlineCode>), and bundle the code with a tool like webpack or esbuild so that it's included in your plugin.</p>
            <p><strong>Default value</strong></p>
            <p><inlineCode>false</inlineCode></p>
        </td>
    </tr>
    </tbody>
</table>
