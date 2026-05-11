
<a name="path" id="path"></a>

# window.path
The `path` module provides utilities for working with file and directory paths.
This module accepts string and Entry object as path parameters.
However, local file schemes, such as `plugin-data:` or `plugin-temp:`, will not be resolved to a native path in string paths.
The `path` module is registered in the global scope and can be used without declaration.

**See**: https://nodejs.org/api/path.html  
**Since**: UXP v6.4.0  


<a name="path-sep" id="path-sep"></a>

## sep : `string`
The platform-specific file separator. '\\' or '/'.



<a name="path-delimiter" id="path-delimiter"></a>

## delimiter : `string`
The platform-specific file delimiter. ';' or ':'.



<a name="path-posix" id="path-posix"></a>

## posix : `Object`
It provides access to POSIX specific implementations of the path methods.
Same as parent object on posix.



<a name="path-win32" id="path-win32"></a>

## win32 : `Object`
It provides access to Windows-specific implementations of the path methods.
Same as parent object on Windows



<a name="path-normalize" id="path-normalize"></a>

## normalize(path)
Normalize a string path, reducing '..' and '.' parts.
When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.

**Returns**: `string` - normalized string path  
**Throws**:

- `Error` if `path` is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path to normalize |



<a name="path-join" id="path-join"></a>

## join(paths)
Join all arguments together and normalize the resulting path.

**Returns**: `string` - joined string path  
**Throws**:

- `Error` if any of the path segments is not a string


| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | paths to join |



<a name="path-resolve" id="path-resolve"></a>

## resolve(paths)
The right-most parameter is considered {to}. Other parameters are considered an array of {from}.

Starting from leftmost {from} parameter, resolves {to} to an absolute path.

If {to} isn't already absolute, {from} arguments are prepended in right to left order,
until an absolute path is found. If after using all {from} paths still no absolute path is found,
the current working directory is used as well. The resulting path is normalized,
and trailing slashes are removed unless the path gets resolved to the root directory.

**Returns**: `string` - resolved string path  
**Throws**:

- `Error` if any of the arguments is not a string


| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | a sequence of paths or path segments |



<a name="path-isabsolute" id="path-isabsolute"></a>

## isAbsolute(path)
Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.

If the given {path} is a zero-length string, `false` will be returned.

**Returns**: `boolean` - if the path is an absolute path or not  
**Throws**:

- `Error` if `path` is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path to test |



<a name="path-relative" id="path-relative"></a>

## relative(from, to)
Solve the relative path from {from} to {to} based on the current working directory.
At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.

**Returns**: `string` - relative string path  
**Throws**:

- `Error` if either `from` or `to` is not a string


| Param | Type | Description |
| --- | --- | --- |
| from | `string` | base path to find from |
| to | `string` | relative path to find to |



<a name="path-dirname" id="path-dirname"></a>

## dirname(path)
Return the directory name of a path. Similar to the Unix dirname command.

**Returns**: `string` - the directory name of a path  
**Throws**:

- `Error` if `path` is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |



<a name="path-basename" id="path-basename"></a>

## basename(path, [ext])
Return the last portion of a path. Similar to the Unix basename command.
Often used to extract the file name from a fully qualified path.

**Returns**: `string` - the last portion of a path  
**Throws**:

- `Error` if `path` is not a string or if `ext` is given and is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |
| [ext] | `string` | an extension to remove from the result |



<a name="path-extname" id="path-extname"></a>

## extname(path)
Return the extension of the path, from the last '.' to end of string in the last portion of the path.
If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.

**Returns**: `string` - the extension of the path  
**Throws**:

- `Error` if `path` is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |



<a name="path-parse" id="path-parse"></a>

## parse(path)
Returns an object from a path string - the opposite of format().

**Returns**: `Object` - { dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` }  
**Throws**:

- `Error` if `path` is not a string


| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path to evaluate |



<a name="path-format" id="path-format"></a>

## format(pathObject)
Returns a path string from an object - the opposite of parse().

**Returns**: `string` - a path string from an object  

| Param | Type | Description |
| --- | --- | --- |
| pathObject | `Object` | { dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` } path to evaluate |


  