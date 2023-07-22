# UXP Scripts and Plugins

UXP offers two ways of extending the application's capabilities. You can choose between a script or a plugin. 

A script is a single JavaScript file, with a special file extension based on the application you are developing it for. For example, in InDesign, these files have a `.idjs` file extension, and it is `.psjs` in Photoshop. On the other hand, a plugin can have multiple JS, HTML or CSS, almost like a web project, but most importantly a manifest that has the required configurations.

The following table will let you compare other differences. <br></br>

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
                <i>(Privately, own distribution channel or via Adobe Marketplace)</i> 
            </td>
            <td> <br></br>
                You can share your `.idjs` file with others who can include it in the scripts panel. <br></br>
                However, scripts are <b>not</b> distributable via Adobe Marketplace.<br></br></td>
            <td>
                Once you create a packaged plugin with a `.ccx` extension, you can share it with others in multiple ways - privately, or via Adobe Marketplace or your own distribution channel.<br></br>
                </td>
        </tr>
        <tr>
            <td><b>Setup</b></td>
            <td>Quickest and easiest to set up.</td>
            <td>We offer multiple starter templates for you to get the setup up and running in no time. However, it requires some amount of understanding of the plugin `manifest`. <br></br>
            Also, if you wish to use popular frameworks such as React, Vue etc, it is possible only within plugins and may require additional setup steps. </td>
        </tr>
        <tr>
            <td><b>Miscellaneous</b></td>
            <td>-</td>
            <td>
                You have three flavors within plugins - command, panel and hybrid plugins. <br></br>
                A **command plugin** is almost like a headless plugin that can occasionally ask for user inputs with the help of modal dialogs (like scripts). It is the best way to convert your existing script into a plugin to make it distributable. <br></br><br></br>
                A panel plugin has a persistent UI. <br></br><br></br>
                Hybrid plugins, which will be available in the future, can let you use the power of C++ libraries alongside JavaScript.</td>
        </tr>
    </tbody>
</table>

<br></br>

Hope the above table helps you in deciding the best route suitable for your use case. Next, we recommend you to write your first [script](../../scripts/getting-started) or [plugin](../../plugins/getting-started).
