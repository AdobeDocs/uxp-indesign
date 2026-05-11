# ImportExportEvent
An import or export event.

## Class
> *Read Only* 
> 
> String **BEFORE_EXPORT** = beforeExport
> 
> Dispatched before a ImportExportEvent is exported. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_EXPORT** = afterExport
> 
> Dispatched after a ImportExportEvent is exported. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_IMPORT** = beforeImport
> 
> Dispatched before importing a file into a ImportExportEvent. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_IMPORT** = afterImport
> 
> Dispatched after importing a file into a ImportExportEvent. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **FAILED_EXPORT** = failedExport
> 
> Dispatched after a ImportExportEvent export is canceled or fails. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> File **fullName** 
>
> The full path to the ImportExportEvent, including the name of the ImportExportEvent.
*** 
> *Read Only* 
> 
> String **format** 
>
> The import/export file format.
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
> The unique ID of the ImportExportEvent.
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
> The parent of the ImportExportEvent (a Application or Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the ImportExportEvent within its containing object.
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
> Generates a string which, if executed, will return the ImportExportEvent.
*** 
> ImportExportEvent **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
*** 
> String **toSpecifier**()
> 
> Retrieves the object specifier.

