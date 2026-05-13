# DocumentEvent
A document event.

## Class
> *Read Only* 
> 
> String **BEFORE_NEW** = beforeNew
> 
> Dispatched before a Document is created. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_NEW** = afterNew
> 
> Dispatched after a Document is created. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_OPEN** = beforeOpen
> 
> Dispatched before a Document is opened. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_OPEN** = afterOpen
> 
> Dispatched after a Document is opened. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_SAVE** = beforeSave
> 
> Dispatched before a Document is saved. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_SAVE** = afterSave
> 
> Dispatched after a Document is saved. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_SAVE_AS** = beforeSaveAs
> 
> Dispatched before a Document is saved under a new name. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_SAVE_AS** = afterSaveAs
> 
> Dispatched after a Document is saved under a new name. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_SAVE_A_COPY** = beforeSaveACopy
> 
> Dispatched before a copy of a Document is saved. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_SAVE_A_COPY** = afterSaveACopy
> 
> Dispatched after a copy of a Document is saved. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_REVERT** = beforeRevert
> 
> Dispatched before a Document is reverted. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_REVERT** = afterRevert
> 
> Dispatched after a Document is reverted. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_CLOSE** = beforeClose
> 
> Dispatched before a Document is closed. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_CLOSE** = afterClose
> 
> Dispatched after a Document is closed. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> File **fullName** 
>
> The full path to the DocumentEvent, including the name of the DocumentEvent.
<HorizontalLine />
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
> The unique ID of the DocumentEvent.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the DocumentEvent (a Application or Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the DocumentEvent within its containing object.
<HorizontalLine />
> UserInteractionLevels **userInteractionLevel** 
>
> Controls the display of dialogs and alerts during script processing.
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
> Generates a string which, if executed, will return the DocumentEvent.
<HorizontalLine />
> DocumentEvent **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
<HorizontalLine />
> String **toSpecifier**()
> 
> Retrieves the object specifier.

