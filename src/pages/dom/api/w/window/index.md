# Window
A window.

## Class
> *Read Only* 
> 
> String **AFTER_SELECTION_CHANGED** = afterSelectionChanged
> 
> Dispatched after the active selection changes. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_SELECTION_ATTRIBUTE_CHANGED** = afterSelectionAttributeChanged
> 
> Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_DEACTIVATE** = beforeDeactivate
> 
> Dispatched before the Window becomes inactive. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_ACTIVATE** = afterActivate
> 
> Dispatched after the Window becomes active. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_ATTRIBUTE_CHANGED** = afterAttributeChanged
> 
> Dispatched when the value of a property changes on this Window. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_OPEN** = afterOpen
> 
> Dispatched after a Window is opened. This event bubbles. This event is not cancelable.
*** 
> *Read Only* 
> 
> String **BEFORE_CLOSE** = beforeClose
> 
> Dispatched before a Window is closed. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_CLOSE** = afterClose
> 
> Dispatched when a Window is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the Window.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the Window (a Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Window within its containing object.
*** 
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
*** 
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
*** 
> Object **selection** 
>
> The selected object(s). Can also accept: Object or NothingEnum enumerator.
*** 
> Number **bounds** 
>
> The bounds of the window (specified in pixels) in the form [top, left, bottom, right].
*** 
> PageItem **selectionKeyObject** 
>
> The key object of the selection. Can also accept: NothingEnum enumerator.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **select**( Mixed **selectableItems**, SelectionOptions **existingSelection** )
> 
> Selects the specified object(s).
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | selectableItems | The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator. |
| SelectionOptions | existingSelection | The selection status of the Window in relation to previously selected objects. (Optional) |

*** 
> **close**()
> 
> Closes the Window.
*** 
> **maximize**()
> 
> Maximizes the window.
*** 
> **minimize**()
> 
> Minimizes the window.
*** 
> **restore**()
> 
> Restores the window.
*** 
> **bringToFront**()
> 
> Brings the object to the front.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Window.
*** 
> Window **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
*** 
> String **toSpecifier**()
> 
> Retrieves the object specifier.
*** 
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

*** 
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


