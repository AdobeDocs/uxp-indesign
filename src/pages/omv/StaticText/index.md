# StaticText
A static text control (typically a label for another control or a set of controls).

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the StaticText.
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
> The parent of the StaticText (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the StaticText within its containing object.
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
> String **staticLabel** 
>
> Text that appears in the StaticText.
*** 
> StaticAlignmentOptions **staticAlignment** 
>
> Text alignment for the StaticText.
*** 
> Number **minWidth** 
>
> The width of the control. For an editbox or combobox, specifies the minimum width of the box.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the StaticText.
*** 
> StaticText **getElements**()
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


