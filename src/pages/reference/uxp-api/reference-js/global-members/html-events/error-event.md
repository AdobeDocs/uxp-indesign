
<a name="errorevent" id="errorevent"></a>

# window.ErrorEvent
**See**

- https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent
- https://html.spec.whatwg.org/#the-errorevent-interface



<a name="new-errorevent-new" id="new-errorevent-new"></a>

## ErrorEvent(typeArg, [eventInit])
Creates an instance of ErrorEvent.


| Param | Type | Default |
| --- | --- | --- |
| typeArg | `*` |  | 
| [eventInit] | `*` | `{}` | 



<a name="errorevent-message" id="errorevent-message"></a>

## message
**Read only**


<a name="errorevent-filename" id="errorevent-filename"></a>

## filename
**Read only**


<a name="errorevent-lineno" id="errorevent-lineno"></a>

## lineno
**Read only**


<a name="errorevent-colno" id="errorevent-colno"></a>

## colno
**Read only**


<a name="errorevent-error" id="errorevent-error"></a>

## error
**Read only**


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

  