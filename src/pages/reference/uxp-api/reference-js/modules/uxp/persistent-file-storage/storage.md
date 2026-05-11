
<a name="module-storage" id="module-storage"></a>

# require('uxp').storage


<a name="module-storage-entry" id="module-storage-entry"></a>

## Entry
An `Entry` is the base class for `File` and `Folder`. You'll
typically never instantiate an `Entry` directly, but it provides
the common fields and methods that both `File` and `Folder`
share.



<a name="new-module-storage-entry-new" id="new-module-storage-entry-new"></a>

## Entry(name, provider, id)
Creates an instance of Entry.


| Param | Type |
| --- | --- |
| name | `*` | 
| provider | `*` | 
| id | `*` | 



<a name="module-storage-entry-isentry" id="module-storage-entry-isentry"></a>

## isEntry : `Boolean`
Indicates that this instance is an `Entry`. Useful for type-checking.

**Example**  
```js
if (something.isEntry) {
    return something.getMetadata();
}
```


<a name="module-storage-entry-isfile" id="module-storage-entry-isfile"></a>

## isFile : `Boolean`
**Read only**
Indicates that this instance is **not** a `File`. Useful for type-
checking.

**Example**  
```js
if (!anEntry.isFile) {
    return "This entry is not a file.";
}
```


<a name="module-storage-entry-isfolder" id="module-storage-entry-isfolder"></a>

## isFolder : `Boolean`
**Read only**
Indicates that this instance is **not** a folder. Useful for type-
checking.

**Example**  
```js
if (!anEntry.isFolder) {
    return "This entry is not a folder.";
}
```


<a name="module-storage-entry-name" id="module-storage-entry-name"></a>

## name : `String`
**Read only**
The name of this entry. Read-only.

**Example**  
```js
console.log(anEntry.name);
```


<a name="module-storage-entry-provider" id="module-storage-entry-provider"></a>

## provider : `FileSystemProvider`
**Read only**
The associated provider that services this entry. Read-only.

**Example**  
```js
if (entryOne.provider !== entryTwo.provider) {
    throw new Error("Providers are not the same");
}
```


<a name="module-storage-entry-url" id="module-storage-entry-url"></a>

## url : `String`
**Read only**
The url of this entry. You can use this url as input to other entities of the extension system like for eg: set as src attribute of a Image widget in UI. Read-only.

**Example**  
```js
console.log(anEntry.url);
```


<a name="module-storage-entry-nativepath" id="module-storage-entry-nativepath"></a>

## nativePath : `String`
**Read only**
The platform native file-system path of this entry. Read-only

**Example**  
```js
console.log(anEntry.nativePath);
```


<a name="module-storage-entry-tostring" id="module-storage-entry-tostring"></a>

## toString()
Returns the details of the given entry like name, type and native path in a readable string format.

**Returns**: `String`  


<a name="module-storage-entry-copyto" id="module-storage-entry-copyto"></a>

## copyTo(folder, options)
Copies this entry to the specified `folder`.

**Returns**: `Promise<File | Folder>`  
**Throws**:

- `EntryExists` if the attempt would overwrite an entry and `overwrite` is `false`
- `PermissionDenied` if the underlying file system rejects the attempt
- `OutOfSpace` if the file system is out of storage space


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to copy this entry |
| options | `*` |  |  |
| [options.overwrite] | `Boolean` | `false` | if `true`, allows overwriting existing entries |
| [options.allowFolderCopy] | `Boolean` | `false` | if `true`, allows copying the folder |

**Example**  
```js
await someFile.copyTo(someFolder);
```
**Example**  
```js
await someFile.copyTo(someFolder, {overwrite: true});
```
**Example**  
```js
await someFolder.copyTo(anotherFolder, {overwrite: true, allowFolderCopy: true});
```


<a name="module-storage-entry-moveto" id="module-storage-entry-moveto"></a>

## moveTo(folder, options)
Moves this entry to the target folder, optionally specifying a new name.

**Returns**: `Promise<void>`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to move this entry |
| options | `*` |  |  |
| [options.overwrite] | `Boolean` | `false` | If `true` allows the move to overwrite existing files |
| [options.newName] | `String` |  | If specified, the entry is renamed to this name |

**Example**  
```js
await someFile.moveTo(someFolder);
```
**Example**  
```js
await someFile.moveTo(someFolder, {overwrite: true});
```
**Example**  
```js
await someFolder.moveTo(anotherFolder, {overwrite: true});
```
**Example**  
```js
await someFile.moveTo(someFolder, {newName: 'masterpiece.txt'})
```
**Example**  
```js
await someFile.moveTo(someFolder, {newName: 'novel.txt', {overwrite: true})
```


<a name="module-storage-entry-delete" id="module-storage-entry-delete"></a>

## delete()
Removes this entry from the file system. If the entry is a folder, all the
contents will also be removed.

**Returns**: `Promise<number>` - the number is 0 if succeeded, otherwise throws an Error  
**Example**  
```js
await aFile.delete();
```


<a name="module-storage-entry-getmetadata" id="module-storage-entry-getmetadata"></a>

## getMetadata()
Returns this entry's metadata.

**Returns**: `Promise<EntryMetadata>`  
**Example**  
```js
const metadata = aFile.getMetadata();
```


<a name="module-storage-entrymetadata" id="module-storage-entrymetadata"></a>

## EntryMetadata
Metadata for an entry. It includes useful information such as:

* size of the file (if a file)
* date created
* date modified
* name

You'll not instantiate this directly; use [Entry#getMetadata](#module-storage-entry-getmetadata) to do so.



<a name="module-storage-entrymetadata-name" id="module-storage-entrymetadata-name"></a>

## name : `String`
The name of the entry.



<a name="module-storage-entrymetadata-size" id="module-storage-entrymetadata-size"></a>

## size : `number`
The size of the entry, if a file. Zero if a folder.



<a name="module-storage-entrymetadata-datecreated" id="module-storage-entrymetadata-datecreated"></a>

## dateCreated : `Date`
The date this entry was created.



<a name="module-storage-entrymetadata-datemodified" id="module-storage-entrymetadata-datemodified"></a>

## dateModified : `Date`
The date this entry was modified.



<a name="module-storage-entrymetadata-isfile" id="module-storage-entrymetadata-isfile"></a>

## isFile : `Boolean`
Indicates if the entry is a file



<a name="module-storage-entrymetadata-isfolder" id="module-storage-entrymetadata-isfolder"></a>

## isFolder : `Boolean`
Indicates if the entry is a folder



<a name="module-storage-file" id="module-storage-file"></a>

## File
Represents a file on a file system. Provides methods for reading from and
writing to the file. You'll never instantiate a `File` directly; instead
you'll get access via a [localFileSystem](#module-storage-filesystemprovider).



<a name="module-storage-file-isfile" id="module-storage-file-isfile"></a>

## isFile
Indicates that this instance is a file.

**Example**  
```js
if (anEntry.isFile) {
    await anEntry.read();
}
```


<a name="module-storage-file-mode" id="module-storage-file-mode"></a>

## mode : `Symbol`
Indicates whether this file is read-only or read-write. See [readOnly](#module-storage-modes-readonly) and [readWrite](#module-storage-modes-readwrite).

**Example**  
```js
if (aFile.mode === modes.readOnly) {
    throw new Error("Can't write to a file opened as read-only.");
}
```


<a name="module-storage-file-read" id="module-storage-file-read"></a>

## read(options)
Reads data from the file and returns it. The file format can be specified
with the `format` option. If a format is not supplied, the file is assumed
to be a text file using UTF8 encoding.

**Returns**: `Promise<(String\|ArrayBuffer)>` - the contents of the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `any` |  |  |
| [options.format] | `Symbol` | `formats.utf8` | The format of the file; see [utf8](#module-storage-formats-utf8) and [binary](#module-storage-formats-binary). |

**Example**  
```js
const text = await myNovel.read();
```
**Example**  
```js
const data = await myNovel.read({format: formats.binary});
```


<a name="module-storage-file-write" id="module-storage-file-write"></a>

## write(data, options)
Writes data to a file, appending if desired. The format of the file
is controlled via the `format` option, and defaults to UTF8.

**Returns**: `Promise<number>` -  the length of the contents written to the file  
**Throws**:

- `FileIsReadOnly` if writing to a read-only file
- `OutOfSpace` If writing to the file causes the file system to exceed the available space (or quota)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | `String` \| `ArrayBuffer` |  | the data to write to the file |
| options | `any` |  |  |
| [options.format] | `Symbol` | `formats.utf8` | the format of the file; see [utf8](#module-storage-formats-utf8) and [binary](#module-storage-formats-binary). |
| [options.append] | `Boolean` | `false` | if `true`, the data is written to the end of the file |

**Example**  
```js
await myNovel.write("It was a dark and stormy night.\n");
await myNovel.write("Cliches and tropes aside, it really was.", {append: true});
```
**Example**  
```js
const data = new ArrayBuffer();
await aDataFile.write(data, {format: formats.binary});
```


<a name="module-storage-file-isfile" id="module-storage-file-isfile"></a>

## isFile(entry)
Determines if the entry is a file or not. This is safe to use even if the
entry is `null` or `undefined`.

**Returns**: `Boolean` - if `true`, the entry is a file.  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |



<a name="module-storage-filesystemprovider" id="module-storage-filesystemprovider"></a>

## FileSystemProvider
Provides access to files and folders on a file system. You'll typically not
instantiate this directly; instead you'll use an instance of one that has
already been created for you by UXP.



<a name="module-storage-filesystemprovider-isfilesystemprovider" id="module-storage-filesystemprovider-isfilesystemprovider"></a>

## isFileSystemProvider : `Boolean`
Indicates that this is a `FileSystemProvider`. Useful for type-checking.



<a name="module-storage-filesystemprovider-supporteddomains" id="module-storage-filesystemprovider-supporteddomains"></a>

## supportedDomains : `Array<Symbol>`
An array of the domains this file system supports. If the file system can
open a file picker to the user's `documents` folder, for example, then [userDocuments](#module-storage-domains-userdocuments) will be in this list.

**Example**  
```js
if (fs.supportedDomains.contains(domains.userDocuments)) {
    console.log("We can open a picker to the user's documents.")
}
```


<a name="module-storage-filesystemprovider-getfileforopening" id="module-storage-filesystemprovider-getfileforopening"></a>

## getFileForOpening(options)
Gets a file (or files) from the file system provider for the purpose of
opening them. Files are read-only.

Multiple files can be returned if the `allowMultiple` option` is `true`.

**Returns**: `Promise<File|Array<File>>` based on `allowMultiple`. Return empty if no file was selected.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `*` |  |  |
| [options.initialDomain] | `Symbol` |  | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array<String>` | `[&quot;.*&quot;]` | array of file types that the file open picker displays. |
| [options.initialLocation] | `File` \| `Folder` |  | the initial location of the file picker. You can pass an existing file or folder entry to suggest the picker to start at this location. If this is a file entry then the method will pick its parent folder as initial location. This will override initialDomain option. |
| [options.allowMultiple] | `Boolean` | `false` | if true, multiple files can be selected |

**Example**  
```js
const folder = await fs.getFolder({initialDomain = domains.userDocuments});
const file = await fs.getFileForOpening({initialLocation = folder});
if (!file) {
    // no file selected
    return;
}
const text = await file.read();
```
**Example**  
```js
const files = await fs.getFileForOpening({allowMultiple: true, types: fileTypes.images});
if (files.length === 0) {
    // no files selected
}
```


<a name="module-storage-filesystemprovider-getfileforsaving" id="module-storage-filesystemprovider-getfileforsaving"></a>

## getFileForSaving(suggestedName, options)
Gets a file reference suitable for read-write. Displays a file picker to select a location to "Save" the file.

If the act of writing to the file would overwrite it, the file picker
will prompt the user to confirm before returning a result to you.

**Returns**: `Promise<File>` - returns the selected file, or `null` if no file were selected.  

| Param | Type | Description |
| --- | --- | --- |
| suggestedName | `String` | Required when `options.types` is not defined. |
| options | `Object` |  |
| [options.initialDomain] | `Symbol` | The preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |
| [options.types] | `Array<String>` | Allowed file extensions, with no "." prefix. |

**Example**  
```js
const file = await fs.getFileForSaving("output.txt", { types: [ "txt" ]});
if (!file) {
    // file picker was cancelled
    return;
}
await file.write("It was a dark and stormy night");
```


<a name="module-storage-filesystemprovider-getfolder" id="module-storage-filesystemprovider-getfolder"></a>

## getFolder(options)
Gets a folder from the file system via a folder picker dialog. The files
and folders within can be accessed via [Folder#getEntries](#module-storage-folder-getentries). Any
files within are read-write.

If the user dismisses the picker, `null` is returned instead.

**Returns**: `Promise<Folder | null>` - the selected folder or `null` if no folder is selected.  

| Param | Type | Description |
| --- | --- | --- |
| options | `any` |  |
| [options.initialDomain] | `Symbol` | the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead. |

**Example**  
```js
const folder = await fs.getFolder();
const myNovel = (await fs.getEntries()).filter(entry => entry.name.indexOf('novel') > 0);
const text = await myNovel.read();
```


<a name="module-storage-filesystemprovider-gettemporaryfolder" id="module-storage-filesystemprovider-gettemporaryfolder"></a>

## getTemporaryFolder()
Returns a temporary folder. The contents of the folder will be removed when
the extension is disposed.

**Returns**: `Promise<Folder>`  
**Example**  
```js
const temp = await fs.getTemporaryFolder();
```


<a name="module-storage-filesystemprovider-getdatafolder" id="module-storage-filesystemprovider-getdatafolder"></a>

## getDataFolder()
Returns a folder that can be used for extension's data storage without user interaction.
It is persistent across host-app version upgrades.

**Returns**: `Promise<Folder>`  


<a name="module-storage-filesystemprovider-getpluginfolder" id="module-storage-filesystemprovider-getpluginfolder"></a>

## getPluginFolder()
Returns an plugin's folder – this folder and everything within it are read only.
This contains all the Plugin related packaged assets.

**Returns**: `Promise<Folder>`  


<a name="module-storage-filesystemprovider-getfsurl" id="module-storage-filesystemprovider-getfsurl"></a>

## getFsUrl(entry)
Returns the fs url of given entry.

**Returns**: `String`  

| Param | Type |
| --- | --- |
| entry | `Entry` | 



<a name="module-storage-filesystemprovider-getnativepath" id="module-storage-filesystemprovider-getnativepath"></a>

## getNativePath(entry)
Returns the platform native file system path of given entry.

**Returns**: `String`  

| Param | Type |
| --- | --- |
| entry | `Entry` | 



<a name="module-storage-filesystemprovider-createsessiontoken" id="module-storage-filesystemprovider-createsessiontoken"></a>

## createSessionToken(entry)
Returns a token suitable for use with certain host-specific APIs (such as Photoshop). This token is valid only for the current plugin session. As such, it is of no use if you serialize the token to persistent storage, as the token will be invalid in the future.

Note: When using the Photoshop DOM API, pass the instance of the file instead of a session token -- Photoshop will convert the entry into a session token automatically on your behalf.

**Returns**: `String` - the session token for the given entry  

| Param | Type |
| --- | --- |
| entry | `Entry` | 

**Example**  
```js
const fs = require('uxp').storage.localFileSystem;
let entry = await fs.getFileForOpening();
let token = fs.createSessionToken(entry);
let result = await require('photoshop').action.batchPlay([{
    _obj: "open",
    "target": {
       _path: token, // Rather than a system path, this expects a session token
        _kind: "local",
    }
}], {});
```


<a name="module-storage-filesystemprovider-getentryforsessiontoken" id="module-storage-filesystemprovider-getentryforsessiontoken"></a>

## getEntryForSessionToken(token)
Returns the file system Entry that corresponds to the session token obtained from `createSessionToken`. If an entry cannot be found that matches the token, then a `Reference Error: token is not defined` error is thrown.

**Returns**: `Entry` - the corresponding entry for the session token  

| Param | Type |
| --- | --- |
| token | `String` | 



<a name="module-storage-filesystemprovider-createpersistenttoken" id="module-storage-filesystemprovider-createpersistenttoken"></a>

## createPersistentToken(entry)
Returns a token suitable for use with host-specific APIs (such as Photoshop), or for storing a persistent reference to an entry (useful if you want to only ask for permission to access a file or folder once). A persistent token is not guaranteed to last forever -- certain scenarios can cause the token to longer work (including moving files, changing permissions, or OS-specific limitations). If a persistent token cannot be reused, you'll get an error at the time of use.

**Returns**: `Promise<String>` - the persistent token for the given entry  

| Param | Type |
| --- | --- |
| entry | `Entry` | 

**Example**  
```js
const fs = require('uxp').storage.localFileSystem;
let entry = await fs.getFileForOpening();
let token = await fs.createPersistentToken(entry);
localStorage.setItem("persistent-file", token);
```


<a name="module-storage-filesystemprovider-getentryforpersistenttoken" id="module-storage-filesystemprovider-getentryforpersistenttoken"></a>

## getEntryForPersistentToken(token)
Returns the file system Entry that corresponds to the persistent token obtained from `createPersistentToken`. If an entry cannot be found that matches the token, then a `Reference Error: token is not defined` error is thrown.

Note: retrieving an entry for a persistent token does _not_ guarantee that the entry is valid for use. You'll need to properly handle the case where the entry no longer exists on the disk, or the permissions have changed by catching the appropriate errors. If that occurs, the suggested practice is to prompt the user for the entry again and store the new token.

**Returns**: `Promise<Entry>` - the corresponding entry for the persistent token  

| Param | Type |
| --- | --- |
| token | `String` | 

**Example**  
```js
const fs = require('uxp').storage.localFileSystem;
let entry, contents, tries = 3, success = false;
while (tries > 0) {
    try {
        entry = await fs.getEntryForPersistentToken(localStorage.getItem("persistent-file"));
        contents = await entry.read();
        tries = 0;
        success = true;
    } catch (err) {
        entry = await fs.getFileForOpening();
        localStorage.setItem("persistent-token", await fs.createPersistentToken(entry));
        tries--;
    }
}
if (!success) {
    // fail gracefully somehow
}
```


<a name="module-storage-filesystemprovider-isfilesystemprovider" id="module-storage-filesystemprovider-isfilesystemprovider"></a>

## isFileSystemProvider(fs)
Checks if the supplied object is a `FileSystemProvider`. It's safe to use even
if the object is `null` or `undefined`. Useful for type checking.

**Returns**: `Boolean` - If `true`, the object is a file system provider  

| Param | Type | Description |
| --- | --- | --- |
| fs | `any` | the object to check |



<a name="module-storage-folder" id="module-storage-folder"></a>

## Folder
Represents a folder on a file system. You'll never instantiate this directly,
but will get it by calling [FileSystemProvider.getTemporaryFolder](#module-storage-filesystemprovider-gettemporaryfolder),
[FileSystemProvider.getFolder](#module-storage-filesystemprovider-getfolder), or via [Folder.getEntries](#module-storage-folder-getentries).



<a name="module-storage-folder-isfolder" id="module-storage-folder-isfolder"></a>

## isFolder
Indicates that this instance is a folder. Useful for type checking.



<a name="module-storage-folder-getentries" id="module-storage-folder-getentries"></a>

## getEntries()
Returns an array of entries contained within this folder.

**Returns**: `Promise<Array<Entry>>` - The entries within the folder.  
**Example**  
```js
const entries = await aFolder.getEntries();
const allFiles = entries.filter(entry => entry.isFile);
```


<a name="module-storage-folder-createentry" id="module-storage-folder-createentry"></a>

## createEntry(name, options)
Creates an entry within this folder and returns the appropriate instance.

**Returns**: `Promise<File | Folder>` the created entry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `String` |  | the name of the entry to create |
| options | `any` |  |  |
| [options.type] | `Symbol` | `types.file` | Indicates which kind of entry to create. Pass [Folder](#module-storage-folder) to create a new folder. Note that if the type is file then this method just create a file entry object and not the actual file on the disk. The file actually gets created when you call for eg: write method on the file entry object. |
| [options.overwrite] | `Boolean` | `false` | If `true`, the create attempt can overwrite an existing file |

**Example**  
```js
const myNovel = await aFolder.createEntry("mynovel.txt");
```
**Example**  
```js
const catImageCollection = await aFolder.createEntry("cats", {type: types.folder});
```


<a name="module-storage-folder-createfile" id="module-storage-folder-createfile"></a>

## createFile(name, options)
Creates a File Entry object within this folder and returns the appropriate instance.
Note that this method just create a file entry object and not the actual file on the disk.
The file actually gets created when you call for eg: write method on the file entry object.

**Returns**: `Promise<File>` - the created file entry  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `String` |  | the name of the file to create. |
| options | `any` |  |  |
| [options.overwrite] | `Boolean` | `false` | If `true`, the create attempt can overwrite an existing file |

**Example**  
```js
const myNovelTxtFile = await aFolder.createFile("mynovel.txt");
```


<a name="module-storage-folder-createfolder" id="module-storage-folder-createfolder"></a>

## createFolder(name)
Creates a Folder within this folder and returns the appropriate instance.

**Returns**: `Promise<Folder>` - the created folder entry object  

| Param | Type | Description |
| --- | --- | --- |
| name | `String` | the name of the folder to create. |

**Example**  
```js
const myCollectionsFolder = await aFolder.createFolder("collections");
```


<a name="module-storage-folder-getentry" id="module-storage-folder-getentry"></a>

## getEntry(filePath)
Gets an entry from within this folder and returns the appropriate instance.

**Returns**: `Promise<File | Folder>` the fetched entry.  

| Param | Type | Description |
| --- | --- | --- |
| filePath | `String` | the name/path of the entry to fetch |

**Example**  
```js
const myNovel = await aFolder.getEntry("mynovel.txt");
```


<a name="module-storage-folder-renameentry" id="module-storage-folder-renameentry"></a>

## renameEntry(entry, newName, options)
Renames an entry to a new name.

**Returns**: `Promise<void>`  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entry | `Entry` |  | the entry to rename |
| newName | `String` |  | the new name to assign |
| options | `any` |  |  |
| [options.overwrite] | `Boolean` | `false` | if `true`, renaming can overwrite an existing entry |

**Example**  
```js
await myNovels.rename(myNovel, "myFantasticNovel.txt");
```


<a name="module-storage-folder-isfolder" id="module-storage-folder-isfolder"></a>

## isFolder ⇒ `Boolean`
Checks if an entry is a folder. Safe to use if entry might be `null` or
`undefined`. Useful for type checking.

**Returns**: `Boolean` - if `true`, the entry is a folder  

| Param | Type | Description |
| --- | --- | --- |
| entry | `any` | the entry to check |



<a name="module-storage-filesystem" id="module-storage-filesystem"></a>

## FileSystem
UXP Provides Node.js style file system API, FSAPI.
Unlike [Entry](#module-storage-entry) based [File](#module-storage-file) or [Folder](#module-storage-folder) classes,
these methods can directly access a local file or folder with path or file descriptor.
The starting point of a path in the native filesystem depends on the scheme.
UXP supports plugin-specific storage schemes, such as "plugin:", "plugin-data:",
and "plugin-temp:", as well as a native "file:" scheme for the path parameter.<br/>
Note1: [UWP](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)(Universal Windows Platform)
has the strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions),
and UXP FSAPI may have access issues with anonymous filepaths.
So, XD does not support this feature for compatibility across platforms.<br/>
Note2: The native layer of UXP FSAPI is based on [libUV](https://libuv.org/) except UWP powered features, such as FilePicker and Drag&Drop on Win10 XD.



<a name="module-storage-filesystem-readfile" id="module-storage-filesystem-readfile"></a>

## readFile(path, options, callback)
Reads data from the path asynchronously.
The file format can be specified with the encoding options.
If an encoding is not supplied, the file is assumed to be a binary format.

**Returns**: `Promise<String|ArrayBuffer>` - the contents of the file  

| Param | Type | Description |
| --- | --- | --- |
| path | `String` | path where the file to read is located |
| options | `any` |  |
| [options.encoding] | `String` | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const data = await fs.readFile("plugin-data:/binaryFile.obj");
```
**Example**  
```js
const text = await fs.readFile("plugin-data:/textFile.txt", {encoding: "utf-8"});
```


<a name="module-storage-filesystem-readfilesync" id="module-storage-filesystem-readfilesync"></a>

## readFileSync(path, options)
Reads data from the path synchronously.
The file format can be specified with the encoding options.
If an encoding is not supplied, the file is assumed to be a binary format.

**Returns**: `String` \| `ArrayBuffer` - the contents of the file  

| Param | Type | Description |
| --- | --- | --- |
| path | `String` | path where the file to read is located |
| options | `any` |  |
| [options.encoding] | `String` | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |

**Example**  
```js
const data = fs.readFileSync("plugin-data:/binaryFile.obj");
```
**Example**  
```js
const text = fs.readFileSync("plugin-data:/textFile.txt", {encoding: "utf-8"});
```


<a name="module-storage-filesystem-writefile" id="module-storage-filesystem-writefile"></a>

## writeFile(path, data, options, callback)
Writes data to the path asynchronously, appending if desired.
The format of the file is controlled via the encoding option, and defaults to a binary format.

**Returns**: `Promise<int>` - the length of contents written to the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `String` |  | path where the file to write is located |
| data | `String` \| `ArrayBuffer` \| `ArrayBufferView` |  | the data to write to the file |
| options | `any` |  |  |
| [options.flag] | `int` \| `String` | `w` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [options.mode] | `int` \| `String` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| [options.encoding] | `String` |  | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |
| callback | `function` |  | if not provided, this function will return Promise object |

**Example**  
```js
const bufLen = await fs.writeFile("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
```
**Example**  
```js
const strLen = await fs.writeFile("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {encoding: "utf-8"});
```


<a name="module-storage-filesystem-writefilesync" id="module-storage-filesystem-writefilesync"></a>

## writeFileSync(path, data, options)
Writes data to a path synchronously, appending if desired.
The format of the file is controlled via the encoding option, and defaults to a binary format.

**Returns**: `int` - the length of contents written to the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `String` |  | path where the file to write is located |
| data | `String` \| `ArrayBuffer` \| `ArrayBufferView` |  | the data to write to the file |
| options | `any` |  |  |
| [options.flag] | `int` \| `String` | `w` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [options.mode] | `int` \| `String` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| [options.encoding] | `String` |  | the encoding of the file can be "utf-8", "utf-16be" or "utf-16le" |

**Example**  
```js
const bufLen = fs.writeFileSync("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
```
**Example**  
```js
const strLen = fs.writeFileSync("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {encoding: "utf-8"});
```


<a name="module-storage-filesystem-open" id="module-storage-filesystem-open"></a>

## open(path, [flag], [mode], callback)
Opens or a creates a file asynchronously

**Returns**: `Promise<int>` - fd(file descriptor)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `String` |  | path where to open a file |
| [flag] | `int` \| `String` | `r` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [mode] | `int` \| `String` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| callback | `function` |  | if not provided, this function will return Promise object |

**Example**  
```js
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
```


<a name="module-storage-filesystem-close" id="module-storage-filesystem-close"></a>

## close(fd, callback)
Closes a file descriptor asynchronously

**Returns**: `int` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| fd | `int` | file descriptor of the file to close |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.close(fd);
```


<a name="module-storage-filesystem-read" id="module-storage-filesystem-read"></a>

## read(fd, buffer, offset, length, position, callback)
Reads data in chunks from the file it refers to the file descriptor

**Returns**: `Promise<Object>` - { bytesRead, buffer }  
**Throws**:

- `Error` if invalid file descriptor is passed.
 if invalid parameter format or value is passed.


| Param | Type | Description |
| --- | --- | --- |
| fd | `int` | a file descriptor obtained from fs.open |
| buffer | `ArrayBuffer` | the buffer where read bytes are written to |
| offset | `int` | the offset to the buffer where read bytes are written from |
| length | `int` | the length to read |
| position | `int` | the position of the file to read from. if -1, the current file position to read from. when the bytes are read, the current file position advances by size of the read bytes. if the value is greater than or equal to 0, it specifies a file position to read from. after the bytes are read, a current file position stayed the same |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const fileSize = 1024;
const buffer = new ArrayBuffer(fileSize);
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
let bytesReadInTotal = 0;
while (bytesReadInTotal < fileSize) {
    const { bytesRead } = await fs.read(fd, buffer, bytesReadInTotal, 128, -1);
    if (!bytesRead) {
        break;
    }
    bytesReadInTotal += bytesRead;
}
await fs.close(fd);
```


<a name="module-storage-filesystem-write" id="module-storage-filesystem-write"></a>

## write(fd, buffer, offset, length, position, callback)
Writes data in chunks to the file it refers to the file descriptor

**Returns**: `Promise<Object>` - { bytesWritten, buffer }  
**Throws**:

- `Error` if invalid file descriptor is passed
if invalid parameter format or value is passed


| Param | Type | Description |
| --- | --- | --- |
| fd | `int` | the file descriptor obtained from fs.open |
| buffer | `ArrayBuffer` | the buffer where the data to write with |
| offset | `int` | the offset of the buffer where write bytes start from |
| length | `int` | the length to write |
| position | `int` | the position of the file to write from. if -1,writing will start from the current file position. when the bytes are written, the current file position advances by size of the written bytes. if the value is greater than or equal to 0, it specifies a file position to write from. After writing, it will not change the file position |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const fd = await fs.open("plugin-data:/fileToWrite.txt", "w+");
const data = "It was a dark and stormy night.\n";
const srcBuffer = new TextEncoder().encode(data).buffer;
const { bytesWritten } = await fs.write(fd, srcBuffer, 0, data.length, 0);
await fs.close(fd);
```


<a name="module-storage-filesystem-lstat" id="module-storage-filesystem-lstat"></a>

## lstat(path, callback)
Gets information asynchronously from a file or a folder of the path

**Returns**: `Promise<Object>` - see [Stats](https://nodejs.org/api/fs.html#class-fsstats) class in Node.js
Note: Some methods or properties may not be supportive for the return object due to the platform limitation  

| Param | Type | Description |
| --- | --- | --- |
| path | `String` | path where the file to get its information is located |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const stats = await fs.lstat("plugin-data:/textFile.txt");
const isFile = stats.isFile();
```


<a name="module-storage-filesystem-lstatsync" id="module-storage-filesystem-lstatsync"></a>

## lstatSync(path)
Gets information synchronously from a file or a folder of the path

**Returns**: `Object` - see [Stats](https://nodejs.org/api/fs.html#class-fsstats) class in Node.js
Note: Some methods or properties may not be supportive for the return object due to the platform limitation  

| Param | Type | Description |
| --- | --- | --- |
| path | `String` | path where the file to get its information is located |

**Example**  
```js
const stats = fs.lstatSync("plugin-data:/textFile.txt");
const birthTime = stats.birthtime;
```


<a name="module-storage-filesystem-rename" id="module-storage-filesystem-rename"></a>

## rename(oldPath, newPath, callback)
Renames or moves, if required, the file from the oldPath to the newPath

**Returns**: `Promise<int>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| oldPath | `String` | path where the old file name to change is located |
| newPath | `String` | path where the new file name will be |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
```


<a name="module-storage-filesystem-copyfile" id="module-storage-filesystem-copyfile"></a>

## copyFile(srcPath, destPath, flags, callback)
Copies a file or a folder from the source path to the destination path

**Returns**: `Promise<int>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| srcPath | `String` |  | path where the source file to copy is located |
| destPath | `String` |  | path where the source file will be copied to |
| flags | `int` | `0` | see flags in [uv_fs_copyfile](https://docs.libuv.org/en/v1.x/fs.html) |
| callback | `function` |  | if not provided, this function will return Promise object |

**Example**  
```js
const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
```


<a name="module-storage-filesystem-unlink" id="module-storage-filesystem-unlink"></a>

## unlink(path, callback)
Deletes a name with the file it refers to asynchronously

**Returns**: `Promise<int>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| path | `String` | path where the file to delete is located |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.unlink("plugin-data:/fileToDelete.txt");
```


<a name="module-storage-filesystem-mkdir" id="module-storage-filesystem-mkdir"></a>

## mkdir(path, callback)
Creates a directory of the path asynchronously

**Returns**: `Promise<int>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| path | `String` | path where to create the directory |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.mkdir("plugin-data:/newDir");
```


<a name="module-storage-filesystem-rmdir" id="module-storage-filesystem-rmdir"></a>

## rmdir(path, callback)
Removes a directory asynchronously

**Returns**: `Promise<int>` - 0 if succeeded, otherwise throws an Error  

| Param | Type | Description |
| --- | --- | --- |
| path | `String` | path where to remove the directory |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
await fs.rmdir("plugin-data:/dirToRemove");
```


<a name="module-storage-filesystem-readdir" id="module-storage-filesystem-readdir"></a>

## readdir(path, callback)
Reads a directory to list the containing files and directories asynchronously

**Returns**: `Promise<Array<String>>` - string array of containing files and directories in the path  

| Param | Type | Description |
| --- | --- | --- |
| path | `String` | path where to read the directory |
| callback | `function` | if not provided, this function will return Promise object |

**Example**  
```js
const paths = await fs.readdir("plugin-data:/dirToRead");
```


<a name="module-storage-filesystem-readdirsync" id="module-storage-filesystem-readdirsync"></a>

## readdirSync(path)
Reads a directory to list the containing files and directories synchronously

**Returns**: `Array<String>` - string array of containing files and directories in the path  

| Param | Type | Description |
| --- | --- | --- |
| path | `String` | path where to read the directory |

**Example**  
```js
const paths = fs.readdirSync("plugin-data:/dirToRead");
```


<a name="module-storage-localfilesystem" id="module-storage-localfilesystem"></a>

## localFileSystem : `LocalFileSystemProvider`


<a name="module-storage-errors" id="module-storage-errors"></a>

## errors : `Errors`


<a name="module-storage-errors-abstractmethodinvocationerror" id="module-storage-errors-abstractmethodinvocationerror"></a>

## AbstractMethodInvocationError
Attempted to invoke an abstract method.



<a name="module-storage-errors-providermismatcherror" id="module-storage-errors-providermismatcherror"></a>

## ProviderMismatchError
Attempted to execute a command that required the providers of all
entries to match.



<a name="module-storage-errors-entryisnotanentryerror" id="module-storage-errors-entryisnotanentryerror"></a>

## EntryIsNotAnEntryError
The object passed as an entry is not actually an `Entry`.



<a name="module-storage-errors-entryisnotafoldererror" id="module-storage-errors-entryisnotafoldererror"></a>

## EntryIsNotAFolderError
The entry is not a folder, but was expected to be a folder.



<a name="module-storage-errors-entryisnotafileerror" id="module-storage-errors-entryisnotafileerror"></a>

## EntryIsNotAFileError
The entry is not a file, but was expected to be.



<a name="module-storage-errors-notafilesystemerror" id="module-storage-errors-notafilesystemerror"></a>

## NotAFileSystemError
The instance was expected to be a file system, but wasn't.



<a name="module-storage-errors-outofspaceerror" id="module-storage-errors-outofspaceerror"></a>

## OutOfSpaceError
The file system is out of space (or quota has been exceeded)



<a name="module-storage-errors-permissiondeniederror" id="module-storage-errors-permissiondeniederror"></a>

## PermissionDeniedError
The file system revoked permission to complete the requested
action.



<a name="module-storage-errors-entryexistserror" id="module-storage-errors-entryexistserror"></a>

## EntryExistsError
An attempt was made to overwrite an entry without indicating
that it was safe to do so via `overwrite: true`.



<a name="module-storage-errors-fileisreadonlyerror" id="module-storage-errors-fileisreadonlyerror"></a>

## FileIsReadOnlyError
An attempt was made to write to a file that was opened as
read-only.



<a name="module-storage-errors-domainnotsupportederror" id="module-storage-errors-domainnotsupportederror"></a>

## DomainNotSupportedError
Domain is not supported by the current FileSystemProvider
instance.



<a name="module-storage-errors-invalidfilenameerror" id="module-storage-errors-invalidfilenameerror"></a>

## InvalidFileNameError
The file name contains invalid characters



<a name="module-storage-errors-invalidfileformaterror" id="module-storage-errors-invalidfileformaterror"></a>

## InvalidFileFormatError
Unsupported format type



<a name="module-storage-errors-datafileformatmismatcherror" id="module-storage-errors-datafileformatmismatcherror"></a>

## DataFileFormatMismatchError
Data and Format mismatch



<a name="module-storage-errors-notsupported" id="module-storage-errors-notsupported"></a>

## NotSupported
Not supported error



<a name="module-storage-domains" id="module-storage-domains"></a>

## domains
Common locations that we can use when displaying a file picker.



<a name="module-storage-domains-userdesktop" id="module-storage-domains-userdesktop"></a>

## userDesktop : `Symbol`
The user's desktop folder



<a name="module-storage-domains-userdocuments" id="module-storage-domains-userdocuments"></a>

## userDocuments : `Symbol`
The user's documents folder



<a name="module-storage-domains-userpictures" id="module-storage-domains-userpictures"></a>

## userPictures : `Symbol`
The user's pictures folder or library



<a name="module-storage-domains-uservideos" id="module-storage-domains-uservideos"></a>

## userVideos : `Symbol`
The user's videos / movies folder or library



<a name="module-storage-domains-usermusic" id="module-storage-domains-usermusic"></a>

## userMusic : `Symbol`
The user's music folder or library



<a name="module-storage-domains-applocaldata" id="module-storage-domains-applocaldata"></a>

## appLocalData : `Symbol`
Local application data



<a name="module-storage-domains-applocallibrary" id="module-storage-domains-applocallibrary"></a>

## appLocalLibrary : `Symbol`
Local application library



<a name="module-storage-domains-applocalcache" id="module-storage-domains-applocalcache"></a>

## appLocalCache : `Symbol`
Local application cache directory (persistence not guaranteed)



<a name="module-storage-domains-applocalshared" id="module-storage-domains-applocalshared"></a>

## appLocalShared : `Symbol`
Local application shared data folder



<a name="module-storage-domains-applocaltemporary" id="module-storage-domains-applocaltemporary"></a>

## appLocalTemporary : `Symbol`
Local temporary directory



<a name="module-storage-domains-approamingdata" id="module-storage-domains-approamingdata"></a>

## appRoamingData : `Symbol`
Roaming application data



<a name="module-storage-domains-approaminglibrary" id="module-storage-domains-approaminglibrary"></a>

## appRoamingLibrary : `Symbol`
Roaming application library data



<a name="module-storage-filetypes" id="module-storage-filetypes"></a>

## fileTypes
This namespace describes the various file type extensions that can used be used in some FS file open methods.



<a name="module-storage-filetypes-text" id="module-storage-filetypes-text"></a>

## text : `Array<String>`
Text file extensions



<a name="module-storage-filetypes-images" id="module-storage-filetypes-images"></a>

## images : `Array<String>`
Image file extensions



<a name="module-storage-filetypes-all" id="module-storage-filetypes-all"></a>

## all : `Array<String>`
All file types



<a name="module-storage-formats" id="module-storage-formats"></a>

## formats
This namespace describes the file content formats supported in FS methods like read and write.



<a name="module-storage-formats-utf8" id="module-storage-formats-utf8"></a>

## utf8 : `Symbol`
UTF8 File encoding



<a name="module-storage-formats-binary" id="module-storage-formats-binary"></a>

## binary : `Symbol`
Binary file encoding



<a name="module-storage-modes" id="module-storage-modes"></a>

## modes
This namespace describes the file open modes. for eg: open file in read-only or both read-write



<a name="module-storage-modes-readonly" id="module-storage-modes-readonly"></a>

## readOnly : `Symbol`
The file is read-only; attempts to write will fail.



<a name="module-storage-modes-readwrite" id="module-storage-modes-readwrite"></a>

## readWrite : `Symbol`
The file is read-write.



<a name="module-storage-types" id="module-storage-types"></a>

## types
This namespace describes the type of the entry. Whether file or folder etc.



<a name="module-storage-types-file" id="module-storage-types-file"></a>

## file : `Symbol`
A file; used when creating an entity



<a name="module-storage-types-folder" id="module-storage-types-folder"></a>

## folder : `Symbol`
A folder; used when creating an entity


