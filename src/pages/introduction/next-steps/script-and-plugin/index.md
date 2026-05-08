---
title: Scripts & Plugins
description: Details about scripts and plugins to compare
keywords:
  - UXP Scripts
  - UXP Plugins
  - Scripts vs plugins
  - Comparison of UXP Scripts & Plugins
  - Difference between Scripts & Plugins
contributors:
  - https://github.com/padmkris123
---

# UXP Scripts and Plugins

UXP offers two ways of extending the application's capabilities. You can choose between a script or a plugin. 

A script is a single JavaScript file, with a special file extension based on the application you are developing it for. For example, in InDesign, these files have a `.idjs` file extension, and it is `.psjs` in Photoshop. On the other hand, a plugin can have multiple JS, HTML or CSS, almost like a web project, but most importantly a manifest that has the required configurations.

The following table will let you compare other differences. 


|  | Scripts | Plugins |
| --- | --- | --- |
| **Compatibility** | InDesign, and InDesign Server (since InDesign v18.0) | InDesign only (since InDesign v18.5) |
| **Files** | A single JavaScript file. | Javascript \\ + HTML and CSS (optional) \\ + manifest.json |
| **Manifest values** | The application has predefined values for the manifest that cannot be altered | Requires you to specifically configure manifest.json and provides flexibility |
| **Extensions** | `.idjs` | `.ccx` for sharing, otherwise a regular folder can be used to load and test with the help of UDT. |
| **User interface** | You can ask users for input only via modal dialogs. | Along with modal dialogs, you can build elaborate UI within persistent panels |
| **Distributable** \\ _(Privately, own distribution channel or via Adobe Marketplace)_ | \\ You can share your `.idjs` file with others who can include it in the scripts panel. \\ However, scripts are **not** distributable via Adobe Marketplace.\\ | Once you create a packaged plugin with a `.ccx` extension, you can share it with others in multiple ways - privately, or via Adobe Marketplace or your own distribution channel.\\ |
| **Setup** | Quickest and easiest to set up. | We offer multiple starter templates for you to get the setup up and running in no time. However, it requires some amount of understanding of the plugin `manifest`. \\ Also, if you wish to use popular frameworks such as React, Vue etc, it is possible only within plugins and may require additional setup steps. |
| **Miscellaneous** | - | You have three flavors within plugins - command, panel and hybrid plugins. \\ A **command plugin**, also referred to as a modal plugin sometimes, is almost like a headless plugin that can occasionally ask for user inputs with the help of modal dialogs (like scripts). It is the best way to convert your existing script into a plugin to make it distributable. \\\\ A **panel plugin** has a persistent UI. \\\\ **Hybrid plugins**, which will be available in the future, can let you use the power of C++ libraries alongside JavaScript. |


Hope the above table helps you in deciding the best route suitable for your use case. Next, we recommend you write your first [script](../../scripts/getting-started/index.md) or [plugin](../../plugins/getting-started/index.md).
