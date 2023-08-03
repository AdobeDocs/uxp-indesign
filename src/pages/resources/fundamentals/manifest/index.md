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

This tutorial's intention is only to make you aware of how scripts and plugins are influenced by manifest so that you can interpret the samples and recipes easily. 

In the case of plugins, it is mandatory to set up these configurations with the help of a `manifest.json` file.

In scripts, however, these configurations are fixed and invisible. Almost as if the manifest is non-existent. You can not and do not need to manage it explicitly. 

## Permission module for Scripts

One of the key modules in the manifest that drives the access and working of many APIs is the 'permission' module.  We elaborated on the meaning of each permission and the various options in great detail in the [plugin manifest section](../../../plugins/concepts/manifest/#permissionsdefinition). And for the sake of completeness, the table below summarizes the permissions implicitly defined for **scripts**.

<table columnWidths="20,20,60">
    <thead>
        <tr>
            <th>Permission module</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><inlineCode>clipboard</inlineCode></td>
            <td><inlineCode>"readAndWrite"</inlineCode></td>
            <td>Allows you to read from and write to the clipboard.</td>
        </tr>
        <tr>
            <td><inlineCode>localFileSystem</inlineCode></td>
            <td><inlineCode>"fullAccess"</inlineCode></td>
            <td>Enables full file system access.</td>
        </tr>
        <tr>
            <td><inlineCode>network</inlineCode></td>
            <td><inlineCode>"all"</inlineCode>d</td>
            <td>Allows access to network</td>
        </tr>
        <tr>
            <td><b>webview</b></td>
            <td><i>any</i></td>
            <td>Access to any domain</td>
        </tr>
        <tr>
            <td><inlineCode>launchProcess</inlineCode></td>
            <td><i>any</i></td>
            <td>Full access to launch applications and files</td>
        </tr>
        <tr>
            <td><inlineCode>allowCodeGenerationFromStrings</inlineCode></td>
            <td>false</td>
            <td>Not applicable for scripts.</td>
        </tr>
        <tr>
            <td><b>ipc</b></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

**Note:** The permissions for scripts may appear to be more lenient compared to plugins, but plugins have their advantage. The details in the [introduction to scrips and plugins](../../../introduction/next-steps/script-and-plugin/) can help you determine a suitable match for your use case.
