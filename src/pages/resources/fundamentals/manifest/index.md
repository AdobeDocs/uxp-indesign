---
title: Manifest for scripts and plugins
description: Explains how permission module works for scripts and plugins
keywords:
  - manifest for scripts
  - manifest concept
contributors:
  - https://github.com/padmkris123
---

# UXP manifest

Manifest is a significant underlying concept in UXP development. Simply put, it is a set of configurations to make your script or plugin work correctly. 

This tutorial's intention is only to make you aware of how scripts and plugins are influenced by manifest under the hood so that you can interpret the samples and recipes easily. 

In the case of plugins, it is mandatory to set up these configurations with the help of a `manifest.json` file.

In scripts, however, these configurations are fixed and invisible. Almost as if the manifest is non-existent. You can not and do not need to manage it explicitly. 

## Permission module for Scripts

One of the key modules in the manifest that drives the access and working of many APIs is the 'permission' module.  We elaborated on the meaning of each permission and the various options in great detail in the [plugin manifest section](../../../plugins/concepts/manifest/index.md#permissionsdefinition). And for the sake of completeness, the table below summarizes the permissions implicitly defined for **scripts**.


| Permission module | Value | Description |
| --- | --- | --- |
| `clipboard` | `"readAndWrite"` | Allows you to read from and write to the clipboard. |
| `localFileSystem` | `"fullAccess"` | Enables full file system access. |
| `network` | `"all"` | Allows access to network |
| **webview** | _any_ | Access to any domain |
| `launchProcess` | _any_ | Full access to launch applications and files |
| `allowCodeGenerationFromStrings` | false | Not applicable for scripts. |


**Note:** The permissions for scripts may appear to be more lenient compared to plugins, but plugins have their advantage. The details in the [introduction to scrips and plugins](../../../introduction/next-steps/script-and-plugin/index.md) can help you determine a suitable match for your use case.
