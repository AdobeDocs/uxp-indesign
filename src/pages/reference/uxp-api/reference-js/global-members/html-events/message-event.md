
<a name="messageevent" id="messageevent"></a>

# window.MessageEvent
**See**: https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent  


<a name="new-messageevent-new" id="new-messageevent-new"></a>

## MessageEvent(data, origin, source, eventInit)
Creates an instance of MessageEvent.


| Param | Type |
| --- | --- |
| data | `*` | 
| origin | `*` | 
| source | `*` | 
| eventInit | `*` | 



<a name="messageevent-data" id="messageevent-data"></a>

## data ⇒ `string`
**Returns**: `string` - returns the data sent by the server.  


<a name="messageevent-origin" id="messageevent-origin"></a>

## origin ⇒ `string`
**Returns**: `string` - returns the origin of the message.  


<a name="messageevent-source" id="messageevent-source"></a>

## source ⇒ `string`
**Returns**: `string` - returns the string indicating the messageEventSource.  


<a name="event-type" id="event-type"></a>

## type
**Read only**


<a name="event-istrusted" id="event-istrusted"></a>

## isTrusted : `boolean`
**Read only**


<a name="event-target" id="event-target"></a>

## target : `Node`
**Read only**


<a name="event-currenttarget" id="event-currenttarget"></a>

## currentTarget : `Node`
**Read only**


<a name="event-bubbles" id="event-bubbles"></a>

## bubbles : `boolean`
**Read only**


<a name="event-cancelable" id="event-cancelable"></a>

## cancelable : `boolean`
**Read only**


<a name="event-composed" id="event-composed"></a>

## composed : `boolean`
**Read only**


<a name="event-eventphase" id="event-eventphase"></a>

## eventPhase
**Read only**


<a name="event-defaultprevented" id="event-defaultprevented"></a>

## defaultPrevented : `boolean`
**Read only**


<a name="event-returnvalue" id="event-returnvalue"></a>

## returnValue : `*`


<a name="event-initevent" id="event-initevent"></a>

## initEvent(typeArg, bubblesArg, cancelableArg)

| Param | Type |
| --- | --- |
| typeArg | `string` | 
| bubblesArg | `boolean` | 
| cancelableArg | `boolean` | 



<a name="event-composedpath" id="event-composedpath"></a>

## composedPath()
Returns the event's path

**See**

- https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
- https://dom.spec.whatwg.org/#dom-event-composedpath



<a name="event-preventdefault" id="event-preventdefault"></a>

## preventDefault()


<a name="event-stopimmediatepropagation" id="event-stopimmediatepropagation"></a>

## stopImmediatePropagation()


<a name="event-stoppropagation" id="event-stoppropagation"></a>

## stopPropagation()

  