# PrintEvent
A print event

## Class
> *Read Only* 
> 
> String **BEFORE_PRINT** = beforePrint
> 
> Dispatched before a PrintEvent is printed. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_PRINT** = afterPrint
> 
> Dispatched after a PrintEvent is printed. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> String **eventType** 
>
> The name of the event.
<HorizontalLine />
> *Read Only* 
> 
> Object **target** 
>
> The target of the event.
<HorizontalLine />
> *Read Only* 
> 
> Object **currentTarget** 
>
> The current propagation target of the event.
<HorizontalLine />
> *Read Only* 
> 
> EventPhases **eventPhase** 
>
> The current propagation phase of the event.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **bubbles** 
>
> If true, the event supports the bubbling phase of propagation.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **cancelable** 
>
> If true, the default behavior of the event on its target can be canceled.
<HorizontalLine />
> *Read Only* 
> 
> Date **timeStamp** 
>
> The time the event was initialized.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **propagationStopped** 
>
> If true, propagation of the event beyond the current target has been stopped.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **defaultPrevented** 
>
> If true, the default behavior of the event on its target has been canceled.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the PrintEvent.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the PrintEvent (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the PrintEvent within its containing object.
<HorizontalLine />
> DocumentPrintUiOptions **documentPrintUiOption** 
>
> UI options for print document
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **stopPropagation**()
> 
> Stops propagation of the event beyond the current target.
<HorizontalLine />
> **preventDefault**()
> 
> Cancels the default behavior of the event on its target.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the PrintEvent.
<HorizontalLine />
> PrintEvent **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
<HorizontalLine />
> String **toSpecifier**()
> 
> Retrieves the object specifier.

