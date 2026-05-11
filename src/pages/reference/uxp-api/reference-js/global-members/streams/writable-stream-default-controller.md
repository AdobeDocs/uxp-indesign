
<a name="writablestreamdefaultcontroller" id="writablestreamdefaultcontroller"></a>

# window.WritableStreamDefaultController
**See**: [Web APIs - WritableStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController)  


<a name="writablestreamdefaultcontroller-signal" id="writablestreamdefaultcontroller-signal"></a>

## signal : `AbortSignal`
Returns AbortSignal that can be used to abort the pending write or close operation when the stream is aborted.



<a name="writablestreamdefaultcontroller-error" id="writablestreamdefaultcontroller-error"></a>

## error(message)
Closes the controlled writable stream, making all future interactions with it fails with the given error.


| Param | Type |
| --- | --- |
| message | `string` | 


  