
<a name="clipboard" id="clipboard"></a>

# navigator.clipboard
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard  


<a name="new-clipboard-new" id="new-clipboard-new"></a>

## Clipboard()
Creates an instance of Clipboard.

Note: Clipboard access is not supported for 3P plugins with manifest version upto 4. Valid manifest entry required from manifest version 5.;



<a name="clipboard-setcontent" id="clipboard-setcontent"></a>

## setContent(data)
Set data to clipboard.
Note: This is a non-standard API.

**Returns**: `Promise`  

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | The data to store in the clipboard. The object keys are the mime types, so for text, use `text/plain` as a key. |

**Example**  
```js
navigator.clipboard.setContent({"text/plain": "Hello!"});
```


<a name="clipboard-getcontent" id="clipboard-getcontent"></a>

## getContent()
Get data from clipboard.
Note: This is a non-standard API.

**Returns**: `Promise`  
**Example**  
```js
navigator.clipboard.getContent();
```


<a name="clipboard-write" id="clipboard-write"></a>

## write(data)
Write data to clipboard. This can be used to implement cut and copy functionality.

**Returns**: `Promise`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write  
**Since**: v6.0  

| Param | Type | Description |
| --- | --- | --- |
| data | `object` | The data to set. |

**Example**  
```js
navigator.clipboard.write({"text/plain": "Hello!"});
```


<a name="clipboard-writetext" id="clipboard-writetext"></a>

## writeText(text)
Write text to clipboard. This can be used to implement cut and copy text functionality.

**Returns**: `Promise`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText  
**Since**: v6.0  

| Param | Type | Description |
| --- | --- | --- |
| text | `string` \| `object` | text string to set or an object of the form {"text/plain": "text to set"}.                               Note that the object format will be deprecated and shouldn't be used. |

**Example**  
```js
navigator.clipboard.writeText("Hello!");
```


<a name="clipboard-read" id="clipboard-read"></a>

## read()
Read data from clipboard.

**Returns**: `Promise`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/read  
**Since**: v6.0  
**Example**  
```js
navigator.clipboard.read();
```


<a name="clipboard-readtext" id="clipboard-readtext"></a>

## readText()
Read text from clipboard.

**Returns**: `Promise`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText  
**Since**: v6.0  
**Example**  
```js
navigator.clipboard.readText();
```


<a name="clipboard-clearcontent" id="clipboard-clearcontent"></a>

## clearContent()
Clear clipboard content.
Note: Nonstandard: This method is non-standard.

**Returns**: `Promise`  
**Since**: v6.0  
**Example**  
```js
navigator.clipboard.clearContent();
```

  