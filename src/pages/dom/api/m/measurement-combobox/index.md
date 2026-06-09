# MeasurementCombobox
A measurement entry control featuring both a pop-up menu and an entry field.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the MeasurementCombobox.
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
> The parent of the MeasurementCombobox (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the MeasurementCombobox within its containing object.
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
> Number **minimumValue** 
>
> The minumim value that a user is allowed to type in a numeric editbox or combobox. Note: The value for a measurement editbox or combobox is interpreted in points, regardless of the edit units specified for the control. The points value is converted automatically to the edit unit when the dialog is opened.
<HorizontalLine />
> Number **maximumValue** 
>
> The maximum value that a user is allowed to type in a numeric editbox or combobox. Note: The value for a measurement editbox or combobox is interpreted in points, regardless of the edit units specified for the control. The points value is converted automatically to the edit unit when the dialog is opened.
<HorizontalLine />
> Number **smallNudge** 
>
> The amount to increment/decrement the value when the user selects the control and presses an arrow key on the keyboard.
<HorizontalLine />
> Number **largeNudge** 
>
> The amount to increment/decrement the value when a user selects the control and holds down the Shift key while pressing an arrow key on the keyboard.
<HorizontalLine />
> MeasurementUnits **editUnits** 
>
> The measurement units to display in the measurement control.
<HorizontalLine />
> String **stringList** 
>
> The menu items on a dropdown or combobox control, as an array of strings.
<HorizontalLine />
> String **editContents** 
>
> The default value in an editbox control. Note: Do not specify both edit contents and edit value. If both are specified, the one that occurs later in the script is used.
<HorizontalLine />
> Number **editValue** 
>
> The real number default value of the editbox or combobox. Note: For measurement controls, the value is interpreted in points. The points value is converted to edit units when the dialog opens. Note: Do not specify both edit value and edit contents. If both are specified, the one that occurs later in the script is used.
<HorizontalLine />
> Number **minWidth** 
>
> The width of the control. For an editbox or combobox, specifies the minimum width of the box.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the MeasurementCombobox.
<HorizontalLine />
> MeasurementCombobox **getElements**()
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


