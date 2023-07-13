# UXP Scripts and Plugins

UXP offers two ways of extending the application's capabilities. You can choose between a script or a plugin. 

A script is a single JavaScript file, with a special file extension based on the application you are developing it for. For example, in InDesign, these files have a `.idjs` file extension, and it is `.psjs` in Photoshop. On the other hand, a plugin can have multiple JS, HTML or CSS, almost like a web project, but most importantly a manifest that has the required configurations. During development, these files can be within any regular folder. But if you decide to share your plugin with others, you can do so by creating a `ccx` package.

The APIs you will need to write your logic for both are almost identical. The following table will let you compare other differences. <br></br>

<table columnWidths="20,40,40">
    <thead>
        <tr>
            <th></th>
            <th>Scripts</th>
            <th>Plugins</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Compatibility</b></td>
            <td>InDesign, and InDesign Server (since InDesign v18.0)</td>
            <td>InDesign only (since InDesign v18.5)</td>
        </tr>
        <tr>
            <td><b>Files</b></td>
            <td>A single JavaScript file.</td>
            <td>
                Javascript <br></br>
                + HTML and CSS (optional) <br></br>
                + manifest.json</td>
        </tr>
        <tr>
            <td><b>Manifest values</b></td>
            <td>The application has predefined values for the manifest that cannot be altered</td>
            <td>Requires you to specifically configure manifest.json and provides flexibility</td>
        </tr>
        <tr>
            <td><b>Extensions</b></td>
            <td>`.idjs`</td>
            <td>`.ccx` for sharing, otherwise a regular folder can be used to load and test with the help of UDT.</td>
        </tr>
        <tr>
            <td><b>User interface</b></td>
            <td>You can ask users for input only via modal dialogs.</td>
            <td>Along with modal dialogs, you can build elaborate UI within persistent panels</td>
        </tr>
        <tr>
            <td><b>Distributable</b> <br></br>
                <i>Private</i> <br></br>
                <i> Adobe Marketplace</i></td>
            <td> <br></br>
                Yes. You can share your `.idjs` file with others who can include it in the scripts panel. <br></br>
                No. Not distributable via Adobe Marketplace.<br></br></td>
            <td>
                Once you create a packaged plugin with a `.ccx` extension, you can share it with others. <br></br>
                Yes. <br></br>
                Yes. <br></br></td>
        </tr>
        <tr>
            <td><b>Setup</b></td>
            <td>Quickest and easiest to set up.</td>
            <td>Although we offer starter templates for you to get the setup up and running in no time, it requires some amount of understanding for manifest.json. You might also want to use popular frameworks such as React, Vue etc which is possible only within plugins and requires additional setup steps. </td>
        </tr>
        <tr>
            <td><b>Misc</b></td>
            <td></td>
            <td>
                You have three flavors within plugins - Command, panel and Hybrid plugins. <br></br>
                A command plugin is almost like a headless plugin that can occasionally ask for user inputs with the help of modal dialogs (like scripts). It is the best way to convert your existing script into a plugin to host it in the Adobe Marketplace. <br></br>
                A panel plugin has a persistent UI. <br></br>
                Hybrid plugins, which will be available in the future, can let you use the power of C++ libraries alongside JavaScript.</td>
        </tr>
    </tbody>
</table>

<br></br>

Hope the above table helps you in deciding the best route suiting your use case. Once you have decided, we recommend you start by writing your first [script](../../scripts/getting-started) or [plugin](../../plugins/getting-started).
