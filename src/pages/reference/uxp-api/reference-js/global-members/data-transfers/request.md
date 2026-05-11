
<a name="request" id="request"></a>

# window.Request
Request class represents a resource request.

**Since**: v7.3.0  


<a name="new-request-new" id="new-request-new"></a>

## Request(input, options)
**Throws**:

- `TypeError` If options.body exists and options.method is either "GET" or "HEAD".


| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | Defines the resource that you wish to fetch. This can either be:          A string containing the URL of the resource you want to fetch.          A Request object. |
| options | `Object` | '(Optional)' object containing any custom settings that you want to apply to the request. |
| options.method | `string` | Request method. The default is "GET". |
| options.headers | `string` \| `Headers` | Any headers you want to add to your request. |
| options.body | `Blob` \| `ArrayBuffer` \| `TypedArray` \| `FormData` \| `string` \| `ReadableStream` \| `URLSearchParams` | Any body that you want add to your request. |
| options.credentials | `string` | Request credentials you want to use for the request. Either "omit" or "include". |
| options.signal | `AbortSignal` | AbortSignal object which can be used to abort a request. |



<a name="request-body" id="request-body"></a>

## body : `ReadableStream`
**Read only**
ReadableStream object with the body contents that have been added to the request or null if body is null.

**See**: [Request - body](https://developer.mozilla.org/en-US/docs/Web/API/Request/body)  


<a name="request-bodyused" id="request-bodyused"></a>

## bodyUsed : `boolean`
**Read only**
Indicates whether the request body has been read yet.

**See**: [Request - bodyUsed](https://developer.mozilla.org/en-US/docs/Web/API/Request/bodyUsed)  


<a name="request-credentials" id="request-credentials"></a>

## credentials : `string`
**Read only**
Indicates whether the user agent should send or receive cookies. Possible values are:

     "omit": Never send or receive cookies.
     "include": Always send cookies.



<a name="request-headers" id="request-headers"></a>

## headers : `Headers`
**Read only**
[Headers](./Headers.md) object associated with the request.

**See**: [Request - headers](https://developer.mozilla.org/en-US/docs/Web/API/Request/headers)  


<a name="request-method" id="request-method"></a>

## method : `string`
**Read only**
Request's method. Possible values are "GET", "POST", "HEAD", "PUT", "DELETE" and "OPTIONS".

**See**: [Request - method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method)  


<a name="request-url" id="request-url"></a>

## url : `string`
**Read only**
URL of the request.

**See**: [Request - url](https://developer.mozilla.org/en-US/docs/Web/API/Request/url)  


<a name="request-arraybuffer" id="request-arraybuffer"></a>

## arrayBuffer()
Reads the request body and returns it as a Promise that resolves with an ArrayBuffer.

**Returns**: `Promise<ArrayBuffer>` Promise that resolves with an ArrayBuffer.  
**See**: [Request - arrayBuffer](https://developer.mozilla.org/en-US/docs/Web/API/Request/arrayBuffer)  


<a name="request-blob" id="request-blob"></a>

## blob()
Reads the request body and returns it as a Promise that resolves with a Blob.

**Returns**: `Promise<Blob>` Promise that resolves with a Blob.  
**See**: [Request - blob](https://developer.mozilla.org/en-US/docs/Web/API/Request/blob)  


<a name="request-clone" id="request-clone"></a>

## clone()
Creates a copy of the current request object.

**Returns**: `Request` - Copy of the request.  
**See**: [Request - clone](https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)  


<a name="request-formdata" id="request-formdata"></a>

## formData()
Reads the request body and returns it as a Promise that resolves with a FormData.

**Returns**: `Promise<FormData>` Promise that resolves with a FormData.  
**See**: [Request - formData](https://developer.mozilla.org/en-US/docs/Web/API/Request/formData)  


<a name="request-json" id="request-json"></a>

## json()
Reads the request body and returns it as a Promise that resolves with the result of parsing the body text as JSON.

**Returns**: `Promise<Object>` Promise that resolves to JSON object.  
**See**: [Request - json](https://developer.mozilla.org/en-US/docs/Web/API/Request/json)  


<a name="request-text" id="request-text"></a>

## text()
Reads the request body and returns it as a Promise that resolves with a String decoded using UTF-8.

**Returns**: `Promise<string>` Promise that resolves with a String.  
**See**: [Request - text](https://developer.mozilla.org/en-US/docs/Web/API/Request/text)  

  