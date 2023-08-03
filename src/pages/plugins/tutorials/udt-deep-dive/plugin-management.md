---
title: Plugin Management
description: Information on how to manage your list of plugins in the UXP Developer Tool.
keywords:
  - Create plugins
  - Remove plugins
  - Load plugin
  - Add plugin into UDT
contributors:
  - https://github.com/padmkris123
---

# Plugin management

The UXP Developer Tool allows you to create plugins from templates and add existing ones to your developer workspace.

You can add as many plugins as you want in the UXP Developer Tool. You can either create the plugin folder structure and files from scratch and click the `Add Plugin` button in the Tool, or you can click the `Create Plugin` button to have it created for you, wizard-style. 

## Creating a new plugin

As demonstrated while writing your first plugin, "Create Plugin" lets you select a template and create a new plugin instantly. Just fill out the name and select a template. It's that simple!

## Adding an existing plugin

You're not limited to creating new plugins from the Developer Tool – you can add plugins that you've already started as well.

* Click **Add Plugin**
* A file picker will appear. This picker expects you to pick the `manifest.json` in your plugin folder.
* Once you close the picker, the plugin will be added to your workspace.

## Removing a plugin

If you're building a lot of plugins, you may find that the workspace may be getting cluttered. You can remove a plugin from the workspace by checking the plugin's associated checkbox and clicking **Remove Selected** (in the upper-right corner). 

<InlineAlert variant="info" slots="text"/>

Removing a plugin from the Developer Tool's workspace does **not** remove the plugin from your storage. You can always add the plugin back later.


Once you have at least one plugin added to your workspace, let's look at the actions you can perform on them in the [next section](./plugin-workflows).

 