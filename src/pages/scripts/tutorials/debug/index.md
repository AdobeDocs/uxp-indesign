---
title: UXP scripts in UDT
description: Debug UXP scripts using UDT
keywords:
  - UDT
  - Scripts logs
  - debug scripts
contributors:
  - https://github.com/padmkris123
---

# Debugging a Script
This page goes over how to debug common problems you may run into.

Quick tips for logs:
* The UXP logs and `console.log` from scripts get written to the following locations <br></br>
  For the InDesign versions below 19.2 -  <br></br>
    - macOS: `/Users/<user name>/Library/Caches/UXPLogs/` <br></br>
    - Windows: `C:\Users\<username>\AppData\Local\Temp\UXPLogs` <br></br>

  From InDesign 19.2 version onwards log paths have changed as below - <br></br>
    - Adobe InDesign - <br></br>
      macOS: `/Users/<user name>/Library/Logs/Adobe/Adobe InDesign <InDesign version year>/` <br></br>
      Windows: `C:\Users\<username>\AppData\Roaming\Adobe\InDesign\Logs` <br></br>
    - Adobe InDesign Server - <br></br>
      macOS: `/Users/<user name>/Library/Logs/Adobe/Adobe InDesign Server <InDesign version year>/` <br></br>
      Windows: `C:\Users\<username>\AppData\Roaming\Adobe\InDesign Server\Logs` <br></br>

  If you find multiple files in the location, pick the one with the latest timestamp.
* All the sample scripts have a try/catch block. Any exceptions raised from the InDesign side will be caught and dumped to the console or displayed on the dialog box.
* Interpreter parsing errors go directly to the UXP logs.

## Debugging Script files using UDT

Script files are executed in the same context as UXP plugins. Using [UXP Developer Tool](https://creativecloud.adobe.com/apps/download/uxp-developer-tools) (UDT) v1.7.0, you can step through and debug a script.

You can debug script files in UDT by clicking on "Connected Apps", choosing InDesign, and then adding your script from there:

![step 1 of loading an InDesign script into UDT](step1.png)

![step 2 of loading an InDesign script into UDT](step2.png)

Once you've loaded a script in, you can debug with a breakpoint activated. From here you set breakpoints or Step Into the script files. 