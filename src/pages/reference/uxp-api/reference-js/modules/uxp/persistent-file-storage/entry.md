
<a name="module-storage-entry" id="module-storage-entry"></a>

# Entry
An `Entry` is the base class for `File` and `Folder`.
You can get an instance of Entry via the `localFileSystem` by fetching an instance of a File or Folder

**Example**
```js
// Since Entry cannot be called directly we can use a File or Folder object to invoke Entry as shown below
const fs =  require('uxp').storage.localFileSystem;
const folder = await fs.getPluginFolder(); // returns a Folder instance
const folderEntry = await folder.getEntry("entryName.txt");

// Now we can use folderEntry to invoke the APIs provided by Entry
console.log(folderEntry.isEntry); // isEntry is an API of Entry, in this example it will return true
```



<a name="module-storage-entry-isentry" id="module-storage-entry-isentry"></a>

## isEntry : `boolean`
Indicates that this instance is an `Entry`. Useful for type-checking.

**Example**  
```js
if (something.isEntry) {
    return something.getMetadata();
}
```


<a name="module-storage-entry-isfile" id="module-storage-entry-isfile"></a>

## isFile : `boolean`
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

## isFolder : `boolean`
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

## name : `string`
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

## url : `string`
**Read only**
The url of this entry. You can use this url as input to other entities of the extension system like for eg: set as src attribute of a Image widget in UI. Read-only.

**Example**  
```js
console.log(anEntry.url);
```


<a name="module-storage-entry-nativepath" id="module-storage-entry-nativepath"></a>

## nativePath : `string`
**Read only**
The platform native file-system path of this entry. Read-only

**Example**  
```js
console.log(anEntry.nativePath);
```


<a name="module-storage-entry-tostring" id="module-storage-entry-tostring"></a>

## toString()
Returns the details of the given entry like name, type and native path in a readable string format.

**Returns**: `string`  


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
| [options.overwrite] | `boolean` | `false` | if `true`, allows overwriting existing entries |
| [options.allowFolderCopy] | `boolean` | `false` | if `true`, allows copying the folder |

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
| [options.overwrite] | `boolean` | `false` | If `true` allows the move to overwrite existing files |
| [options.newName] | `string` |  | If specified, the entry is renamed to this name |

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
Removes this entry from the file system. If the entry is a folder, it must be empty before deletion.
Note: Currently when using this method, a permission denied error will occur if attempting to delete
a folder that was selected from a storage picker or added via drag-and-drop.

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

  