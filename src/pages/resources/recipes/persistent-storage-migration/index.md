---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugins
  - JavaScript
  - ExtendScript
  - SDK
  - C++
  - Scripting
title: Persistent Storage Migration in InDesign UXP
description:
---

# Persistent Storage Migration

Persistent storage migration in InDesign enables migration of user’s plugin data from the existing InDesign version to the latest version of InDesign. This migration considers the user’s selection of "Import Previous Settings and Preferences" during the application installation process.

# Import Previous Settings and Preferences
While installing the new InDesign version, if the "Import Previous Settings and Preferences" option is selected in the Creative Cloud Desktop (CCD) app, the plugin data would be copied to the following folder locations:


**Plugins Installed from CCD or Plugin Market Place (External)**
<InlineAlert variant="info" slots="text1, text2"/>

**Windows:**
AppData\Roaming\Adobe\UXP\PluginsStorage\IDSN\\{App Version}\External

**MAC:**
Library/Application Support/Adobe/UXP/PluginsStorage/IDSN/{App Version}/External

**Plugins Installed from UDT or Developer Plugins (Developer)**

<InlineAlert variant="info" slots="text1, text2"/>

**Windows**
AppData\Roaming\Adobe\UXP\PluginsStorage\IDSN\\{App Version}\Developer

**MAC**
Library/Application Support/Adobe/UXP/PluginsStorage/IDSN/{App Version}/Developer



# Specifying plugin data using Local File Storage
The plugin data folders can be accessed with the following API:
```js
fs = require('uxp').storage.localFileSystem
const folder = await fs.getDataFolder();
```