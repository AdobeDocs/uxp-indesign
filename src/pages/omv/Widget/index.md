# Widget
Generic term for an object in a dialog column or dialog row, including dialog controls such as radio button groups, checkboxes, editboxes, dropdowns, and comboboxes; static text objects; enabling groups; border panels; and nested dialog columns and dialog rows. For information, see dialog column, dialog row, static text, border panel, enabling group, radiobutton group, checkbox control, angle editbox, angle combobox, integer editbox, integer combobox, measurement editbox, measurement combobox, percent editbox, percent combobox, real editbox, real combobox, and text editbox.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Widget.
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
> The parent of the Widget (a DialogColumn, DialogRow, EnablingGroup, BorderPanel or RadiobuttonGroup).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Widget within its containing object.
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
> Generates a string which, if executed, will return the Widget.
*** 
> Widget **getElements**()
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


