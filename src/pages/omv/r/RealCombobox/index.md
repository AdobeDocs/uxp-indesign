# RealCombobox
A high-precision numeric entry control featuring both a pop-up menu and an entry field.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the RealCombobox.
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
> The parent of the RealCombobox (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the RealCombobox within its containing object.
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
> String **stringList** 
>
> The menu items on a dropdown or combobox control, as an array of strings.
*** 
> Number **minimumValue** 
>
> The minumim value that a user is allowed to type in a numeric editbox or combobox. Note: The value for a measurement editbox or combobox is interpreted in points, regardless of the edit units specified for the control. The points value is converted automatically to the edit unit when the dialog is opened.
*** 
> Number **maximumValue** 
>
> The maximum value that a user is allowed to type in a numeric editbox or combobox. Note: The value for a measurement editbox or combobox is interpreted in points, regardless of the edit units specified for the control. The points value is converted automatically to the edit unit when the dialog is opened.
*** 
> Number **smallNudge** 
>
> The amount to increment/decrement the value when the user selects the control and presses an arrow key on the keyboard.
*** 
> Number **largeNudge** 
>
> The amount to increment/decrement the value when a user selects the control and holds down the Shift key while pressing an arrow key on the keyboard.
*** 
> String **editContents** 
>
> The default value in an editbox control. Note: Do not specify both edit contents and edit value. If both are specified, the one that occurs later in the script is used.
*** 
> Number **editValue** 
>
> The real number default value of the editbox or combobox. Note: For measurement controls, the value is interpreted in points. The points value is converted to edit units when the dialog opens. Note: Do not specify both edit value and edit contents. If both are specified, the one that occurs later in the script is used.
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
> Generates a string which, if executed, will return the RealCombobox.
*** 
> RealCombobox **getElements**()
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


