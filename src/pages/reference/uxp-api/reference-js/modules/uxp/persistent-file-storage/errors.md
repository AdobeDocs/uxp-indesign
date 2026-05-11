
<a name="module-storage-errors" id="module-storage-errors"></a>

# require('uxp').storage.errors


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


  