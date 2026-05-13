# StoryWindow
A story window.

## Class
> *Read Only* 
> 
> String **AFTER_SELECTION_CHANGED** = afterSelectionChanged
> 
> Dispatched after the active selection changes. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_SELECTION_ATTRIBUTE_CHANGED** = afterSelectionAttributeChanged
> 
> Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_DEACTIVATE** = beforeDeactivate
> 
> Dispatched before the StoryWindow becomes inactive. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_ACTIVATE** = afterActivate
> 
> Dispatched after the StoryWindow becomes active. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_ATTRIBUTE_CHANGED** = afterAttributeChanged
> 
> Dispatched when the value of a property changes on this StoryWindow. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_OPEN** = afterOpen
> 
> Dispatched after a StoryWindow is opened. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_CLOSE** = beforeClose
> 
> Dispatched before a StoryWindow is closed. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_CLOSE** = afterClose
> 
> Dispatched when a StoryWindow is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the StoryWindow.
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
> The parent of the StoryWindow (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the StoryWindow within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
<HorizontalLine />
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
<HorizontalLine />
> Object **selection** 
>
> The selected object(s). Can also accept: Object or NothingEnum enumerator.
<HorizontalLine />
> Number **bounds** 
>
> The bounds of the window (specified in pixels) in the form [top, left, bottom, right].
<HorizontalLine />
> PageItem **selectionKeyObject** 
>
> The key object of the selection. Can also accept: NothingEnum enumerator.
<HorizontalLine />
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
| SelectionOptions | existingSelection | The selection status of the StoryWindow in relation to previously selected objects. (Optional) |

<HorizontalLine />
> **close**()
> 
> Closes the StoryWindow.
<HorizontalLine />
> **maximize**()
> 
> Maximizes the window.
<HorizontalLine />
> **minimize**()
> 
> Minimizes the window.
<HorizontalLine />
> **restore**()
> 
> Restores the window.
<HorizontalLine />
> **bringToFront**()
> 
> Brings the object to the front.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the StoryWindow.
<HorizontalLine />
> StoryWindow **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
<HorizontalLine />
> String **toSpecifier**()
> 
> Retrieves the object specifier.
<HorizontalLine />
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

<HorizontalLine />
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


