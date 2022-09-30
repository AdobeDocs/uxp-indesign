# DocumentEvent
A document event.

## Class
> *Read Only* 
> 
> String **BEFORE_NEW** = beforeNew
> 
> Dispatched before a Document is created. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_NEW** = afterNew
> 
> Dispatched after a Document is created. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_OPEN** = beforeOpen
> 
> Dispatched before a Document is opened. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_OPEN** = afterOpen
> 
> Dispatched after a Document is opened. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_SAVE** = beforeSave
> 
> Dispatched before a Document is saved. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_SAVE** = afterSave
> 
> Dispatched after a Document is saved. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_SAVE_AS** = beforeSaveAs
> 
> Dispatched before a Document is saved under a new name. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_SAVE_AS** = afterSaveAs
> 
> Dispatched after a Document is saved under a new name. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_SAVE_A_COPY** = beforeSaveACopy
> 
> Dispatched before a copy of a Document is saved. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_SAVE_A_COPY** = afterSaveACopy
> 
> Dispatched after a copy of a Document is saved. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_REVERT** = beforeRevert
> 
> Dispatched before a Document is reverted. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_REVERT** = afterRevert
> 
> Dispatched after a Document is reverted. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_CLOSE** = beforeClose
> 
> Dispatched before a Document is closed. This event bubbles. This event is not cancelable.
*** 
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
*** 
> *Read Only* 
> 
> String **eventType** 
>
> The name of the event.
*** 
> *Read Only* 
> 
> Object **target** 
>
> The target of the event.
*** 
> *Read Only* 
> 
> Object **currentTarget** 
>
> The current propagation target of the event.
*** 
> *Read Only* 
> 
> EventPhases **eventPhase** 
>
> The current propagation phase of the event.
*** 
> *Read Only* 
> 
> Boolean **bubbles** 
>
> If true, the event supports the bubbling phase of propagation.
*** 
> *Read Only* 
> 
> Boolean **cancelable** 
>
> If true, the default behavior of the event on its target can be canceled.
*** 
> *Read Only* 
> 
> Date **timeStamp** 
>
> The time the event was initialized.
*** 
> *Read Only* 
> 
> Boolean **propagationStopped** 
>
> If true, propagation of the event beyond the current target has been stopped.
*** 
> *Read Only* 
> 
> Boolean **defaultPrevented** 
>
> If true, the default behavior of the event on its target has been canceled.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the DocumentEvent.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the DocumentEvent (a Application or Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the DocumentEvent within its containing object.
*** 
> UserInteractionLevels **userInteractionLevel** 
>
> Controls the display of dialogs and alerts during script processing.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **stopPropagation**()
> 
> Stops propagation of the event beyond the current target.
*** 
> **preventDefault**()
> 
> Cancels the default behavior of the event on its target.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the DocumentEvent.
*** 
> DocumentEvent **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
*** 
> String **toSpecifier**()
> 
> Retrieves the object specifier.

