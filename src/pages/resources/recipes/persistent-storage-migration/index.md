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

Persistent storage migration in InDesign involves transferring your plugin data from the most recent previous version of the application to the current version. This migration occurs based on the user's choice to Import Previous Settings and Preferences during the installation process.

# Import Previous Settings and Preferences
When the "Import Previous Settings and Preferences" option is selected in the Creative Cloud Desktop (CCD) app:

**Plugins Installed from CCD or Plugin Market Place (External)**

These plugins will be found in the User Application Support Folder, within the version folder for the respective application, located in the External Folder.


**Plugins Installed from UDT or Developer Plugins (Developer)**

These plugins will be found in the User Application Support Folder, within the version folder for the respective application, located in the Developer Folder.


# Folder Locations
Plugin data folders can be found at the following location:
<InlineAlert variant="info" slots="header, text1, text2"/>

Windows

**External Plugins:**
AppData\Roaming\Adobe\UXP\PluginsStorage\IDSN\\{App Version}\External

**Developer Plugins:**
AppData\Roaming\Adobe\UXP\PluginsStorage\IDSN\\{App Version}\Developer


<InlineAlert variant="info" slots="header, text1, text2"/>

Mac

**External Plugins:**
Library/Application Support/Adobe/UXP/PluginsStorage/IDSN/{App Version}/External

**Developer Plugins:**
Library/Application Support/Adobe/UXP/PluginsStorage/IDSN/{App Version}/Developer


**Specifying plugin data Using Local File Storage**

User can access their plugin data folder with the following API:
```js
fs = require('uxp').storage.localFileSystem
const folder = await fs.getDataFolder();
```