# Debugging a Script
This page goes over how to (TODO: add info)

* The UXP logs and console.log from script gets written to path `/Users/<user name>/Library/Caches/UXPLogs/` in Mac and `C:\Users\<username>\AppData\Local\Temp\UXPLogs` in Windows. If you find multiple files in the location, pick the one with the latest timestamp.
* All the sample scripts have a try /catch block. Any exceptions raised from the InDesign side can be caught and dumped to the console or displayed on the dialog box.
* Interpreter parsing errors go directly to the UXP logs.
* User can print any message using ‘console.log(formatted message). Messages will appear in a log file.