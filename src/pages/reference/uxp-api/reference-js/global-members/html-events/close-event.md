
<a name="closeevent" id="closeevent"></a>

# window.CloseEvent
**See**: https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent  


<a name="new-closeevent-new" id="new-closeevent-new"></a>

## CloseEvent(code, reason, wasClean)
Creates an instance of CloseEvent.


| Param | Type |
| --- | --- |
| code | `*` | 
| reason | `*` | 
| wasClean | `*` | 



<a name="closeevent-code" id="closeevent-code"></a>

## code ⇒ `number`
**Returns**: `number` - returns the close code sent by the server.  


<a name="closeevent-reason" id="closeevent-reason"></a>

## reason ⇒ `number`
**Returns**: `number` - returns the string indicating the reason the server closed the connection..  


<a name="closeevent-wasclean" id="closeevent-wasclean"></a>

## wasClean ⇒ `boolean`
**Returns**: `boolean` - returns a boolean that inndicates whether or not the connection was cleanly closed.  


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

  