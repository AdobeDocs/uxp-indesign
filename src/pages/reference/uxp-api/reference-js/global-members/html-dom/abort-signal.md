
<a name="abortsignal" id="abortsignal"></a>

# window.AbortSignal
**See**: https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
<br></br>
Please note that AbortSignal works only for web streams.  


<a name="abortsignal-aborted" id="abortsignal-aborted"></a>

## aborted : `boolean`
Whether the request that the signal is communicating with is aborted or not



<a name="abortsignal-reason" id="abortsignal-reason"></a>

## reason : `*`
The abort reason, once the signal has aborted.
`Undefined` when the signal has not been aborted.



<a name="abortsignal-throwifaborted" id="abortsignal-throwifaborted"></a>

## throwIfAborted()
Throws the signal's abort reason if the signal has been aborted.
Otherwise, it does nothing.



<a name="abortsignal-abort" id="abortsignal-abort"></a>

## abort(reason)
Creates an AbortSignal object that is already set as aborted.

**Returns**: `AbortSignal` - AbortSignal object with the AbortSignal.aborted property is set to true
     and AbortSignal.reason set to the specified or default reason  

| Param | Type |
| --- | --- |
| reason | `*` | 


  