# File operations

To perform any file operations including read, write, create, and delete, UXP provides a couple of options. But before we look at the APIs, let's get acquainted with a few concepts.

## Concepts

### Sandbox and other locations
UXP, by default, only allows access to certain locations in the user's file system. These locations are referred to as the sandbox. 

In the case of UXP plugins, a sandbox is typically the plugin's folder, plus a temporary and data folder. The plugin's location is read-only. Whereas, the temporary and data folders are provided to you to store transitory information. Note that the data stored here can get accidentally erased and should not be considered permanent.

// TODO
Q: What about sandbox locations in scripts?

However, we understand that there are circumstances when you would like to have access to other locations as well. Accessing such locations, too, is possible in UXP but you will need to seek permission first.


### Manifest permission
Since UXP v6.5, we expect scripts and plugins to seek permission for certain modules. For file system access you require permission for the `localFileSystem` module.

In the case of UXP scripts, these permissions are fixed and you cannot alter them. //TODO Add link to details. If you find these permissions to be unfit for your needs, you can write a plugin that offers you more flexibility.

In the case of UXP plugins, you can specify the permission in the plugin's manifest. For example,
```
/* manifest.json */
{  
    "requiredPermissions": {
        "localFileSystem": "plugin"
    }
}
```
Allowed values for `localFileSystem` are:
- `plugin`: Default value. Provides access to the sandbox.
- `request`: Let's you request the user to select a folder location of their choice.
- `fullAccess`: Provides full access to the user file system
//TODO
Q: Does fullAccess file system include system folders?

Protip: Make sure you pick the most accurate permission for your use case because in the future we may ask users to provide their consent based on it. You may find 'fullAccess' to be the least restrictive and hence the safest to pick, but a user may not be comfortable giving full access to their system unless it's absolutely necessary and might deny the installation of your plugin. 

### Schemas
UXP provides a shorthand representation of these locations via schemas.

For sandbox, you can use `plugin:/`, `plugin-data:/`and `plugin-temp:/`. // TODO Q: Do these work in scripts?
And, for other locations, use `file:/`.

```html
<img src="plugin:/sample.png">
<img src="file:/Users/user/Downloads/sample.png">
```

## APIs
You have two options to access the file system - LocalFileSytem and FS module.
Q: How should a developer choose between the FS module and localfilesystem? What special use cases are supported by them?

### LocalFileSytem API
Available via `require('uxp').storage.localFileSystem` which returns `FileSystemProvider`.

**Nomenclature**
A file system is a conglomerate of files and folders. You can use the `File` and `Folder` classes to refer to them. However, these classes have a base class called `Entry`. The nomenclature of some of the APIs use entry in them typically when the output type can be either of the two - `File` or `Folder` and be determined only at runtime. Therefore, its a good practice to check using `isfile` or `isFolder` before using specific APIs.

```js
// TODO Example to create new file and folder
const {localFileSystem, types} = require('uxp').storage;
try {
    const newFolderEntry = await localFileSystem.createEntryWithUrl("plugin-temp:/temp", { type: types.folder });
    if (newFolderEntry.isFolder) {
        const newFile = await newFolderEntry.createFile("temp.txt", {overwrite: true});
        await newFile.write("Sample file created.");
    }
} catch (e) {
    console.error(e);
}
```

Now let's take a look at some examples to access system locations based on permission settings.

**Accessing sandbox**
```json
/* manifest.json */
{
    "requiredPermissions": {
        "localFileSystem": "plugin"
    }
}
```
```js
const fsProvider = require('uxp').storage.localFileSystem;
async function accessLocalFileSystem() {
    if (fsProvider.isFileSystemProvider) {
        try {
            const pluginFolder = await fsProvider.getEntryWithUrl("plugin-data:/");
            console.log(`File path: ${pluginFolder.nativePath}`);
        } catch (e) {
            console.error(e);
        }
    }
}
```

**Accessing other locations**
```json
/* manifest.json */
{
    "requiredPermissions": {
        "localFileSystem": "fullAccess"
    }
}
```
```js
const fsProvider = require('uxp').storage.localFileSystem;
async function accessLocalFileSystem() {
    if (fsProvider.isFileSystemProvider) {
        try {
            const pluginFolder = await fsProvider.getEntryWithUrl("file:/Users/user/Documents");
            console.log(`File path: ${pluginFolder.nativePath}`);
        } catch (e) {
            console.error(e);
        }
    }
}
```

<br></br>
These APIs are particularly handy when you want to request the user to select a folder/file location of their choice. For example, the below code snippet using `getFileForOpening` and `getFileForSaving` methods presents a file picker to the user to choose from.
```json
/* manifest.json */
{
    "requiredPermissions": {
        "localFileSystem": "request"
    }
}
```

```js
const fsProvider = require('uxp').storage.localFileSystem;

async function readFileUsingLocalFileSystem() {
    if (fsProvider.isFileSystemProvider) {
        const { domains, fileTypes } = require('uxp').storage;

        try {
                const file = await fsProvider.getFileForOpening({ initialDomain: domains.userDesktop, types: fileTypes.text });
            if (!file) {
                console.error("Something went wrong.");
                return;
            }
            const text = await file.read();
            console.log(`File content: ${text}`);
        } catch (err) {
            console.error(err);
        }
    }
}

async function saveFileUsingLocalFileSystem() {
    if (fsProvider.isFileSystemProvider) {
        try {
            const file = await fsProvider.getFileForSaving("sample.txt", { types: ["txt"] });
            if (!file) {
                console.error("Something went wrong.");
                return;
            }
            await file.write("UXP saved sample file.");
        } catch (err) {
            console.error(err);
        }        
    }
}
```

If you would like to remember user's choice for an extended period of time, you can do it with the help of a token. The example below shows the essence of this usage but you should ideally save these tokens in the storage (more details covered in [Storage](./storage.md) section) for later use.

```js
const fsProvider = require('uxp').storage.localFileSystem;

const { domains, fileTypes } = require('uxp').storage;
const entry = await fsProvider.getFileForOpening({ initialDomain: domains.userDesktop, types: fileTypes.text });
const token = await fsProvider.createPersistentToken(entry); // store for future use

async function readFileUsingTokensInLocalFileSystem() {
    // In the future, access the entry using the token directly
    try {
        const file = await fsProvider.getEntryForPersistentToken(token);
        const text = await file.read();
        console.log(`File content: ${text}`);
    } catch (err) {
        console.error(err);
    }
}
```

//TODO
Q: What is the difference between persistent and session token?

#### Reference docs
- Instance of [localFileSystem](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/)
- [Entry](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/Entry/) and [Entry metadata](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/EntryMetadata/)
- [File](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/File/) and [Folder](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/Folder/)
- [Path] (/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Path/)

#### Sample plugin
// TODO Change the URL to ID repo
https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/jszip-sample

### FS Module
Based on NodeJS file system APIs, these provide direct access to file locations with the help of schema.

Accessing sandbox
```json
/* manifest.json */
{
    "requiredPermissions": {
        "localFileSystem": "plugin"
    }
}
```
```js
const fs = require("fs");
async function accessFileSystemViaFS() {
    try {
        const text = await fs.readFile("plugin:/sample.txt", 'utf8');
        console.log(`File content: ${text}`);
    } catch (e) {
        console.error(e);
    }
}
```

Accessing other locations
```json
/* manifest.json */
{
    "requiredPermissions": {
        "localFileSystem": "fullAccess"
    }
}
```
```js
const fs = require("fs");
async function accessFileSystemViaFS() {
    try {
        await fs.writeFile("/Users/user/Desktop/output.txt", "This is a sample text.", {encoding: "utf-8"});
        console.log(`File content: ${text}`);
    } catch (e) {
        console.error(e);
    }
}
```

#### Reference docs
- [FS module](/indesign/uxp/reference/uxp-api/reference-js/Modules/FileSystem/)
- [Path] (/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Path/)

// TODO
Q: Example of export a file?