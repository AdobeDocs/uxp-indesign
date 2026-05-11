
<a name="module-global--formdata" id="module-global--formdata"></a>

# window.FormData


<a name="new-module-global--formdata-new" id="new-module-global--formdata-new"></a>

## FormData()
FormData provides a way to construct a set of key/value pairs, which can be used in fetch(), XMLHttpRequest.



<a name="module-global--formdata-append" id="module-global--formdata-append"></a>

## append(name, value, fileName)
Appends a key value pair into FormData.
If the value is either ArrayBuffer and TypedArray, its buffer as well as the object are copied.
However, if the value is a File object value, the File object is cloned but its content is not cloned.
Consequently, the File object and the cloned one refer to the same content.

**See**: [FormData - append](https://developer.mozilla.org/en-US/docs/Web/API/FormData/append)  
**Since**: v7.3.0  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Key string for the pair |
| value | `string` \| `ArrayBuffer` \| `TypedArray` \| `File` \| `Blob` | Value for the pair |
| fileName | `string` | 'Optional' file name to use for a File or a Blob object value. The default filename is "blob" for Blob object and the file name would be taken from the name property for File object. |



<a name="module-global--formdata-delete" id="module-global--formdata-delete"></a>

## delete(name)
Removes all entries from FormData whose name is same with the input name.

**See**: [FormData - delete](https://developer.mozilla.org/en-US/docs/Web/API/FormData/delete)  
**Since**: v7.3.0  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the key to delete |



<a name="module-global--formdata-entries" id="module-global--formdata-entries"></a>

## entries()
Returns an iterator which iterates through all key/value pairs contained in the FormData.
The key of each pair is a string object and the value is either a string or a Blob object.

**Returns**: `iterator` - Iterator for all key-value pairs in FormData.  
**See**: [FormData - entries](https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries)  
**Since**: v7.3.0  


<a name="module-global--formdata-get" id="module-global--formdata-get"></a>

## get(name)
Returns the first value associated with a given key from within a FormData object.
Use getAll() if you expect multiple values and want all of them.

**Returns**: `string` \| `Blob` - Value whose key matches the specified name. Otherwise, null.  
**See**: [FormData - get](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get)  
**Since**: v7.3.0  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the key to retrieve |



<a name="module-global--formdata-getall" id="module-global--formdata-getall"></a>

## getAll(name)
Returns all the values associated with a given key from within a FormData object.

**Returns**: `Array` - Array of values whose key matches the specified name. Otherwise, an empty list.  
**See**: [FormData - getAll](https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll)  
**Since**: v7.3.0  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the key to retrieve |



<a name="module-global--formdata-has" id="module-global--formdata-has"></a>

## has(name)
Test if a FormData object contains a certain key.

**Returns**: `boolean` - True if a key of FormData matches the specified name. Otherwise, false.  
**See**: [FormData - has](https://developer.mozilla.org/en-US/docs/Web/API/FormData/has)  
**Since**: v7.3.0  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the key to test |



<a name="module-global--formdata-keys" id="module-global--formdata-keys"></a>

## keys()
Returns an iterator which iterates through all keys in FormData.
The keys are strings.

**Returns**: `iterator` - Iterator of FormData's keys.  
**See**: [FormData - keys](https://developer.mozilla.org/en-US/docs/Web/API/FormData/keys)  
**Since**: v7.3.0  


<a name="module-global--formdata-set" id="module-global--formdata-set"></a>

## set(name, value, filename)
If there are entries whose name is same with the input name,
replaces the first existing entry with new entry and removes the others.
If not, appends a new entry with name/value.

**See**: [FormData - set](https://developer.mozilla.org/en-US/docs/Web/API/FormData/set)  
**Since**: v7.3.0  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the field |
| value | `string` \| `Blob` | Field's value. The value is converted to a string if the value is neither string nor Blob. |
| filename | `string` | Filename reported to the server when a Blob object or a File object is passed as a value.      The default filename is "blob" for Blob object and the file name would be taken from the name property for File object. |



<a name="module-global--formdata-values" id="module-global--formdata-values"></a>

## values()
Returns an iterator which iterates through all values in the FormData.
The values are strings or Blob objects.

**Returns**: `iterator` - Iterator of FormData's values.  
**See**: [FormData - values](https://developer.mozilla.org/en-US/docs/Web/API/FormData/values)  
**Since**: v7.3.0  

  