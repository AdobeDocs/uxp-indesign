
<a name="keyboardevent" id="keyboardevent"></a>

# window.KeyboardEvent
**See**: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent  


<a name="new-keyboardevent-new" id="new-keyboardevent-new"></a>

## KeyboardEvent(type, eventInit)
Creates an instance of KeyboardEvent.


| Param | Type |
| --- | --- |
| type | `*` | 
| eventInit | `*` | 



<a name="keyboardevent-altkey" id="keyboardevent-altkey"></a>

## altKey
**Read only**


<a name="keyboardevent-ctrlkey" id="keyboardevent-ctrlkey"></a>

## ctrlKey
**Read only**


<a name="keyboardevent-metakey" id="keyboardevent-metakey"></a>

## metaKey
**Read only**


<a name="keyboardevent-shiftkey" id="keyboardevent-shiftkey"></a>

## shiftKey
**Read only**


<a name="keyboardevent-code" id="keyboardevent-code"></a>

## code
**Read only**


<a name="keyboardevent-keycode" id="keyboardevent-keycode"></a>

## keyCode
**Read only**


<a name="keyboardevent-key" id="keyboardevent-key"></a>

## key
**Read only**


<a name="keyboardevent-location" id="keyboardevent-location"></a>

## location
**Read only**


<a name="keyboardevent-repeat" id="keyboardevent-repeat"></a>

## repeat
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


<a name="keyboardevent-getmodifierstate" id="keyboardevent-getmodifierstate"></a>

## getModifierState(keyArgs)
**Returns**: `boolean`  

| Param | Type |
| --- | --- |
| keyArgs | `string` | 



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

  