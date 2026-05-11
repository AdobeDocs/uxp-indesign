
<a name="abortcontroller" id="abortcontroller"></a>

# window.AbortController
**See**: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
<br></br> See also [AbortSignal](abort-signal.md#module:global.AbortSignal)  


<a name="abortcontroller-signal" id="abortcontroller-signal"></a>

## signal : `AbortSignal`
AbortSignal object, which can be used to abort a request



<a name="abortcontroller-abort" id="abortcontroller-abort"></a>

## abort(reason)
Aborts a request before it has completed.
If the reason is not specified, the reason is set to "AbortError" DomException


| Param | Type | Description |
| --- | --- | --- |
| reason | `*` | the reason why the operation was aborted |


  