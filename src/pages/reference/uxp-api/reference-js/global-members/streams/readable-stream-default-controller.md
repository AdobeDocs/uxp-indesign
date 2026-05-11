
<a name="readablestreamdefaultcontroller" id="readablestreamdefaultcontroller"></a>

# window.ReadableStreamDefaultController
**See**: [Web APIs - ReadableStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController)  


<a name="readablestreamdefaultcontroller-desiredsize" id="readablestreamdefaultcontroller-desiredsize"></a>

## desiredSize : `number`
Returns the desired size to fill the controlled stream’s internal queue.
It can be negative, if the queue is over-full.



<a name="readablestreamdefaultcontroller-close" id="readablestreamdefaultcontroller-close"></a>

## close()
Closes the controlled readable stream.
Consumers will still be able to read any previously-enqueued chunks from the stream,
but once those are read, the stream will become closed.

**Throws**:

- `TypeError` thrown if the source is not a ReadableStreamDefaultController



<a name="readablestreamdefaultcontroller-enqueue" id="readablestreamdefaultcontroller-enqueue"></a>

## enqueue(chunk)
Enqueues the given chunk in the controlled readable stream.

**Throws**:

- `TypeError` thrown if the source is not a ReadableStreamDefaultController


| Param | Type |
| --- | --- |
| chunk | `*` | 



<a name="readablestreamdefaultcontroller-error" id="readablestreamdefaultcontroller-error"></a>

## error(error)
Errors the controlled readable stream, making all future interactions with it fail with the given error.

**Throws**:

- `TypeError` thrown if the source object is not a ReadableStreamDefaultController


| Param | Type |
| --- | --- |
| error | `*` | 


  