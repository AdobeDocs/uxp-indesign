
<a name="module-storage-entrymetadata" id="module-storage-entrymetadata"></a>

# EntryMetadata
Metadata for an `Entry`. It includes useful information such as:

* size of the file (if a file)
* date created
* date modified
* name

Instantiate `EntryMetadata` by using [Entry's - getMetadata()](./Entry.md#module-storage-entry-getmetadata).
In order to instantiate `Entry`, you will need to first invoke the `localFileSystem` and then fetch an instance of a File or Folder.

**Example**
```js
const fs = require('uxp').storage.localFileSystem;
const folder = await fs.getPluginFolder(); // Gets an instance of Folder (or Entry)
const entryMetaData = await folder.getMetadata();
console.log(entryMetaData.name);
```



<a name="module-storage-entrymetadata-name" id="module-storage-entrymetadata-name"></a>

## name : `string`
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

## isFile : `boolean`
Indicates if the entry is a file



<a name="module-storage-entrymetadata-isfolder" id="module-storage-entrymetadata-isfolder"></a>

## isFolder : `boolean`
Indicates if the entry is a folder


  